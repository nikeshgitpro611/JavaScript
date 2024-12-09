const fruits = ["apple", "banana", "cherry"];
const vegs = ["potato", "tomato", "carrot"];

const all = [...fruits, ...vegs];

console.log(all.entries());
for (const[index, value] of all.entries()) {
  console.log('index : ',index,'value : ',value);
  
}