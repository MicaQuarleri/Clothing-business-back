const { Router } = require("express");
const router = Router();
const products = require("../controllers/products");

router.get("/", products.getProducts);
router.get("/:sku", products.getOneProduct);
router.post("/", products.createProduct);
router.put("/:sku", products.updateProduct);
router.delete("/:sku", products.deleteProduct);

module.exports = router;
