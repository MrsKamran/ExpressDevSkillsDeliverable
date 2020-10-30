const skills = require("../models/skills");

function index(req, res, next) {
  res.render("./skills", {
    skills: skills.getAll(),
    time: req.time,
  });
}

// function show(req, res, next) {
//     res.render(' your requested skill is ' + skills.getOne(req.params.id) );
//   }

function show(req, res, next) {
  res.render("./show", {
    skills: skills.getOne(req.params.id),
  });
}

function newskill(req, res, next) {
  res.render("./new");
}

function addnewskill(req, res, next) {
  skills.writeOne(req.body);
  res.redirect("/skills");
}

function edit(req, res) {
  res.render("./edit", {
    skill: skills.getOne(req.params.id),
  });
}

function updateoneskill(req, res, next) {
  skills.updateOne(req.params.id, req.body);
  res.render("./skills", {
    skills: skills.getAll(),
    time: req.time,
  });
}

function deleteoneskill(req, res, next) {
  skills.deleteOne(req.params.id);
  res.redirect("/skills");
}

module.exports = {
  index: index,
  show: show,
  new: newskill,
  add: addnewskill,
  edit,
  update: updateoneskill,
  delete: deleteoneskill,
};
