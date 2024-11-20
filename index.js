const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle M-Pesa payment (simplified for demonstration)
app.post('/mpesa-payment', (req, res) => {
    // Here you would integrate with the M-Pesa API
    console.log('Processing M-Pesa payment...');
    res.send('M-Pesa payment processed!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
