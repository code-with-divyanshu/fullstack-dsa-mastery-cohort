# Day 01: Node.js Origin & Server

## What is Node.js?

- **Node.js** is a JavaScript runtime environment.
- It is built on Chrome's V8 JavaScript engine.
- Allows running JavaScript code outside the browser (e.g., on a server).
- Created in 2009 as an open-source project by Ryan Dahl.
- With Node.js, you can run JS code outside browsers using the Node.js runtime.

## How Node.js Works

- **V8 Engine**: Converts JavaScript code into machine code.
- **Node.js**: Uses the V8 engine to execute JavaScript on the server side.

```
[ V8 Engine ]  --->  [ Node.js (Executes JS, provides APIs, handles I/O) ]
```

## Packages

- Reusable pieces of code.
- Managed using **NPM** (Node Package Manager).

## Difference Between Modules & Packages

- **Modules**: Built-in functionalities provided by Node.js (e.g., `http`, `fs`, `path`).
- **Packages**: Third-party libraries you install using NPM.(e.g., `express`, `mongoose`, `toastify`)

## Server

- A machine that responds to a user request and gets data from a database or serves files.
- Node.js can be used to create servers easily.

### The `http` Module in Node.js
- The `http` module is a built-in Node.js module that allows you to create HTTP servers and handle HTTP requests and responses.
- You do **not** need to install it separately; it comes with Node.js by default.
- It provides methods to create a server, listen on a port, and handle incoming requests.
b
#### How it works:
- You require the module using `const http = require('http');`.
- Use `http.createServer()` to create a new server instance.
- The server takes a callback function with `request` and `response` objects.
- Use `server.listen(port, callback)` to start the server on a specific port.

## Example: Simple Node.js Server

```js
const http = require("http");

const myServer = http.createServer((req, res) => {
  res.end("Server Created");
});

myServer.listen(3000, () => {
  console.log("Server is running on Port  3000");
});
```
---
