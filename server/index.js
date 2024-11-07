const express = require("express");
const app = express();
const userController = require("./controllers/users")
// const productContoller = require("./contollers/products")

const PORT = 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
}).get("/about", (req, res) => {
  res.send("About Us")
}).use("/users", userController)

app.listen(PORT, () => {
  console.log("Server is running on port at http://localhost:" + PORT)
})
