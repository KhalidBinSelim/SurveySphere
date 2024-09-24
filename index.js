import express, { json } from 'express';
const app = express();

// Port where your API will run
const port = 3000;

// Middleware to return JSON
app.use(json());

// Route to return the base URL of your API
app.get('/api/base-url', (req, res) => {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    res.json({ baseUrl: baseUrl });
});

// Other API routes can go here
app.get('/', (req, res) => {
    res.send('Welcome to the Social Media API');
});

// Start the server
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
