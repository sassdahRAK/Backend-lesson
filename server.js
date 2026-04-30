// server.js
const http = require('http'); // commonjs (.cjs) it defaultly type
const fs = require('fs'); // file system module
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to the Home Page');
    }

    if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
          </form>
        `);
        return;
    }

    if (url === '/contact' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        
        req.on('end', () => {
            const name = new URLSearchParams(body).get('name');
            console.log(name);
            // Save name to text file   
            if (!name || name.trim() === '') {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    return res.end('Name is required');
            }

            fs.appendFile('submissions.txt', name + '\n', (err) => {
                if (err) {
                    console.error('Error saving name to file:', err);
                } else {
                    console.log('Name saved to file');
                }
                res.end();
            });
        });


      
        return;
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
