const Sale = require("../models/sale");

const getSales = (request, response) => {
  Sale.find()
    .then((customers) => response.status(200).json(customers))
    .catch((error) => response.status(500).json(error));
};

const createSale = (request, response) => {
  const sale = request.body;
  if (!sale) {
    return response.status(400).json({
      error: "Sale information is missing",
    });
  }
  const newSale = new Sale({
    totalCash: sale.cash,
    totalCard: sale.card,
    totalAccount: sale.account,
  });
  newSale
    .save()
    .then((savedSale) => {
      response.json(savedSale);
    })
    .catch((error) => response.status(500).send(error));
};

const updateSale = (request, response) => {
  const date = request.params.date;
  const sale = request.body;
  const newSaleInfo = {
    totalCash: sale.cash,
    totalCard: sale.card,
    totalAccount: sale.account,
  };
  Sale.findOneAndUpdate({ date: date }, newSaleInfo)
    .then((sale) => {
      if (!sale) {
        return response.status(404).json("Date does not exist");
      } else {
        return response.status(200).json("Product updated");
      }
    })
    .catch((error) => response.status(500).json(error));
};

module.exports = {
  getSales,
  updateSale,
  createSale,
};
