 # Day 02: Express & Server

## Drawbacks of Node.js `http` Module
- Verbose and less readable code.
- No built-in middleware support for extra features (like parsing JSON, handling forms, etc.).
- Need to manually handle many things for sophisticated applications.

## Introduction to Express.js
- **Express.js** is a lightweight and fast Node.js framework.
- Simplifies server creation and request handling.
- Provides built-in middleware and routing features.

## How to Use Express
1. Install Express using npm:
   ```bash
   npm install express
   ```
2. Import and create an Express app:
   ```js
   const express = require("express");
   const app = express();
   ```
3. Define routes and start the server:
   ```js
   app.get("/", (req, res) => {
     res.send("Express Server Created");
   });

   app.listen(3000, () => {
     console.log("Server is running on PORT 3000");
   });
   ```

## Request (`req`) and Response (`res`) Objects in Express
- **`req` (Request Object):**
  - Contains details of the client request.
  - Includes URL, headers, query parameters, body, etc.
  - Example: `req.body`, `req.query`, `req.headers`, `req.params`, `req.cookies` (if using cookie middleware).
- **`res` (Response Object):**
  - Used to send data back to the client.
  - Common methods:
    - `res.send()` – send a response body.
    - `res.json()` – send a JSON response.
    - `res.status()` – set the HTTP status code.

## Introduction to API
- **API (Application Programming Interface):**
  - A set of rules for two applications to communicate with each other.
  - Allows one software to request data or services from another.
  - The way communication happens doesn't matter—no strict rules for structure are needed.

---
