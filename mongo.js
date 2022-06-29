const mongoose = require("mongoose");

const connectionString = process.env.DATABASE_URL;

//connection to MongoDB
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error(error);
  });
