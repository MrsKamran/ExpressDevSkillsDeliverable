const get = require("../routes");

const skills = [
    {id: 101, skill: 'HTML', grade: true},
    {id: 202, skill: 'CSS', grade: false},
    {id: 303, skill: 'JavaScript', grade: true},
    {id: 404, skill: 'Full Stack', grade: false}
  ];
  
  module.exports = {
    getAll: getAll,
    getOne: getOne
  };
  
  function getAll() {
    return skills;
  }

//   function getOne(id){
//     return skills[id].skill
//   }

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
}
  