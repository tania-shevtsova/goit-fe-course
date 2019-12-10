import users from "./users.js"

const getUsersWithGender = (users, gender) => {
    return (users.filter(gen => {
     return (gen.gender === gender)
    
}).map(val => val.name));
}
  
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
