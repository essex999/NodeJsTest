const http = require("http");
const getUsers = require("./modules/users");
const { URL } = require("url");

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://${request.headers.host}${request.url}`);
  const helloParam = parsedUrl.searchParams.get("hello");
  const usersParam = parsedUrl.searchParams.get("users");

  if (helloParam !== null) {
    if (helloParam === "") {
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.write("Enter a name");
    } else {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write(`Hello, ${helloParam}!`);
    }
  } else if (usersParam !== null) {
    if (usersParam === "") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(getUsers());
    }
  } else if (parsedUrl.search !== "") {
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.write(" ");
  } else {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World!");
  }

  response.end();
});

server.listen(3003, () => {
  console.log("Server is running on port 3003");
});
