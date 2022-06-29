const mongoose = require("mongoose");
const { Schema } = mongoose;

const saleSchema = new Schema({
  totalCash: { type: Number, default: 0 },
  totalCard: { type: Number, default: 0 },
  totalAccount: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Sale", saleSchema);
