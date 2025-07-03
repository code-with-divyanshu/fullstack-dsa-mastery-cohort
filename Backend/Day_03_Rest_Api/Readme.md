# Day 03: REST API, Nodemon, Postman & Notes App Project

## What is a REST API?
- **REST** stands for Representational State Transfer.
- It is an architectural style that defines specific rules and guidelines for communication between client and server.
- Uses HTTP methods like GET, POST, PUT, PATCH, DELETE to communicate.
- Defines standard ways for structuring requests and responses.

### Common HTTP Methods in REST API
- **GET**: To get data from the server.
- **POST**: To send new data to the server (creating new resources).
- **PATCH**: To update data on the server.
- **DELETE**: To remove data from the server.

## Tools Introduced
### Nodemon
- A utility that automatically restarts your Node.js server when file changes are detected.
- Install using: `npm install -g nodemon`
- Run your server with: `nodemon server.js`

### Postman
- An application for testing APIs.
- Allows you to send requests (GET, POST, etc.) and view responses easily.
- Useful for debugging and developing APIs.

## Project: Simple Notes Creation API
- Started building a simple API for creating notes.
- Implemented the **POST** method to add new notes.
- Used Express.js for server and routing.

### Example: Implementing POST Method in Express
```js
const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

let notes = [];

app.post('/notes', (req, res) => {
  const note = req.body;
  notes.push(note);
  res.status(201).json({ message: 'Note created', note });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---