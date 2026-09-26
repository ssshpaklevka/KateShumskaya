# Production Server Migration Design

## Goal

Deploy the `KateShumskaya` Next.js application to `159.194.251.103`, serve it as `shumskayakate.com` without a `www` hostname, and apply the security posture used by the accessible `Voice-Toys-V2-msk` server without copying host-specific state.

## Current State

- The target runs Ubuntu 26.04.1 and currently exposes only SSH on port 22.
- Root SSH currently accepts passwords and keys. UFW is inactive. Fail2ban is active with a weak six-attempt, ten-minute policy.
- The local repository is clean and its `npm run build` completes successfully. Next.js reports a non-fatal ESLint dependency warning for missing `@eslint/js`.
- The app requires `RESEND_API_KEY` for the contact form, but no local environment file provides it.
- `shumskayakate.com` currently resolves to `139.100.201.87`, not the target `159.194.251.103`.

## Deployment Architecture

The application will live at `/var/www/kate-shumskaya` and run through a hardened systemd unit as the non-login system user `katesite`. Next.js will listen only on `127.0.0.1:3000`. Nginx will be the only public application entry point and will proxy the bare domain to Next.js.

The repository working tree will be transferred without `.git`, `.next`, `node_modules`, local environment files, or other ignored build output. Dependencies and the production bundle will be installed and built on the server with the lockfile. A root-owned environment file readable by `katesite` will be referenced by systemd; `RESEND_API_KEY` is added only when supplied and is never stored in Git.

## Security

- SSH authentication is public-key only. Root remains the administrative SSH user but cannot authenticate with a password.
- SSH permits at most two authentication attempts, has a 20-second login grace period, disables X11, agent, TCP forwarding, tunnels, and gateway ports, and only allows `root`.
- Before SSH is reloaded, `sshd -t` must pass. A separate key-only SSH connection must succeed after reload before the existing session is released.
- UFW defaults to deny incoming and allow outgoing. Only rate-limited TCP 22 plus TCP 80 and 443 are allowed.
- Fail2ban uses the systemd SSH backend and UFW action. One failed SSH attempt within ten minutes receives an indefinite ban. Historical bans from the source server are not copied.
- Kernel network and information-leak hardening is applied through a dedicated sysctl drop-in.
- Automatic security upgrades remain enabled.
- The app service uses systemd sandboxing, an empty capability set, private temporary/devices namespaces, read-only system paths, a restrictive umask, and write access only to its application directory.
- Existing provider and operator root public keys are preserved. No public key is removed during this migration.

## HTTP and TLS Rollout

Before DNS changes, Nginx serves the application over HTTP and is verified locally on the target with `Host: shumskayakate.com`. The operator then changes the bare-domain A record to `159.194.251.103` and removes any stale AAAA record if one exists.

After public DNS resolves to the target, Certbot obtains a Let's Encrypt certificate for `shumskayakate.com` only. Nginx then redirects HTTP to HTTPS and serves TLS 1.2/1.3 with HSTS, clickjacking, MIME-sniffing, and referrer-policy headers. No `www` server name or certificate name is configured.

## Verification and Rollback

Verification covers the build, systemd service state, loopback-only port 3000, Nginx configuration and response, UFW rules, Fail2ban jail, effective SSH settings, key-only reconnect, and automatic upgrades. After DNS propagation it also covers the public HTTP redirect, certificate hostname, HTTPS response, and renewal dry-run.

Every replaced target configuration is backed up with a timestamp before modification. If an SSH check fails, the SSH hardening drop-in is removed from the still-open session and SSH is reloaded. If application or Nginx checks fail, the new unit/site is disabled and the saved configuration is restored. DNS is not changed until the application passes target-local checks.

## External Inputs

- DNS control is required to change the A record from `139.100.201.87` to `159.194.251.103`.
- A valid `RESEND_API_KEY` is required for contact-form delivery. Deployment may proceed without it, but the form is not considered operational until the key is installed and tested.
