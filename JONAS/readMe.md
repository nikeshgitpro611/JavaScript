# Section - 09

 **What we learn in this section**

1. Destructure Array (ok)
2. Destructure Object (ok)
3. The Spread operator (ok)
4. Rest pattern and parameters 
5. Short Circuit (&& and ||)
6. Nullish(??)
7. for of
8. object literal
9. optional chaining(.?)
10. Loop Object : object key,values , entries
11. sets
12. assignments https://jonas.io/assignments/introduction.html#introduction

**FQA SECTION**

Q> Explain array destructuring in JavaScript.

Ans - A Array destructure will allow unpack value from array into distinct(alag/visist) variable using using a concise(short/sanchipt) syntax.

```
const [a, b] = [1, 2];
console.log(a, b); // Output: 1, 2
```

Q> How would you destructure an array and skip certain elements?

Ans - Use commas to skip elements.

```
const [a, , c] = [1, 2, 3];
console.log(a, c); // Output: 1, 3
```

Q> How would you swap the values of two variables using destructuring?

Ans - let a = 1, b = 2;

```
[a, b] = [b, a];
console.log(a, b);
```
Q> Destructure the following nested array to extract 3 and 6

```
const nestedArr = [[1, 2], [3, 4], [5, 6]];
const [, [a],[,b]] = nestedArr;
console.log(a,b);
```
**Object Destructure**

```
for (const element of restaurantList) {
  const {
    details,
    details: { cuisine, rating },
  } = element;
  console.log("details", details);
  console.log("cuisine : ", cuisine, "  || rating : ", rating);
}
```

Q> Given the object below, destructure to extract the name of the second employee and the city of the location.

```
const company = {
  name: "TechCorp",
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
  ],
  location: {
    city: "San Francisco",
    country: "USA",
  },
};

//name of the second employee  and the city of the location.
const {employees : [,{name}], location : {city}} = company
console.log('name : ', name,city);
```

Q> How would you extract data when you have both arrays and objects?

```
const data = [
  { id: 1, info: { name: "Alice", age: 30 } },
  { id: 2, info: { name: "Bob", age: 25 } },
];

for (const { id, info: { name, age} } of data) {
  console.log('element : ', `Hi your id is ${id} and your name is ${name} and your age is ${age}`);
}
```
**Spread Operator and Rest Operator**

The **spread operator** allows you to take an array or object and expand its elements/properties into a new array, object, or as arguments to a function.


The **rest operator** collects multiple elements or properties into a single array or object. It is primarily used in function parameters or destructuring assignments to gather remaining values.

or

The **rest operator** allows you to gather multiple elements or properties into a new array or object

**Feature	Spread Operator	Rest Operator**
*Purpose*	Expands elements/properties	**Gathers elements/properties**
*Use Case*	Function calls, array/object copying, **combining	Function parameters, destructuring**
*Context*	Expands into individual items	**Combines into an array/object**