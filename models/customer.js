const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
  dni: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: {
    type: String,
    match: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
  },
  phone: { type: Number, required: true },
  totalSale: { type: Number, default: 0 },
  totalPay: { type: Number, default: 0 },
});

module.exports = mongoose.model("Customers", customerSchema);
