const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  sku: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, match: /^[0-9]+(,[0-9]+)?$/ },
});

module.exports = mongoose.model("Products", productSchema);
