# Section - 09

repo - https://github.com/jonasschmedtmann/complete-javascript-course

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

Q> What is the output of the following?

```
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b.c = 3;
console.log(obj1.b.c);
console.log(obj2.b.c);
```

Q> How does the spread operator behave with sparse arrays?

Undefined

```
const arr = [1, , 3];
const newArr = [...arr];
console.log(newArr); // ?
```

The **rest operator** collects multiple elements or properties into a single array or object. It is primarily used in function parameters or destructuring assignments to gather remaining values.

or

The **rest operator** allows you to gather multiple elements or properties into a new array or object

**Feature Spread Operator Rest Operator**

_Purpose_ Expands elements/properties **Gathers elements/properties**

_Use Case_ Function calls, array/object copying, **combining Function parameters, destructuring**

_Context_ Expands into individual items **Combines into an array/object**

Q> How do you handle deep destructuring with the rest operator?

```
const data = {
  user: {
    id: 1,
    name: "John Doe",
    details: {
      age: 30,
      city: "New York",
      country: "USA",
    },
  },
  status: "active",
  role: "admin",
};

const {
  user: {
    details: { city, ...country },
  },
  ...role
} = data;
console.log("user : ", city, country);
console.log("role : ", role);
```

Q> How can you use the rest operator to implement a flexible pipeline of functions?

```
const test = (number, ...AllFunction) => {
    return AllFunction.reduce((acc, fn) => acc * fn(number), 1);
}
const multiply = (x) => x * x;
const square = (x) => x ** x
const result = test(3, multiply, square);
console.log('result : ', result);
```

Q> What difference between or(||) and nullish operate(??)

The || operator returns the first truthy value or the last value if all are falsy.

It treats the following **values as falsy:** false, 0, '' (empty string), null, undefined, and NaN.

```
const value = 0 || 'default';
console.log(value); // Output: 'default' (0 is falsy)

const value2 = false || 42;
console.log(value2); // Output: 42 (false is falsy)
```

The **?? operator specifically returns the right-hand operand only if the left-hand operand is null or undefined.**

It does not consider other falsy values like 0, false, or ''.

```
const value = 0 ?? 'default';
console.log(value); // Output: 0 (0 is not null or undefined)

const value2 = null ?? 'default';
console.log(value2); // Output: 'default' (null is nullish)

const value3 = undefined ?? 42;
console.log(value3); // Output: 42 (undefined is nullish)
```

**When to Use**

|| is useful for general truthy/falsy checks:

```
const name = '' || 'Anonymous'; // Output: 'Anonymous'
```

?? is useful when 0, false, or '' are valid values:

```
const count = 0 ?? 10; // Output: 0
```

<!-- ==============================INTERVIEW QUESTION================================ -->

Q> Marge id and increase numbers

```
const starterMenu = [
  {
    id: 1,
    name: "Garlic Bread",
    description: "Crispy bread topped with garlic butter and herbs",
    price: 5.99,
  },
  {
    id: 2,
    name: "Bruschetta",
    description: "Toasted bread with fresh tomatoes, basil, and olive oil",
    price: 6.99,
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Classic Caesar salad with romaine, croutons, and Parmesan",
    price: 7.49,
  },
  {
    id: 4,
    name: "Spring Rolls",
    description:
      "Crispy rolls filled with vegetables and served with dipping sauce",
    price: 4.99,
  },
  {
    id: 5,
    name: "Stuffed Mushrooms",
    description: "Baked mushrooms filled with cheese and herbs",
    price: 6.49,
  },
];

const mainMenu = [
  {
    id: 1,
    name: "Grilled Chicken",
    description: "Marinated chicken breast grilled to perfection",
    price: 14.99,
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with creamy sauce and pancetta",
    price: 13.99,
  },
];

const dessertMenu = [...starterMenu, ...mainMenu];
const test = new Set(dessertMenu.map((menu) => menu.id));
console.log('test', test);

let newid = 1;
dessertMenu.forEach((menu) => {
    console.log('menuHas', test.has(menu.id));

  if (test.has(menu.id)) {
    menu.id = newid++;
    test.add(menu.id);
  }
});
console.log("dessertMenu", dessertMenu);

```

Q> Find unique Email id

```
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Alice", email: "alice@example.com" },
  { id: 4, name: "Charlie", email: "charlie@example.com" },
];

const checkEmail = () => {
  return users.reduce((acc, user) => {
    acc[user.email] = (acc[user.email] || 0) + 1;
    return acc;
  }, {});
};
console.log("checkEmail : ", checkEmail());

const getDuplicates = (emailCounts) => {
  return Object.keys(emailCounts).filter((email) => emailCounts[email] > 1);
};

console.log("checkEmailFilter : ", getDuplicates(checkEmail()));
```

Q> Find unique transition id

const transactions = [
{ transaction_id: "TX001", amount: 100 },
{ transaction_id: "TX002", amount: 200 },
{ transaction_id: "TX001", amount: 150 },
{ transaction_id: "TX003", amount: 250 },
];

```
const uniqueTransactionIds = () => {
  return transactions.reduce((uniqueIds, transaction) => {
    uniqueIds[transaction.transaction_id] =
      (uniqueIds[transaction.transaction_id] || 0) + 1;
    return uniqueIds;
  }, {});
};

const uniqueDupicate = (passedArray) => {
  const dupliCate = Object.keys(passedArray).filter(
    (key) => passedArray[key] > 1
  );
  const unique = Object.keys(passedArray).filter(
    (key) => passedArray[key] === 1
  );
  return {
    duplicate: dupliCate,
    unique: unique,
  };
};

console.log(uniqueDupicate(uniqueTransactionIds()));
```

Q> How can you get index of array

```
const fruits = ["apple", "banana", "cherry"];
const vegs = ["potato", "tomato", "carrot"];

const all = [...fruits, ...vegs];

for (const[index, value] of all.entries()) {
  console.log('index : ',index,'value : ',value);
}

Note :  all.entries()
- Returns an iterable of key, value pairs for every entry in the array
```
Q> Find when restore open and close.

```
const weekdays = ["mon", "tus", "wed", "thu", "fri", "sat", "sun"];
const [mon, tus, wed, thu, fri] = weekdays;

const restoreStatus = {
  mon: {
    open: "9:00am",
    close: "22:00pm",
  },
  tus: {
    open: "9:00am",
    close: "2:00pm",
  },
  wed: {
    open: "9:00am",
    close: "12:00pm",
  },
  thu: {
    open: "9:00am",
    close: "2:00pm",
  },
  fri: {
    open: "9:00am",
    close: "2:00pm",
  },
};

for (const day of weekdays) {
  const open = restoreStatus[day];
  open !== undefined
    ? console.log(`${day} open at ${open.open} and close at ${open.close}`)
    : console.log(`${day} Holiday`);
}
```