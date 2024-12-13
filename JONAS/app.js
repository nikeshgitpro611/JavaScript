const setExm = new Set('pizzaapple');

console.log(setExm.size); // 6
console.log(setExm.has('p')); // true
console.log(setExm.has('o')); // false
console.log(setExm.add('o')); // { 'p', 'i', 'z', 'a', 'l', 'e', 'o' }
console.log(setExm.delete('o')); // { 'p', 'i', 'z', 'a', 'l', 'e' }
console.log(setExm.clear()); // {}


console.log(setExm);


