require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/db/db");
const Port = 3000;

connectToDB();

app.listen(Port, () => {
  console.log(`Server is running at : http://localhost:${3000}`);
});
