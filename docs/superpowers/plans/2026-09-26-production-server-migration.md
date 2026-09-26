# Production Server Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Secure `159.194.251.103`, deploy the Kate Shumskaya Next.js site under a dedicated account, and prepare `shumskayakate.com` for HTTPS without `www`.

**Architecture:** Nginx exposes ports 80/443 and proxies to a systemd-managed Next.js process bound to `127.0.0.1:3000`. SSH, UFW, Fail2ban, sysctl, and systemd sandboxing mirror the policy of `Voice-Toys-V2-msk` while excluding its historical bans, certificates, and host-specific data.

**Tech Stack:** Ubuntu 26.04, OpenSSH, UFW, Fail2ban, sysctl, Node.js, npm, Next.js 15, systemd, Nginx, Certbot.

**Spec:** `docs/superpowers/specs/2026-09-26-production-server-migration-design.md`

## Global Constraints

- Target host is `159.194.251.103`.
- Public hostname is only `shumskayakate.com`; no `www` hostname is configured.
- Preserve every existing root authorized public key.
- Never close the active administrative session before a fresh key-only SSH connection succeeds.
- Next.js must listen only on `127.0.0.1:3000` and run as the non-login `katesite` user.
- Deploy without `RESEND_API_KEY`; contact-form delivery is explicitly excluded from completion.
- Do not request a certificate until public DNS resolves to `159.194.251.103`.

## Review Focus

- SSH configuration rejection: `sshd -t` must pass before reload and effective settings must be checked after reload.
- Firewall lockout: port 22 must be added before UFW is enabled and a new SSH connection must succeed afterward.
- Public backend exposure: `ss -lntp` must show port 3000 only on `127.0.0.1`.
- Missing TLS prerequisites: Nginx must remain valid over HTTP while DNS points elsewhere; TLS activation is a separate gated step.
- Broken production bundle: the target-local Nginx request must return the application HTML before DNS changes.

---

### Task 1: Harden the Base Server

**Files:**
- Create: target `/etc/ssh/sshd_config.d/00-hardening.conf`
- Replace: target `/etc/fail2ban/jail.local`
- Create: target `/etc/sysctl.d/99-hardening.conf`
- Modify: target UFW persistent rules

**Interfaces:**
- Consumes: the existing working root public-key login.
- Produces: a key-only administrative SSH endpoint protected by UFW and Fail2ban.

- [ ] **Step 1: Create timestamped backups and install the SSH hardening drop-in**

Preserve the current SSH and Fail2ban files. Configure public-key-only root access, `AllowUsers root`, two SSH attempts, no forwarding or tunnels, and the liveness values from the spec.

- [ ] **Step 2: Validate and reload SSH**

Run: `sshd -t && systemctl reload ssh`

Expected: exit status 0; the current session stays open.

- [ ] **Step 3: Prove key-only reconnect before continuing**

Run a fresh batch-mode SSH command from the workstation and inspect `sshd -T`.

Expected: reconnect succeeds; password authentication is `no`, authentication methods are `publickey`, forwarding is disabled, and only root is allowed.

- [ ] **Step 4: Apply UFW, Fail2ban, sysctl, and unattended-upgrade policy**

Allow rate-limited 22 and TCP 80/443 before enabling default-deny UFW. Configure the SSH jail for one retry and indefinite UFW ban; load the kernel hardening drop-in; keep unattended upgrades enabled.

- [ ] **Step 5: Verify the security boundary**

Run: `ufw status verbose`, `fail2ban-client status sshd`, `sysctl --system`, and a second fresh SSH reconnect.

Expected: only 22/80/443 are allowed; the SSH jail is active; sysctl has no load errors; SSH still works.

### Task 2: Install Runtime and Deploy the Application

**Files:**
- Create: target `/var/www/kate-shumskaya/`
- Create: target `/etc/kate-shumskaya.env`
- Create: target `/etc/systemd/system/kate-shumskaya.service`
- Transfer: tracked repository files excluding VCS and build artifacts

**Interfaces:**
- Consumes: the clean local Git working tree and target package manager.
- Produces: a sandboxed Next.js service at `127.0.0.1:3000`.

- [ ] **Step 1: Install Node.js runtime and create the service account**

Install a current Node.js 20 LTS runtime plus build prerequisites. Create `katesite` as a locked system user with `/usr/sbin/nologin`.

- [ ] **Step 2: Transfer the tracked application source**

Use a Git archive/SSH stream so `.git`, `.next`, `node_modules`, and ignored local files are excluded. Set the application tree owner to `katesite:katesite`.

- [ ] **Step 3: Install and build under the service account**

Run: `npm ci` followed by `npm run build` in `/var/www/kate-shumskaya` as `katesite`.

Expected: both commands exit 0 and `.next` exists. The known non-fatal missing `@eslint/js` warning may appear.

- [ ] **Step 4: Install and start the hardened systemd unit**

Reference `/etc/kate-shumskaya.env`, leave `RESEND_API_KEY` unset, bind Next.js to loopback, grant write access only to the application directory, and apply the systemd restrictions in the spec.

- [ ] **Step 5: Verify the application process**

Run: `systemctl status kate-shumskaya`, `curl http://127.0.0.1:3000/`, and `ss -lntp`.

Expected: the unit is active; HTTP returns application HTML; port 3000 listens only on `127.0.0.1`.

### Task 3: Configure and Verify Nginx over HTTP

**Files:**
- Create: target `/etc/nginx/sites-available/kate-shumskaya`
- Create symlink: target `/etc/nginx/sites-enabled/kate-shumskaya`
- Remove symlink if present: target `/etc/nginx/sites-enabled/default`

**Interfaces:**
- Consumes: the healthy loopback Next.js service from Task 2.
- Produces: a public HTTP reverse proxy for the bare hostname.

- [ ] **Step 1: Install Nginx and create the bare-domain HTTP site**

Configure `server_name shumskayakate.com`, proxy to `127.0.0.1:3000`, pass forwarding headers, hide `X-Powered-By`, and provide the ACME challenge directory.

- [ ] **Step 2: Validate and reload Nginx**

Run: `nginx -t && systemctl reload nginx`

Expected: syntax and configuration tests succeed.

- [ ] **Step 3: Verify locally and from the workstation**

Run target-local and remote HTTP requests with `Host: shumskayakate.com` directed to `159.194.251.103`.

Expected: status 200 and the Kate Shumskaya application HTML; direct public port 3000 is unreachable.

### Task 4: Switch DNS and Activate TLS

**Files:**
- Modify externally: `shumskayakate.com` A record
- Modify through Certbot: target Nginx site and `/etc/letsencrypt/`

**Interfaces:**
- Consumes: a verified public HTTP deployment and DNS control.
- Produces: the public HTTPS site with renewal configured.

- [ ] **Step 1: Request the DNS change from the operator**

Set the A record to `159.194.251.103`; remove a stale AAAA record if one exists.

- [ ] **Step 2: Wait for authoritative and public DNS confirmation**

Run: `dig +short A shumskayakate.com` against authoritative and public resolvers.

Expected: only `159.194.251.103` is returned.

- [ ] **Step 3: Obtain the single-name certificate and enable redirect**

Use Certbot's Nginx integration for `shumskayakate.com` only, then configure TLS 1.2/1.3 and the security headers from the spec.

- [ ] **Step 4: Verify public HTTPS and renewal**

Run: HTTPS header/body checks, certificate hostname inspection, `nginx -t`, and `certbot renew --dry-run`.

Expected: HTTP redirects to HTTPS, HTTPS returns the site, the certificate covers the bare domain, and renewal dry-run succeeds.

- [ ] **Step 5: Commit deployment documentation updates if any**

Run: `git status --short`

Expected: only intentional documentation changes are present before committing them.
