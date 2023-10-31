const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const method = req.method;
    // Set the response headers
    res.setHeader('Content-Type', 'text/html');
    
    // Check the URL and send custom responses
    
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        const message = fs.readFileSync('message.txt', 'utf8');
        res.write(`<body><p>${message}</p>`);
        res.write('<form action="/message" method="POST"><input type = "text" name="message"><button type="submit" >send</button></form></body>')
        res.write('</html>');
        return res.end();
    } 
    else if (req.url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);

        })
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
        
        
    }
    else if (req.url === '/home') {
        res.write('<html>');
        res.write('<head><title>my home page</title></head>');
        res.write('<body>Welcome home</body>');
        res.write('</html>');
        res.end();
    }
    else if (req.url === '/about') {
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
    } else  {
        res.write('<html>');
        res.write('<head><title>node js project</title></head>');
        res.write('<body>Welcome to my Node Js project</body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(4000);
