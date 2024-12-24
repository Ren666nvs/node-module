// const myModule = require('@ren.nvs7/my-custom-module');
// //  import myModule from 'myModule';
// console.log(myModule.greet('John'));
// console.log(myModule.add(5, 3));
// console.log('hi, Node.js!');
//import { log } from 'node:console';
import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(`
        <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
    <style>
h1{
color: blue;
}
</style>
</head>
<body>
<h1> hiii</h1>
</html>
`);
  res.end();
});
server.listen(port, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
