"use strict"
function compareArrays(arr1, arr2) {
  return arr1.every((a, b) => a === arr2[b]) && arr1.length === arr2.length;
  return arr1.join() === arr2.join(); //Так короче.
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(
    a => a.gender === gender
  ).reduce(
    (acc,item,index,arr) => {
     acc += item.age;
     return index == arr.length-1 ? acc/arr.length : acc;
    }, 0
  )
}
