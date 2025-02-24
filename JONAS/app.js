// //ramdom 100 dice roll
// const dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
let test = Array.from({length: 100},(_, i) =>    Math.trunc(Math.random() * 6) + 1);
console.log(test);
//Key and value
// let test2 = test.reduce((acc,val, i) => {
//     acc[val] = (acc[val] || 0) + 1
//     return acc
// }, {});
// console.log(test2);
let test3 = Object.groupBy(test, (val,i) =>{
    return i, val});
console.log(test3);
