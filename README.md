# Voices of Virtue website (React + Vite)

## One-time setup
1. Install Node.js (LTS) from nodejs.org
2. In this folder run:  npm install

## Edit content
- All text, dates, links and image names: src/siteContent.js (search for PLACEHOLDER)
- Images: public/images   (logo goes in public/logo.png)
- Colors / layout: src/styles.css 

## Preview on your computer
npm run dev     -> opens at http://localhost:5173

## Publish to Bluehost
1. npm run build     (creates a "dist" folder)
2. In Bluehost: Websites > Settings > File Manager (or FTP) > public_html
3. Upload the CONTENTS of dist (not the dist folder itself), including the hidden .htaccess file
   (turn on "Show hidden files" in File Manager). .htaccess makes page URLs like /Donations work on refresh.
4. Hosting in a subfolder? Set base in vite.config.js and RewriteBase in public/.htaccess to that folder.
