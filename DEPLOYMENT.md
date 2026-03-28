# GitHub Deployment: Obsidian Noir

I've prepared the project for full automated deployment using **GitHub Actions**. Here is what has been done and what you need to do to make it live.

## What's Configured
- **GitHub Action Workflow**: Created `.github/workflows/nextjs.yml` for automated building and deployment.
- **Next.js Export Mode**: Updated `next.config.ts` to `output: 'export'` and `unoptimized` images.
- **Local Git Repository**: Initialized and committed all files to the **`master`** branch.

## 1. Create your GitHub Repository
Go to [github.com/new](https://github.com/new) and create a repository named **`obsidian-noir`**.

## 2. Connect and Push
Run these commands in your project terminal:

```powershell
# In the obsidian-noir directory:
git remote add origin https://github.com/<YOUR_USERNAME>/obsidian-noir.git
git branch -M master
git push -u origin master
```

## 3. Enable Actions for Pages
In the repository **Settings** on GitHub:
1. Select **Pages** from the sidebar.
2. Change the **Source** under **Build and deployment** to **GitHub Actions**.

## 4. Live Site
Your site will start building in the **Actions** tab. Once the "Deploy Next.js site to Pages" workflow is green, it will be live at:
`https://<YOUR_USERNAME>.github.io/obsidian-noir/`

> [!TIP]
> Each time you push to the `master` branch, your live site will automatically update within minutes.
