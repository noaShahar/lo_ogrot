# 🔗 WhatsApp Link Encoder Helper

## Quick Link Update Guide

### Step 1: Encode Your New Link
Go to: **https://www.base64encode.org/**

### Step 2: Paste Your WhatsApp Link
Example: `https://chat.whatsapp.com/NEW_GROUP_LINK_HERE`

### Step 3: Copy the Result
You'll get something like: `aHR0cHM6Ly9jaGF0LndoYXRzYXBwLmNvbS9ORVdfR1JPVVBfTElOS19IRVJF`

### Step 4: Update index.html
1. Open `index.html` in any text editor
2. Find the line: `const ENCODED_WHATSAPP_LINK = '...'`
3. Replace the string between the quotes with your new encoded link
4. Save the file

### Step 5: Deploy
Commit and push to GitHub, and your site will update automatically!

---

## Alternative: Use Node.js
If you have Node.js installed, you can encode directly:
```bash
node -e "console.log(Buffer.from('YOUR_WHATSAPP_LINK').toString('base64'))"
```
