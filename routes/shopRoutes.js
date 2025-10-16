const express = require("express");
const router = express.Router();
const shopCtrl = require("../controllers/shopController");
const { authenticate } = require('../middleware/auth'); // OAuth middleware


router.get("/", shopCtrl.getAll);
router.get("/:id", shopCtrl.getById);
router.post("/", authenticate, shopCtrl.create);
router.put("/:id", authenticate, shopCtrl.update);
router.delete("/:id", authenticate, shopCtrl.remove);

module.exports = router;
