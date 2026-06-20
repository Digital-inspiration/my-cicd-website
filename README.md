# 🚀 My CI/CD Website (A Step-by-Step Guide for Total Beginners)

Hello! 👋 This project teaches you how to put a website on the internet the
**professional** way. You will have **three copies** of your website:

| Environment | What it's for | Who looks at it |
|-------------|---------------|-----------------|
| 🔴 **Dev** (development) | Your playground. Try wild ideas here. | Just you |
| 🟠 **Staging** | The dress rehearsal. Final check. | You + your team |
| 🟢 **Production** (prod) | The REAL website. | Everyone! |

The magic part: every time you save your work to **GitHub**, a robot
automatically builds your website and puts it online. That robot is called a
**CI/CD pipeline** (CI/CD = "Continuous Integration / Continuous Delivery").
We use **GitHub Actions** as the robot and **Vercel** as the place that hosts
(stores and shows) your website. No Docker needed — Vercel handles all of that
for us. 🎉

> **Read this like a recipe.** Do one step at a time, in order. Don't skip!

---

## 🧰 What you need (all free)

1. A computer (Windows, Mac, or Linux).
2. About 1 hour and a grown-up nearby if you get stuck.
3. Three free accounts (we'll make them together below).

---

## 🪜 The Big Picture (how everything connects)

```
   Your computer  ──push──▶  GitHub  ──tells──▶  GitHub Actions robot
   (you type code)           (stores code)        (builds the website)
                                                          │
                                                          ▼
                                                       Vercel
                                              (puts website online)
                                                          │
                            ┌─────────────────────────────┼─────────────────────────────┐
                            ▼                             ▼                               ▼
                   dev branch → DEV URL        staging branch → STAGING URL     main branch → PROD URL
```

---

# Part 1 — Install your tools 🛠️

## Step 1.1 — Install VS Code (your code editor)

VS Code is the program where you write your website.

1. Go to **https://code.visualstudio.com/** ← click "Download".
2. Open the file you downloaded and click **Next → Next → Install**.
3. Open VS Code. You should see a welcome screen. 🎉

## Step 1.2 — Install Git (the tool that sends code to GitHub)

Git is a tool that saves your work and sends it to GitHub.

1. Go to **https://git-scm.com/downloads**.
2. Download the version for your computer and install it (keep clicking **Next**).
3. To check it worked, open a **Terminal**:
   - In VS Code, click the top menu **Terminal → New Terminal**.
   - Type this and press Enter:
     ```bash
     git --version
     ```
   - If you see something like `git version 2.xx`, you did it! ✅

## Step 1.3 — Install Node.js (needed by the Vercel tool)

1. Go to **https://nodejs.org/** and download the **LTS** version.
2. Install it (keep clicking **Next**).
3. Check it in the Terminal:
   ```bash
   node --version
   ```
   A number like `v20.xx` means success. ✅

---

# Part 2 — Make your free accounts 🔑

## Step 2.1 — Create a GitHub account

GitHub is where your code lives online.

1. Go to **https://github.com/signup**.
2. Type your email, pick a password, and choose a username (e.g. `priya-codes`).
3. Check your email and click the verification link.
4. Done! You now have a GitHub account. ✅

## Step 2.2 — Create a Vercel account

Vercel is what shows your website to the world.

1. Go to **https://vercel.com/signup**.
2. Click **"Continue with GitHub"** (this is the easiest — it links the two
   accounts for you).
3. Say **"Authorize Vercel"** when GitHub asks. ✅

---

# Part 3 — Put this project on your computer 💾

## Step 3.1 — Open the project folder

1. Open VS Code.
2. Click **File → Open Folder** and choose the `my-cicd-website` folder
   (the one this README is in).
3. On the left you should see files like `index.html`, `styles.css`, and a
   folder named `.github`.

## Step 3.2 — Look at your website locally (on your own computer)

1. Find `index.html` in the left panel.
2. Right-click it → **"Reveal in File Explorer"** (or Finder on Mac) →
   double-click it to open in your web browser.
3. You'll see the website with a **purple "LOCAL" banner**. That banner tells
   you which environment you're looking at. Cool, right? 🟣

---

# Part 4 — Send your code to GitHub 🐙

## Step 4.1 — Create an empty repository on GitHub

A "repository" (or "repo") is just a project folder on GitHub.

1. Go to **https://github.com/new**.
2. **Repository name:** type `my-cicd-website`.
3. Leave it **Public**.
4. **Do NOT** tick "Add a README" (we already have one).
5. Click **Create repository**.
6. Keep that page open — you'll need the web address it shows you.

## Step 4.2 — Connect your folder to GitHub and push

In the VS Code **Terminal** (Terminal → New Terminal), type these lines **one
at a time**, pressing Enter after each. Replace `YOUR-USERNAME` with your real
GitHub username.

```bash
git init
git add .
git commit -m "My first website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-cicd-website.git
git push -u origin main
```

> 💡 The first time you push, a window may pop up asking you to log in to
> GitHub. Click **"Sign in with browser"** and approve it.

Refresh your GitHub page — your files are now online! ✅

---

# Part 5 — Make the three branches (dev, staging, main) 🌿

A **branch** is a separate version of your code. We make `dev` and `staging`
branches so we can test changes before they reach the real website.

In the Terminal, type:

```bash
git branch dev
git branch staging
git push origin dev
git push origin staging
```

Now your repo has three branches: `main`, `staging`, and `dev`. ✅

---

# Part 6 — Connect Vercel (so the website goes online) 🌐

## Step 6.1 — Import your project into Vercel

1. Go to **https://vercel.com/new**.
2. Find `my-cicd-website` in the list and click **Import**.
3. Leave everything as default and click **Deploy**.
4. Wait about 30 seconds. Vercel gives you your **production URL** (your green
   PROD website). 🎉 Click it to see your site live!

## Step 6.2 — Get the 3 secret keys GitHub needs

GitHub's robot needs permission to talk to Vercel. We give it 3 secret keys.

**Key 1 — VERCEL_TOKEN**

1. Go to **https://vercel.com/account/tokens**.
2. Click **Create Token**, give it a name like `github-actions`, set scope to
   your account, and click **Create**.
3. **Copy the token now** (you can't see it again). Paste it somewhere safe
   for a minute.

**Keys 2 & 3 — VERCEL_ORG_ID and VERCEL_PROJECT_ID**

In the VS Code Terminal:

```bash
npm install --global vercel
vercel link
```

Answer the questions (pick your account, and choose the existing
`my-cicd-website` project). This creates a hidden folder named `.vercel`.
Open the file `.vercel/project.json` — inside you'll see:

```json
{
  "orgId": "team_xxxxxxxx",      ← this is VERCEL_ORG_ID
  "projectId": "prj_xxxxxxxx"    ← this is VERCEL_PROJECT_ID
}
```

Copy both values.

## Step 6.3 — Add the 3 secrets to GitHub

1. Go to your repo on GitHub.
2. Click **Settings** (top menu) → **Secrets and variables** → **Actions**.
3. Click **New repository secret** and add each one:

| Name | Value |
|------|-------|
| `VERCEL_TOKEN` | the token from Step 6.2 |
| `VERCEL_ORG_ID` | the `orgId` value |
| `VERCEL_PROJECT_ID` | the `projectId` value |

Type the **Name** exactly as shown (capital letters matter!). ✅

---

# Part 7 — Name your DEV and STAGING web addresses 🏷️

Right now only the green PROD site has a URL. Let's give dev and staging their
own addresses too.

1. In the workflow files inside `.github/workflows/`, there are lines that say:
   ```
   my-cicd-website-dev.vercel.app
   my-cicd-website-staging.vercel.app
   ```
2. If you named your project something **other** than `my-cicd-website`, change
   those two names to match your project (keep the `-dev` and `-staging` parts —
   the colored banner uses them to pick the right color!).
3. Save the files.

> 💡 You don't need to "reserve" these names. The first time the dev/staging
> pipeline runs, Vercel creates the address automatically.

---

# Part 8 — The magic moment: see CI/CD in action ✨

Here's the everyday flow you'll use from now on:

## 8.1 — Make a change on DEV first

```bash
git checkout dev          # switch to the dev branch
```

Open `index.html`, change `version 1` to `version 2`, and save.
Then push it:

```bash
git add .
git commit -m "Try version 2"
git push origin dev
```

Now go to your repo on GitHub → click the **"Actions"** tab. You'll see the
robot 🤖 running the **"Deploy to DEV"** pipeline. When it turns green ✅, visit
your **dev URL** (`https://my-cicd-website-dev.vercel.app`). You'll see your
change with the **red DEV banner**. 🔴

## 8.2 — Happy with it? Promote to STAGING

```bash
git checkout staging
git merge dev
git push origin staging
```

The **"Deploy to STAGING"** pipeline runs. Check your **staging URL** — same
change, now with the **orange STAGING banner**. 🟠

## 8.3 — Looks perfect? Ship it to PRODUCTION

```bash
git checkout main
git merge staging
git push origin main
```

The **"Deploy to PRODUCTION"** pipeline runs and updates your **real website**
with the **green PROD banner**. 🟢 Everyone can see it now!

---

# 🌟 BONUS EXERCISE — Build your own "Project Hub" page

*(Do this only after the CI/CD project above is finished and working.)*

Wouldn't it be cool to have **one home page** — like
`priya-codes.github.io` — that lists **all** your projects, and clicking each
one opens the right website? That's what we'll build now using **GitHub Pages**
(a free way to host a plain web page straight from a GitHub repo).

Here's the idea:

```
priya-codes.github.io                  ← your HOME page (a list of links)
   ├── my-first-ci-cd.html             ← opens → your Vercel CI/CD site
   └── my-other-project.html           ← opens → some other project
```

When someone clicks `my-first-ci-cd.html`, that tiny file **instantly bounces
them** (redirects) to your real Vercel website. The home page itself stays at
the plain `priya-codes.github.io` address. 🎯

I've already made example files for you in the **`bonus-github-pages-hub`**
folder: `index.html` (the home page list) and two redirect files.

## Step B.1 — Create your special GitHub Pages repo

GitHub Pages has one magic rule: the repo must be named
**`yourusername.github.io`** exactly.

1. Go to **https://github.com/new**.
2. **Repository name:** type `YOUR-USERNAME.github.io`
   (for example `priya-codes.github.io`). Use your real username!
3. Make it **Public** and click **Create repository**.

## Step B.2 — Put the hub files in that repo

1. Copy the three files from the `bonus-github-pages-hub` folder
   (`index.html`, `my-first-ci-cd.html`, `my-other-project.html`) into a new
   empty folder on your computer.
2. Open `my-first-ci-cd.html` and change the URL to **your** real Vercel
   production address (the green PROD one from Part 6.1).
3. In the VS Code Terminal, inside that folder, run (replace `YOUR-USERNAME`):
   ```bash
   git init
   git add .
   git commit -m "My project hub"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   ```

## Step B.3 — Turn on GitHub Pages

1. On GitHub, open your `YOUR-USERNAME.github.io` repo → **Settings** →
   **Pages** (left menu).
2. Under **Branch**, choose **main** and **/(root)**, then click **Save**.
3. Wait 1–2 minutes. ⏳

## Step B.4 — Try it! 🎉

- Visit **`https://YOUR-USERNAME.github.io`** → you see your list of projects.
- Click **"My First CI/CD Website"** → the address bar shows
  `YOUR-USERNAME.github.io/my-first-ci-cd.html` for a split second, then jumps
  to your live Vercel site. ✨

## Step B.5 — Add more projects later

Every time you build a new project:

1. Make a new redirect file, e.g. `my-game.html`, copying `my-first-ci-cd.html`
   and changing the URL inside.
2. Add a new line to `index.html` so it appears in your list.
3. `git add .`, `git commit -m "Add my game"`, `git push`. Done!

> 💡 **Why redirect files instead of just linking to Vercel directly?**
> This way your hub stays tidy with short, matching names
> (`/my-first-ci-cd.html`), you can change where a link points without telling
> anyone a new address, and it's a great way to learn how the web moves people
> around. 😊

---

## 🗺️ Quick reference (stick this on your wall)

| I want to… | Command |
|------------|---------|
| Work on something new | `git checkout dev` |
| Save my work | `git add .` then `git commit -m "what I did"` |
| Send DEV online | `git push origin dev` |
| Promote to STAGING | `git checkout staging` → `git merge dev` → `git push origin staging` |
| Go LIVE (prod) | `git checkout main` → `git merge staging` → `git push origin main` |

---

## 🆘 Help! Something went wrong

- **The Actions tab shows a red ❌.** Click it to read the error. Most often a
  secret name is mistyped. Re-check Part 6.3 (capital letters matter).
- **"git: command not found".** Git isn't installed — redo Step 1.2.
- **The dev/staging URL shows "404".** The pipeline hasn't finished yet, or the
  alias name in the workflow doesn't match. Wait, then re-check Part 7.
- **I'm totally stuck.** Ask a grown-up, or paste the red error text into a
  search engine — that's what real engineers do every day. 😉

---

## 📚 What you just learned (you're basically an engineer now)

- **Git & GitHub** — saving and sharing code.
- **Branches** — keeping dev, staging, and prod separate.
- **CI/CD pipelines** — robots that build and deploy automatically.
- **Environments** — testing safely before going live.

Great job! 🌟
