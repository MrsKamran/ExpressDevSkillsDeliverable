const skills = require('../models/skills');

function index(req, res, next) {
    res.render('./skills', { 
        skills: skills.getAll() });
  }

// function show(req, res, next) {
//     res.render(' your requested skill is ' + skills.getOne(req.params.id) );
//   }

  function show(req, res, next){
    res.render('./show', {
        skills: skills.getOne(req.params.id)
    });
}

  module.exports = {
      index : index,
      show : show
  }