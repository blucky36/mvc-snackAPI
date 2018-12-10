const express = require('express');
const router = express.Router();
const controller = require("../controller/controller.js")

router.get("/", controller.getAllSnacks)
router.get("/:id", controller.getOneSnack)
router.post("/", controller.createSnack)
router.put("/:id", controller.updateSnack)
router.delete("/:id", controller.deleteSnack)

module.exports = router;
