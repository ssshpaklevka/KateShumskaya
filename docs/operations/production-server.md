# Production server

`shumskayakate.com` runs on `159.194.251.103` as a systemd-managed Next.js service behind Nginx.

## Runtime

- Ubuntu 26.04, distribution Node.js 22, pnpm 11.8.0.
- Application directory: `/var/www/kate-shumskaya`.
- Service: `kate-shumskaya.service`, running as the unprivileged `katesite` user.
- The application listens only on `127.0.0.1:3000`; Nginx is the only public HTTP entry point.
- Environment file: `/etc/kate-shumskaya.env` (`root:root`, mode `0600`). No Resend API key is configured.

## Network and TLS

- UFW denies inbound traffic by default and allows only rate-limited SSH plus TCP 80/443.
- SSH is key-only; password authentication and forwarding are disabled.
- Fail2ban permanently bans a source after one failed SSH authentication.
- Nginx redirects HTTP to HTTPS, rejects unknown hosts, and adds HSTS/security headers.
- Let's Encrypt serves only `shumskayakate.com`; `certbot.timer` renews it automatically and reloads Nginx through a deploy hook.

## Deployment

Transfer Git-tracked files with resumable rsync, verify them with a checksum dry-run, then install with `pnpm install --frozen-lockfile`. A release must pass `pnpm audit --prod`, `pnpm run check-lint`, `pnpm run check-types`, and `pnpm run build` before it is switched into `/var/www/kate-shumskaya` and the service is restarted.

Do not copy an old `.next` or `node_modules` into a new release. Keep the previous release until the new one passes loopback and public HTTPS probes.

## Recovery and evidence

- Hardening backup: `/root/server-hardening-backup-20260926-094326`.
- Evidence from the blocked Next.js 15.1.6 RSC exploit attempts: `/root/kate-incident-20260926-1008`.
- Validate configuration before reload with `sshd -t` and `nginx -t`.
