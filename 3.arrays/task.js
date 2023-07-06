"use strict"
function compareArrays(arr1, arr2) {
  return arr1.every((a, b) => a === arr2[b]) && arr1.length === arr2.length;
  return arr1.join() === arr2.join(); //Так короче.
}

function getUsersNamesInAgeRange(users, gender) {
   return users.some(
     a => a.gender == gender
   ) ? users.filter(
     a => a.gender === gender
   ).map(
     a => a.age
   ).reduce(
     (a,b,c,d) => {
       a += b;
       return c == d.length-1 ? a/d.length : a;
     }
   ) : 0;
}