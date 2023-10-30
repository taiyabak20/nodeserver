const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    // Set the response headers
    res.setHeader('Content-Type', 'text/html');

    // Check the URL and send custom responses
    
    if (req.url === '/home') {
        res.write('<html>');
        res.write('<head><title>my home page</title></head>');
        res.write('<body>Welcome home</body>');
        res.write('</html>');
        res.end();
    } else if (req.url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body>Welcome to About Us page</body>');
        res.write('</html>');
        res.end();
    } else if (req.url === '/node') {
        res.write('<html>');
        res.write('<head><title>node page</title></head>');
        res.write('<body>Welcome to my Node Js project</body>');
        res.write('</html>');
        res.end();
    } else {
        res.write('<html>');
        res.write('<head><title>node js project</title></head>');
        res.write('<body>Welcome to my Node Js project</body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(4000);
