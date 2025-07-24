
const http = require('http');
const connectDB = require('./database/connection');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running!');
});

connectDB().then(() => {
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to database. Server not started.');
});