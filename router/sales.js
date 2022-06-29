const { Router } = require("express");
const sales = require("../controllers/sales");

const router = Router();

router.get("/", sales.getSales);
router.post("/", sales.createSale);
router.put("/:date", sales.updateSale);

module.exports = router;
