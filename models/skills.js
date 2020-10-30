const get = require("../routes");

const skills = [
  { id: 101, skill: "HTML", grade: true },
  { id: 202, skill: "CSS", grade: false },
  { id: 303, skill: "JavaScript", grade: true },
  { id: 404, skill: "Full Stack", grade: false },
];

module.exports = {
  getAll: getAll,
  getOne: getOne,
  writeOne,
  updateOne,
  deleteOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
  // return skills.find((skill) => skill.id === id);
}

function writeOne(newskill) {
  newskill.id = Date.now() % 1000000;
  skills.push(newskill);
}
function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}
function updateOne(id, newskill) {
  const idx = skills.findIndex((newskill) => newskill.id === parseInt(id));
  newskill.id = parseInt(id);
  return skills.splice(idx, 1, newskill);
}
