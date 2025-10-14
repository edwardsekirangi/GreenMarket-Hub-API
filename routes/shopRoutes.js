const express = require("express");
const router = express.Router();
const shopCtrl = require("../controllers/shopController");

router.get("/", shopCtrl.getAll);
router.get("/:id", shopCtrl.getById);
router.post("/", shopCtrl.create);
router.put("/:id", shopCtrl.update);
router.delete("/:id", shopCtrl.remove);

module.exports = router;
