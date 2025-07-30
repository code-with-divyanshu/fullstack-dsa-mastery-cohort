const app = require("./src/app");
const connectToDB = require("./src/db");

connectToDB();
app.listen(3000, () => {
  console.log("Server is running on Port: 3000");
});
