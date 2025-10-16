const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/productController");
const { authenticate } = require('../middleware/auth'); // OAuth middleware


router.get("/", productCtrl.getAll);
router.get("/:id", productCtrl.getById);
router.post("/", authenticate, productCtrl.create);
router.put("/:id",authenticate, productCtrl.update);
router.delete("/:id", authenticate, productCtrl.remove);

module.exports = router;
