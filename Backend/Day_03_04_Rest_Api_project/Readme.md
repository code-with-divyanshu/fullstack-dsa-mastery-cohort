# Day 03 & 04: REST API Project – Notes App (Complete CRUD)

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

## API Endpoints

### 1. Create a Note (POST /notes)
- **Purpose:** Add a new note.
- **Request Body:** `{ "title": "...", "description": "..." }`
- **Response:** Confirmation message and updated notes array.

```js
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json({
    message: "Note Created Successfully",
    notes: notes,
  });
});
```

### 2. Get All Notes (GET /notes)
- **Purpose:** Retrieve all notes.
- **Response:** Array of all notes.

```js
app.get("/notes", (req, res) => {
  res.send(notes);
});
```

### 3. Delete a Note (DELETE /notes/:index)
- **Purpose:** Delete a note by its index in the array.
- **Request Param:** `index` (the position of the note in the array)
- **Response:** Confirmation message.

```js
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({
    message: `Note Deleted Successfully at Index: ${index}`,
  });
});
```

### 4. Update a Note (PATCH /notes/:index)
- **Purpose:** Update the title of a note by its index.
- **Request Param:** `index`
- **Request Body:** `{ "title": "New Title" }`
- **Response:** Confirmation message.

```js
app.patch("/notes/:index", (req, res) => {
  let index = req.params.index;
  const { title } = req.body;
  notes[index].title = title;
  res.json({
    message: `Note Updated Successfully at Index: ${index}`,
  });
});
```

---

## How to Test the API
1. Start the server with `nodemon server.js`.
2. Use Postman to send requests to the endpoints above.
3. Try creating, viewing, deleting, and updating notes.

---