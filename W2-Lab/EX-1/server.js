// server.js 
const http = require('http'); 
 
const server = http.createServer((req, res) => { 
  res.write('Hello, World!'); 
  return res.end(); 
}); 
 
server.listen(3000, () => { 
  console.log('Server running on http://localhost:3000'); 
});

/** Answer the question: 
 * Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?
 *    An: TypeError: res.endd is not a function: this error in line 6.
 * Q2 – What is the purpose of res.write() and how is it different from res.end()?
 *    An: res.write() is used to send a response body to the client, while res.end() is used to signal that the response is complete and can be sent to the client. res.write() can be called multiple times to send multiple chunks of data, while res.end() should only be called once to indicate that the response is finished.
 * Q3 – What do you think will happen if res.end() is not called at all?
 *   An: If res.end() is not called, the server will not send the response to the client, and the client will continue to wait indefinitely for a response. This can lead to a timeout error on the client side.
 * Q4 – Why do we use http.createServer() instead of just calling a function directly?
 *  An: We use http.createServer() to create an instance of an HTTP server that can listen for incoming requests and send responses. This allows us to handle multiple requests concurrently and manage the lifecycle of the server. Calling a function directly would not provide the necessary infrastructure to handle HTTP requests and responses effectively.
 * Q5 – How can the server be made more resilient to such errors during development?
 *  An: To make the server more resilient to errors during development, we can implement error handling mechanisms such as try-catch blocks around the code that may throw errors. Additionally, we can use logging to capture error details and stack traces, which can help in debugging. We can also consider using a development environment that provides better error reporting and debugging tools, such as Node.js with a debugger or an integrated development environment (IDE) that supports Node.js.
 */
