const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Yeah Buddy! server running on port ${PORT}`);
});
