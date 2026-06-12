const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Keep-alive ping endpoint
app.get('/ping', (req, res) => {
    res.status(200).send('pong');
});

// Self-ping every 14 minutes to prevent Render free tier spin-down
setInterval(() => {
    const url = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;
    fetch(`${url}/ping`).catch(() => {});
}, 14 * 60 * 1000);

app.listen(PORT, () => {
    console.log(`Yeah Buddy! server running on port ${PORT}`);
});
