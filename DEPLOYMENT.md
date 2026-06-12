# 🚀 Deployment Guide - Alubilli Jyaneswar Rao Portfolio

Follow this step-by-step guide to deploy your premium corporate portfolio website for free on Vercel, Netlify, or GitHub Pages.

---

## ⚡ Option 1: Deploy to Vercel (Recommended & Easiest)

Vercel is the creator of Next.js and has first-class integration with Vite React projects. It provides automatic builds on git push and handles SSL certifications automatically.

### Step 1: Run the Vercel Deploy Command
Open your PowerShell/Command Prompt on your host system, navigate to the portfolio directory, and run:
```bash
cd "C:\Users\jyaneswar rao\.gemini\antigravity\scratch\portfolio"
npx vercel
```

### Step 2: Complete the Setup Prompt
The CLI will ask you a series of questions. Press **Enter** to accept all the default selections:
1. `Set up and deploy?` **Yes** (Y)
2. `Which scope?` (Select your personal account)
3. `Link to existing project?` **No** (N)
4. `What’s your project’s name?` **portfolio** (or enter a custom name)
5. `In which directory is your code located?` `./`
6. `Want to modify settings?` **No** (N)

### Step 3: Complete Authentication
If you aren't logged in, the CLI will output a unique login URL in your terminal. Click it, log in using your GitHub/Google account, and the terminal will immediately compile your code and output your live production URL!

---

## 🌐 Option 2: Deploy to Netlify (Alternative)

Netlify is another excellent free hosting provider for static assets.

### Step 1: Install Netlify CLI
Run the following command in your terminal:
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```
This will open your browser and authenticate your command line.

### Step 3: Compile and Deploy the Dist Folder
First, build your production bundle:
```bash
npm run build
```
Then, trigger the deployment of the `dist/` directory:
```bash
netlify deploy --dir=dist --prod
```
Netlify will print your live URL directly in the console!

---

## 📸 Profile Image Customization

To display your profile picture on the website:
1. Copy your desired picture (JPEG/PNG format).
2. Save it as **`profile.jpg`** inside the folder:
   `C:\Users\jyaneswar rao\.gemini\antigravity\scratch\portfolio\public\`
3. The site will automatically load your photo. If it's missing, it will gracefully fall back to the premium SVG developer avatar.
