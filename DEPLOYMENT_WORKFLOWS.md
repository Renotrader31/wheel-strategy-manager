# Deployment Workflow Files

Due to GitHub App permission limitations, these workflow files need to be created manually in the GitHub repository:

## 1. `.github/workflows/deploy-vercel.yml`

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install Vercel CLI
      run: npm install -g vercel
      
    - name: Deploy to Vercel
      run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## 2. `.github/workflows/deploy-github-pages.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Pages
      uses: actions/configure-pages@v3
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v1
      with:
        path: './public'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v1
```

## Instructions

1. Create the `.github/workflows/` directory in your repository
2. Add these two files with the above content
3. Set up the required secrets in your repository settings:
   - `VERCEL_TOKEN`: Your Vercel deployment token
4. Enable GitHub Pages in repository settings if using that deployment option

## Project Structure Summary

The project now has the correct structure for Vercel deployment:

```
wheel-strategy-manager/
├── public/
│   ├── index.html
│   └── manifest.json
├── scripts/
│   ├── backup.js
│   └── validate.js
├── docs/
├── package.json
├── vercel.json
└── ... (other config files)
```