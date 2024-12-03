const key = "status";
const order = {
  id: 123, 
  status: "shipped",
};
const {[key]: value} = order;
console.log('key', key);
console.log('value', value);