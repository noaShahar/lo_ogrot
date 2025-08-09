# לא אוגרות - אמהות הרצליה

Beautiful welcome page for the "Mothers Don't Hoard" Herzliya WhatsApp community.

## 🚀 Setup Instructions

1. **Clone the repository**
2. **Create config file**:
   ```bash
   cp config.template.json config.json
   ```
3. **Edit config.json** and replace `REPLACE_WITH_ACTUAL_WHATSAPP_GROUP_LINK` with your actual WhatsApp group invitation link
4. **Add logo**: Place your `logo.jpeg` file in the root directory
5. **Open `index.html`** in your browser

## 🔐 Security

- The `config.json` file is ignored by git to keep your WhatsApp group link private
- Never commit the actual group link to the repository
- Share the link only through the `config.json` file on your server

## ✨ Features

- 🌐 **Bilingual**: Hebrew/English language switching
- 📱 **Responsive**: Works on all devices
- 🎨 **Beautiful Design**: Pastel pink theme with glassmorphism
- ✅ **Validation**: Quiz system before joining
- 📋 **Rules Display**: Complete community guidelines
- 🔗 **External Config**: Secure link management

## 🎯 How It Works

1. Users read the community description and rules
2. Check two boxes confirming they understand the rules and exclusivity
3. Answer a question about the third rule
4. Get access to the WhatsApp group link with inspirational quote

## 📁 Files

- `index.html` - Main application
- `config.template.json` - Template for configuration
- `config.json` - Your private configuration (not in git)
- `logo.jpeg` - Community logo (add your own)