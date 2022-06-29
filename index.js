require("dotenv").config();
require("./mongo");
const express = require("express");
const cors = require("cors");
const router = require("./router");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json()); //the back would be able to understand json that the front can send

app.get("/", (request, response) => {
  response.send("<h1>Clothes Impact</h1>");
});

app.use("/api", router);

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT;

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
