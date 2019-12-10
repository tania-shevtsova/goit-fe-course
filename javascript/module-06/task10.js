import users from "./users.js";

const getSortedUniqueSkills = users => users.reduce( (arr, obj) => {
    arr.push(...obj.skills)
    return arr;
}, []).sort().filter((item, index, array) => array.indexOf(item)==index);


  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]