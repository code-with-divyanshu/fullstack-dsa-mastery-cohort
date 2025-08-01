# ⛓️ Middleware

## Ⓜ️ What is Middleware in Express.js?

In Express.js, **middleware** functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. Middleware functions can:

- Execute any code

- Make changes to the request and response objects

- End the request-response cycle

- Call the next middleware in the stack using the `next()` function

Middleware acts as a bridge or pipeline through which HTTP requests pass before they reach the route handlers or before the response is sent back to the client.

## 🔄 How Middleware Works

When a request is received by the Express app, it is passed through a chain of middleware functions. Each middleware function can:

1. Process the incoming request (e.g., logging, parsing JSON, authentication)

2. Either end the request-response cycle by sending a response

3. Or call `next()` to pass control to the next middleware or route handler

If none of the middleware ends the response, the final route handler sends the response.

## Example Explanation Based on Code

1. **Application-Level Middleware:**

   ```js
   app.use((req, res, next) => {
     console.log("This Middleware is between app and router");
     next();
   });
   ```

   - This middleware runs on every request before it reaches any route.

   - It logs a message and then calls `next()` to pass control to the next middleware/router.

2. **Router-Level Middleware:**

   ```js
   router.use((req, res, next) => {
     console.log("This Middleware is between router and api");
     next();
   });
   ```

   - This middleware is attached to a specific router (`indexRoutes`).

   - It runs on every request that matches the router before hitting route handlers inside the router.

3. **Route Handler:**

   ```js
   router.get("/", (req, res) => {
     res.json({
       message: "Welcome to Cohort",
     });
     console.log("Welcome to middleware");
   });
   ```

   - This sends a JSON response and logs a message once the request reaches this handler.

## 🧑‍💻 Types of Middleware in Express.js

1. **Application-Level Middleware**

   Middleware bound to an instance of the app using `app.use()` or `app.METHOD()`.  
   Example: Logging requests, parsing request bodies, handling authentication globally.

2. **Router-Level Middleware**

   Middleware bound to an instance of `express.Router()`. Useful to apply middleware to specific routes.  
   Example: Middleware used only by routes within a particular router.

3. **Built-in Middleware**

   Middleware functions built into Express, such as:

   - `express.static()` — to serve static files
   - `express.json()` — to parse JSON payloads
   - `express.urlencoded()` — to parse URL encoded payloads

4. **Error-handling Middleware**

   Special middleware to catch and handle errors. It has 4 arguments: `(err, req, res, next)`.

   ```js
   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send("Something broke!");
   });
   ```

5. **Third-party Middleware**

   Middleware packages created by the community, e.g., `cors` for handling Cross-Origin Resource Sharing, `morgan` for request logging, `helmet` for security headers.

## ♐ Summary

Middleware functions provide powerful modularity and flexibility in Express apps. They can be used for:

- Logging

- Authentication/authorization

- Parsing request bodies

- Serving static files

- Error handling

- Custom processing of requests/responses

## 📦 Clone This Repository

- To get started locally, clone the repository using the following command in your terminal:

  ```
  git clone https://github.com/code-with-divyanshu/fullstack-dsa-mastery-cohort.git
  ```

- Then navigate to the appropriate subdirectory:

  ```
  cd fullstack-dsa-mastery-cohort/Backend/Day_11_middleware
  ```

## ⭐ Star This Repository

- If you find this project interesting or helpful, please consider giving it a star on GitHub! This helps the project reach more users and encourages further development.

- On GitHub, click the ⭐ button at the top right of the repository page.

---
