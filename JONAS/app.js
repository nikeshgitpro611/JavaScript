let fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

let uniqueFruits = Object.groupBy(fruits, (grp) => grp);
//convert Array type and coun
let newPass = Object.entries(uniqueFruits).map(([cnt, list]) => {
  return {
    cnt,
    list: list.length,
  };
});
console.log(newPass);
