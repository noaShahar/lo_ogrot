const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const app = express();

// Rate limiting - prevent spam
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // max 5 requests per window per IP
    message: { error: 'Too many requests, please try again later.' }
});

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/validate', limiter);

// Environment variable for WhatsApp link (keep this secret!)
const WHATSAPP_LINK = process.env.WHATSAPP_LINK || 'https://chat.whatsapp.com/DEFAULT_LINK';

// Validation endpoint - only returns link after proper validation
app.post('/api/validate', (req, res) => {
    const { rulesAccepted, exclusiveConfirmed, answer, language } = req.body;

    // Server-side validation
    if (!rulesAccepted || !exclusiveConfirmed) {
        return res.status(400).json({
            error: language === 'he' ? 'יש לאשר את הכללים' : 'Must accept rules'
        });
    }

    // Validate the answer (case insensitive)
    const correctAnswers = {
        he: ['תגובות בפרטי בלבד', 'פרטי בלבד', 'תגובות בפרטי'],
        en: ['comments in private only', 'private only', 'comments in private']
    };

    const userAnswer = answer.toLowerCase().trim();
    const validAnswers = correctAnswers[language] || correctAnswers.he;

    const isCorrect = validAnswers.some(validAnswer =>
        userAnswer.includes(validAnswer.toLowerCase())
    );

    if (!isCorrect) {
        return res.status(400).json({
            error: language === 'he' ? 'אנא ענו נכון' : 'Please answer correctly'
        });
    }

    // Log successful validation (for monitoring)
    console.log(`✅ Valid access granted at ${new Date().toISOString()}`);

    // Return the secret link only after validation
    res.json({
        success: true,
        inviteLink: WHATSAPP_LINK,
        message: language === 'he' ? 'ברוכות הבאות!' : 'Welcome!'
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🔗 Visit: http://localhost:${PORT}`);
});

module.exports = app;
