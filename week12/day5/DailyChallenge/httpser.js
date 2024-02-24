const http = require("http");

const server = http.createServer((request, respone) => {
  console.log("Hello from my first server");
  // console.log('url=>',request.url);
  // console.log('method=>',request.method);
  // console.log('headers=>',request.headers);


});

server.listen(3001);