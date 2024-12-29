const masterCraditcard = (str) => {
  let string = str;
  let last4 = string.slice(-4);
  return last4.padStart(string.length, "*");
};

const result = masterCraditcard("1234567890123456");
console.log(result);
