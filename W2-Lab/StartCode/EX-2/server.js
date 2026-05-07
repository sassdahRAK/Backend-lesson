// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);
    switch (url){
        case '/':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Home</title></head>
                        <body>
                            <h1>Welcome to the Home Page</h1>
                            <p>This is a simple Node.js server.</p>
                        </body>
                    </html>
                `);
            }
            break;
        case '/about':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>About Us: at CADT</title></head>
                        <body>
                            <h1>About Us</h1>
                            <p>we love node.js! </p>
                        </body>
                    </html>
                `);
            }
            break;
        case '/contact-us':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Contact Us: at CADT</title></head>
                        <body>
                            <h1>Contact Us</h1>
                            <p>You can reach us vai email... </p>
                        </body>
                    </html>
                `);
            }
            break;
        case '/products':
            if (method === 'GET'){
                res.writeHead(200, {'content-type': 'text/html'});
                return res.end(`
                    <html>
                        <head><title>Products: at CADT</title></head>
                        <body>
                            <h1>Products</h1>
                            <p>Buy one get one</p>
                        </body>
                    </html>
                `);
            }
            break;
        case '/projects':
            if (method === 'GET'){
                res.writeHead(200, {'content-type': 'text/html'})
                return res.end(`
                    <html>
                        <head><title>Pojects</title></head>
                        <body>
                            <h1>Projects</h1>
                            <p>Here are our awesomme projects</p>
                        </body>
                    </html>
                    `);
            }
            break;  
    }
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
        `);
    }
    else if (url === '/about' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>About Us: at CADT</title></head>
                <body>
                    <h1>About Us</h1>
                    <p>we love node.js! </p>
                </body>
            </html>
        `);
    }
    else if (url === '/contact-us' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Contact Us: at CADT</title></head>
                <body>
                    <h1>Contact Us</h1>
                    <p>You can reach us vai email... </p>
                </body>
            </html>
        `);
    }
    else if (url === '/products' && method === 'GET'){
        res.writeHead(200, {'content-type': 'text/html'});
        return res.end(`
            <html>
                <head><title>Products: at CADT</title></head>
                <body>
                    <h1>Products</h1>
                    <p>Buy one get one</p>
                </body>
            </html>
        `);
    }
    else if(url === '/projects' && method === 'GET'){
        res.writeHead(200, {'content-type': 'text/html'})
        return res.end(`
            <html>
                <head><title>Pojects</title></head>
                <body>
                    <h1>Projects</h1>
                    <p>Here are our awesomme projects</p>
                </body>
            </html>
            `)
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

/**Reflective Questioos
 * 1. What happens when you visit a URL that doesn’t match any of the three defined? 
 *   - You will receive a 404 Not Found response with the message "404 Not Found" in plain text.
 * 2. Why do we check both the req.url and req.method? 
 *  - We check both req.url and req.method to ensure that we are responding to the correct type of request (e.g., GET, POST) for the specific URL. This allows us to handle different HTTP methods appropriately and provide the correct response based on the request type.
 * 3. What MIME type (Content-Type) do you set when returning HTML instead of plain text? 
 *  - When returning HTML, we set the Content-Type to 'text/html' to indicate that the response body contains HTML content. This helps the browser understand how to render the response correctly.
 * 4. How might this routing logic become harder to manage as routes grow? 
 *  - As the number of routes increases, the routing logic can become more complex and harder to manage. It may lead to a large number of if-else statements, making the code less readable and maintainable. Additionally, it can become difficult to handle dynamic routes or implement features like middleware, which are common in larger applications.
 * 5. What benefits might a framework offer to simplify this logic?
 *  - A framework can provide built-in routing capabilities, allowing developers to define routes in a more organized and efficient manner. It can also offer features like middleware support, which can help with tasks such as authentication, logging, and error handling. Frameworks often come with tools for managing templates, databases, and other common functionalities, reducing the amount of boilerplate code and making it easier to build and maintain larger applications.
 */