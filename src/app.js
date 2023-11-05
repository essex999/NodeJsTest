const http = require("http");

const getUsers = require("./modules/users");

const server = http.createServer((request, response) => {
  if (request.url === "/users") {
    response.status = 200;
    response.statusMessage = "ok";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();
    return;
  }

  response.status = 200;
  response.statusMessage = "ok";
  response.header = "Content-Type: text/plain";
  response.write("hello ");
  response.end();
});

server.listen(3003, () => {
  console.log("server run 3000 port");
});
