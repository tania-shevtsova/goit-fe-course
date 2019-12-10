import users from "./users.js";

const getNamesSortedByFriendsCount = users => users.sort( (friend1, friend2) => friend1.friends.length-friend2.friends.length).map(val => val.name);
 
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]