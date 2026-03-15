# BCMS Manual Template

This is the base template for all BCMS® airport client manuals. Each client gets their own branded copy deployed at `{slug}.manual.w3ns.io`.

---

## For Non-Technical Editors

### Editing content

1. Open any `.md` file in `docs/shared/` or `docs/client/`
2. Edit the text (Markdown format — see [cheatsheet](https://www.markdownguide.org/cheat-sheet/))
3. Click **Commit changes** (green button, top right in GitHub)
4. The site rebuilds and goes live in ~2 minutes

### Adding images

1. Upload your image to `docs/assets/`
2. Reference it in Markdown: `![Description](../assets/your-image.png)`

### Do not edit

- `mkdocs.yml` — site configuration (ask a developer)
- `.github/workflows/deploy.yml` — CI/CD pipeline
- `overrides/` — theme HTML overrides

---

## For Developers: New Client Setup

### 1. Create a new repo from this template

```
GitHub → bcms-manual-template → "Use this template" → "Create a new repository"
Name: bcms-manual-{client-slug}
```

### 2. Configure the client

Edit `client.yml`:

```yaml
client:
  name: "BCMS® Heathrow – System Manual"
  slug: heathrow
  language: en
  primary_color: "#1a237e"
  accent_color: "#ffffff"
  logo: docs/assets/logo.svg
  favicon: docs/assets/bcms-favicon.png
```

Replace `docs/assets/logo.svg` with the client logo.

### 3. Add GitHub Secrets

In the new repo → Settings → Secrets → Actions:

| Secret | Value |
|--------|-------|
| `SERVER_HOST` | `frontierlab` (Tailscale hostname) |
| `SERVER_SSH_KEY` | Private key for `giarenzo@frontierlab` |

### 4. Push → auto-deploys

Push any commit to `main`. The site will be live at `https://{slug}.manual.w3ns.io` in ~2 minutes.

### 5. DNS

Ensure `*.manual.w3ns.io` has a wildcard CNAME/A record pointing to the server IP.
Caddy handles wildcard TLS automatically via DNS challenge.

---

## Local Preview

```bash
pip install mkdocs-material mkdocs-macros-plugin
mkdocs serve
# → http://localhost:8000
```

---

## Server: Caddy Config

`/etc/caddy/Caddyfile` on `frontierlab`:

```caddyfile
*.manual.w3ns.io {
    tls {
        dns cloudflare {env.CF_API_TOKEN}
    }
    root * /var/www/manuals/{labels.3}
    file_server
    handle_errors {
        respond "Not found" 404
    }
}
```

`{labels.3}` automatically maps the subdomain to the correct directory — no Caddyfile edits needed per client.
