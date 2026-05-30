const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Cloud-Based CI/CD Deployment Platform');
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy'
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});