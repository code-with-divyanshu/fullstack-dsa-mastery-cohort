const http = require("http");

const myServer = http.createServer((req, res) => {
  res.end("Server Created");
});

myServer.listen(3000, () => {
  console.log("Server is running on Port  3000");
});
