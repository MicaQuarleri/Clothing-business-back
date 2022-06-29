const Product = require("../models/products");

const getProducts = (request, response) => {
  Product.find()
    .then((products) => response.status(200).json(products))
    .catch((error) => response.status(500).json(error));
};

const getOneProduct = (request, response) => {
  const sku = request.params.sku;
  Product.findOne({ sku: sku })
    .then((product) => {
      if (product) {
        return response.status(200).json(product);
      } else {
        return response.status(404).json("");
      }
    })
    .catch((error) => response.status(500).json(error));
};

const createProduct = (request, response) => {
  const product = request.body;
  if (!product) {
    return response.status(400).json({
      error: "Product information is missing",
    });
  }
  const newProduct = new Product({
    sku: product.sku,
    description: product.description,
    price: product.price,
  });
  newProduct
    .save()
    .then((savedProduct) => {
      response.json(savedProduct);
    })
    .catch((error) => response.status(500).send(error));
};

const deleteProduct = (request, response) => {
  const sku = request.params.sku;
  Product.findOneAndDelete({ sku: sku })
    .then((product) => {
      if (!product) {
        return response.status(404).json("Product does not exist");
      } else {
        return response.status(200).json("Product deleted");
      }
    })
    .catch((error) => response.status(500).json(error));
};

const updateProduct = (request, response) => {
  const sku = request.params.sku;
  const product = request.body;

  const newProductInfo = {
    description: product.description,
    price: product.price,
  };
  Product.findOneAndUpdate({ sku: sku }, newProductInfo)
    .then((product) => {
      if (!product) {
        return response.status(404).json("Product does not exist");
      } else {
        return response.status(200).json("Product updated");
      }
    })
    .catch((error) => response.status(500).json(error));
};

module.exports = {
  getProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
