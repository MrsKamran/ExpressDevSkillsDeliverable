var express = require("express");
var router = express.Router();
const skills = require("../models/skills");
const skillsCtrl = require("../controllers/skills");

/* GET users listing. */

router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.post("/", skillsCtrl.add);
router.get("/:id", skillsCtrl.show);
router.get("/:id/edit", skillsCtrl.edit);
router.put("/:id", skillsCtrl.update);
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
