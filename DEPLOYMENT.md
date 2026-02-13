# Deploy SEEDRIX to GoDaddy cPanel (seedrix.co)

This project is built as a **static export** so you can upload it to GoDaddy cPanel (no Node.js required). The Get Started form saves leads to **cPanel’s MySQL** via a small PHP script.

---

## 1. Build the site locally

On your machine (with Node.js installed):

```bash
cd /path/to/Bsquare-1
npm install
npm run build
```

This creates an **`out`** folder with all HTML, CSS, and JS. Upload the **contents** of `out` to your cPanel.

---

## 2. Upload to GoDaddy cPanel

1. Log in to **GoDaddy** → **My Products** → **Web Hosting** → **Manage** (for the hosting account linked to seedrix.co).
2. Open **cPanel** (e.g. “cPanel Admin” or “Hosting Dashboard” → cPanel).
3. Go to **File Manager** → open **`public_html`** (this is your site root for seedrix.co).
4. **Option A – Replace everything:** Delete existing files in `public_html` (keep a backup if needed). Upload the **contents** of the `out` folder (all files and folders inside `out`, not the `out` folder itself).
5. **Option B – First time:** Upload the contents of `out` so that `public_html` contains `index.html`, `_next/`, and any other files/folders from `out`.

**Important:**  
- Upload the **contents** of `out`, so that `public_html/index.html`, `public_html/_next/`, and `public_html/api/save-lead.php` exist.  
- If your domain points to a subfolder (e.g. `public_html/seedrix`), upload into that subfolder instead.  
- When you re-upload after updates, do **not** overwrite `public_html/api/config.php` if you already created it (it’s not in the repo).

---

## 3. cPanel MySQL database for the form

The Get Started form posts to `/api/save-lead.php`, which saves leads into **MySQL in cPanel**. Do this once.

### 3a. Create the database and table

1. In cPanel go to **MySQL® Databases** (or **MySQL Databases**).
2. Create a new database (e.g. `seedrix_leads`) and note the full name (often `cpaneluser_seedrix_leads`).
3. Create a MySQL user with a strong password and add that user to the database with **ALL PRIVILEGES**.
4. Open **phpMyAdmin** (from cPanel), select your database, go to the **SQL** tab.
5. Run the SQL from **`scripts/create-leads-table.sql`** in this repo (it creates the `leads` table).

### 3b. Add the PHP config file

The PHP script reads database credentials from `public_html/api/config.php`. That file is **not** in the repo (it’s in `.gitignore`).

1. In File Manager go to **`public_html/api/`** (this folder is created when you upload the contents of `out` — it contains `save-lead.php` and `config.example.php`).
2. Copy **`config.example.php`** to **`config.php`**.
3. Edit **`config.php`** and set your cPanel MySQL details:
   - `host` → usually **`localhost`**
   - `database` → the full database name (e.g. `cpaneluser_seedrix_leads`)
   - `username` → the MySQL user you created
   - `password` → that user’s password

Save the file. Do **not** commit `config.php` to git. After this, the Get Started form will save submissions into your cPanel MySQL database.

---

## 4. Point your domain to this hosting

- If this hosting account is **already** assigned to **seedrix.co** in GoDaddy, the site should be live once upload is done (after a few minutes).
- If you have multiple domains/subdomains, in cPanel use **Domains** or **Addon Domains** to attach seedrix.co to the correct `public_html` (or subfolder).

---

## 5. Updating the site when you push to GitHub

cPanel does not auto-deploy from GitHub. Each time you want the live site to change:

1. **On your computer:** pull the latest code, then:
   ```bash
   npm install   # if dependencies changed
   npm run build
   ```
2. **Upload** the **contents** of the new `out` folder to `public_html` (or your site subfolder) in cPanel File Manager, overwriting the old files. Do **not** overwrite `public_html/api/config.php` if you already set it up.

---

### If your cPanel has Git but no Node.js (Python/Ruby don’t build this site)

Many GoDaddy/cPanel accounts have **Git Version Control** and may have **Python** or **Ruby**, but **no Node.js**. Next.js must be built with Node.js — Python and Ruby cannot run `npm run build` or produce the static `out` folder for this project.

**What you can do:**

- **Use cPanel Git to pull the repo** (optional): clone or pull your GitHub repo into a folder outside `public_html` (e.g. `~/seedrix-site`). That gives you the latest source and PHP files on the server. You still **cannot build** there without Node.js.
- **Build only on your PC:** run `npm run build` locally after each `git pull`, then upload the **contents of `out`** to `public_html` via File Manager (or FTP). That is your main update workflow.
- **Deploy script (`deploy.sh`):** it runs `npm run build`, so it needs Node.js. Use it on your **local machine** or on a CI server that has Node, not on cPanel when Node isn’t installed.

**Optional – auto-deploy on push (no Node on cPanel):** Use **GitHub Actions** to build the site (GitHub has Node) and upload the `out` folder to cPanel via FTP. Then every push to `main` updates the live site without you building or uploading by hand.

1. In cPanel create an **FTP account** that can write to `public_html` (or note your main FTP login).
2. In the repo on GitHub go to **Settings → Secrets and variables → Actions** and add:
   - `FTP_SERVER` — your FTP host (e.g. `ftp.yourdomain.com` or the host GoDaddy gives you)
   - `FTP_USERNAME` — FTP username
   - `FTP_PASSWORD` — FTP password
3. The workflow in `.github/workflows/deploy-cpanel.yml` builds the site and uploads the contents of `out/` to `public_html/`. If your FTP home is different, edit the `server-dir` value in that file.
4. **Important:** The first time you deploy, create `public_html/api/config.php` (from `config.example.php`) and add your MySQL details. The workflow does not overwrite existing files by default, so once `config.php` is in place it will be left as-is on future deploys.

---

## 6. cPanel applications: SEO, photo library, and blog

You can add **SEO**, a **photo library**, and a **blog** using one-click apps in cPanel (e.g. **Softaculous** or **Installatron**). Install them in **subdirectories** so your main SEEDRIX site (static files in `public_html`) stays as-is.

### Where to find apps in cPanel

- **Softaculous Apps Installer** or **WordPress** (under “Applications” / “Software”).
- Or **Application Manager** / **Scripts** in the cPanel menu.

---

### Blog (for posting + SEO)

**WordPress** is the usual choice: good for blog posts and has strong SEO plugins.

1. In cPanel open **Softaculous** (or **WordPress** one-click install).
2. Install **WordPress** in a **subdirectory**, e.g. **`blog`**.
   - Installation URL: `https://seedrix.co/blog`
   - Use a new MySQL database and user (create in MySQL® Databases first).
3. After install, log in to the WordPress admin (`https://seedrix.co/blog/wp-admin`).
4. **SEO:** Install an SEO plugin, e.g. **Yoast SEO** or **Rank Math** (Plugins → Add New → search “Yoast” or “Rank Math”). Use it to set meta titles, descriptions, and sitemaps for blog posts.
5. **Linking:** Add a “Blog” link on your main SEEDRIX site (e.g. in the nav or footer) to `https://seedrix.co/blog`.

---

### Photo library

Use a gallery app so you can manage and display photos from cPanel.

1. In **Softaculous** (or your app installer) search for **Piwigo** or **Lychee** (or “Gallery”).
2. Install in a **subdirectory**, e.g. **`gallery`** or **`photos`**.
   - Installation URL: `https://seedrix.co/gallery` (or `/photos`).
   - Create a new database and user for it.
3. Log in to the gallery admin, upload albums, and adjust settings.
4. **Linking:** Add a “Gallery” or “Photos” link on the main site to `https://seedrix.co/gallery`.

---

### SEO (main site + blog)

- **Main SEEDRIX site (this repo):** Already has SEO basics: `sitemap.xml`, `robots.txt`, and per-page meta/Open Graph in the code. Keep the site as-is; no extra cPanel “SEO app” needed for these pages.
- **Blog (WordPress):** Use **Yoast SEO** or **Rank Math** (see Blog section above) for titles, descriptions, and sitemaps for all blog posts.
- **cPanel SEO tools (if available):** Some hosts have **Redirects** or **SEO Tools** in cPanel. Use them for 301 redirects (e.g. old URLs → new) or canonical settings; they don’t replace the sitemap/meta on the main site or in WordPress.

---

### Suggested URL layout

| URL | What it is |
|-----|------------|
| `https://seedrix.co` | Main SEEDRIX site (static export in `public_html`) |
| `https://seedrix.co/blog` | WordPress blog (installed in `public_html/blog`) |
| `https://seedrix.co/gallery` | Photo library e.g. Piwigo (installed in `public_html/gallery`) |

Install the blog and gallery in **subdirectories** so they don’t overwrite your main site files. If the installer asks for “directory”, use `blog` or `gallery` (not the root).

---

## Summary

| Step | Action |
|------|--------|
| Build | `npm run build` → produces `out/` |
| Upload | Upload **contents** of `out/` to cPanel `public_html` (includes `api/save-lead.php`) |
| DB | Create MySQL database + `leads` table (see `scripts/create-leads-table.sql`), then add `api/config.php` from `config.example.php` with your DB credentials |
| Updates | After each change: build locally, then re-upload `out` contents (don’t overwrite `api/config.php` if you added it manually) |

No Vercel or Netlify; the site runs entirely from your GoDaddy cPanel hosting.
