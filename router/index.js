const express = require("express");
const customersRouter = require("./customers");
const productsRouter = require("./products");
const salesRouter = require("./sales");

const router = express.Router();

router.use("/customers", customersRouter);
router.use("/products", productsRouter);
router.use("/sales", salesRouter);
router.get("/server-status", (req, res) =>
  res.send({
    status: "ok",
  })
);

router.get("/time", (req, res) =>
  res.send({
    time: Date.now(),
  })
);

module.exports = router;
