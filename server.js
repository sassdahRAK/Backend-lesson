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

/**
 * 1. Why do we listen for data and end events when handling POST? 
 *    An: Because the body of a POST request can be sent in multiple chunks, we need to listen for 'data' events to collect these chunks and concatenate them into a complete body. The 'end' event signals that all data has been received, allowing us to process the complete body.
 * 2. What would happen if we didn’t buffer the body correctly? 
 *    An: If we didn't buffer the body correctly, we might end up with incomplete data or corrupted data. This could lead to errors when trying to parse the body or when trying to access specific fields, resulting in unexpected behavior or crashes.
 * 3. What is the format of form submissions when using the default browser form POST? 
 *    An: The default format for form submissions when using the browser's POST method is 'application/x-www-form-urlencoded'. This means that the form data is encoded as key-value pairs, where each key and value are URL-encoded, and pairs are separated by '&'.
 * 4. Why do we use fs.appendFile instead of fs.writeFile? 
 *    An: We use fs.appendFile instead of fs.writeFile because fs.appendFile adds new data to the end of the file without overwriting the existing content. In contrast, fs.writeFile would overwrite the entire file each time it is called, which would result in losing all previously saved names.
 * 5. How could this be improved or made more secure?
 *    An: To improve security, we could implement input validation to ensure that the name field does not contain malicious code or characters. We could also sanitize the input to prevent injection attacks. Additionally, we could implement rate limiting to prevent abuse of the form submission and use HTTPS to encrypt data in transit.
 */