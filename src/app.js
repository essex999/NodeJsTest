const http = require("http");

const getUsers = require("./modules/users");

const { URL } = require("url");

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://${request.headers.host}${request.url}`);

  if (parsedUrl.pathname === "/hello") {
    const name = parsedUrl.searchParams.get("name");

    if (name) {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write(`Hello, ${name}!`);
    } else {
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.write("Enter a name");
    }
    response.end();
  } else if (parsedUrl.pathname === "/users") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(getUsers());
    response.end();
  } else if (parsedUrl.pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World!");
    response.end();
  } else {
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.write(" ");
    response.end();
  }
});

server.listen(3003, () => {
  console.log("server run 3000 port");
});
