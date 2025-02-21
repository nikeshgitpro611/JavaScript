//Is empty Obj
let obj = {};

let CheckProperties = (obj) => Object.keys(obj).length === 0;
console.log(CheckProperties({a:2,b:3}));
