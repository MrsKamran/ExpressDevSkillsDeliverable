var express = require('express');
var router = express.Router();
const skills = require('../models/skills');
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */

router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.show);

module.exports = router;