function compareArrays(arr1, arr2) {
  
}

function getUsersNamesInAgeRange(users, gender) {
   return people.some(a => a.gender == gender) ? users.filter(a => a.gender === gender).map(a => a.age).reduce(
    (a,b,c,d) => {
  a += b;
  return c == d.length-1 ? a/d.length : a;
    }
  ) : 0;
}