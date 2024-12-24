// function greet(name) {
//     return `hi, ${name}!`;
// }

// function add(a, b) {
//     return a + b;
// }

// module.exports = {
//     greet,
//     add
// };
// console.log(myModule.greet('John'));  
// console.log(myModule.add(5, 3));      

// server.js
const http = require('http');

// Сервер үүсгэх
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node.js server!\n');
});

// Серверийг 3000 порт дээр ажиллуулна
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
