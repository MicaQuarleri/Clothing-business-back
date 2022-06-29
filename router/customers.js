const { Router } = require("express");
const customers = require("../controllers/customers");

const router = Router();

router.get("/", customers.getCustomers);
router.get("/:dni", customers.getOneCustomer);
router.put("/:dni", customers.updateCustomer);
router.delete("/:dni", customers.deleteCustomer);
router.post("/", customers.createCustomer);

module.exports = router;
