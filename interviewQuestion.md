```
const people = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "John" },
  { id: 4, name: "Bob" },
  { id: 5, name: "John" },
  { id: 6, name: "Alice" }
];

// Write a function that returns the most frequently occurring name.
// Expected Output: "John"
```

```
const users = [
  { id: 1, email: "alice@gmail.com" },
  { id: 2, email: "bob@yahoo.com" },
  { id: 3, email: "charlie@gmail.com" },
  { id: 4, email: "dan@outlook.com" },
  { id: 5, email: "erin@yahoo.com" }
];

// Write a function to group emails by domain.
// Expected Output:
// {
//   "gmail.com": ["alice@gmail.com", "charlie@gmail.com"],
//   "yahoo.com": ["bob@yahoo.com", "erin@yahoo.com"],
//   "outlook.com": ["dan@outlook.com"]
// }

```

```
const responses = [
  { status: "success" },
  { status: "fail" },
  { status: "success" },
  { status: "pending" },
  { status: "fail" },
  { status: "success" }
];

// Write a function to count how many times each status appears.
// Expected Output:
// {
//   success: 3,
//   fail: 2,
//   pending: 1
// }
```


```
const records = [
  { id: 1, name: "Amy" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Amy" },
  { id: 4, name: "Dan" },
  { id: 2, name: "Bob" } // duplicate id and name
];

// Return a list of users (name+id) that appear more than once.
// Expected Output: ["Bob-2"]
```
```
const input = {
  name: ["Alice", "Bob"],
  age: [25, 30],
  city: ["NY", "LA"]
};

// Write a function that transforms it into:
// [
//   { name: "Alice", age: 25, city: "NY" },
//   { name: "Bob", age: 30, city: "LA" }
// ]
```
```
const users = [
  { id: 1, name: "Alice", email: "a@example.com" },
  { id: 2, name: "Bob", email: "b@example.com" },
  { id: 3, name: "Alice", email: "a@example.com" },
  { id: 4, name: "Alice", email: "alice@fake.com" }
];

// Return an array of objects that have identical `name` and `email` combinations.
// Expected Output:
// [
//   { id: 1, name: "Alice", email: "a@example.com" },
//   { id: 3, name: "Alice", email: "a@example.com" }
// ]
```
```
const orders = [
  { user: "Alice", total: 30 },
  { user: "Bob", total: 20 },
  { user: "Alice", total: 70 },
  { user: "Bob", total: 10 },
  { user: "Charlie", total: 50 }
];

// Group totals by user and return:
// { Alice: 100, Bob: 30, Charlie: 50 }
```
```
const nested = {
  user: {
    id: 1,
    info: {
      name: "Alice",
      email: "a@example.com"
    }
  },
  meta: {
    active: true
  }
};

// Write a function that returns all keys in dot notation.
// Expected Output:
// ["user.id", "user.info.name", "user.info.email", "meta.active"]
```
```
const people = [
  { name: "Alice", hobbies: ["Reading", "Music"] },
  { name: "Bob", hobbies: ["Music", "Sports"] },
  { name: "Charlie", hobbies: ["Reading", "Chess"] }
];

// Return an object counting how many times each hobby appears:
// { Reading: 2, Music: 2, Sports: 1, Chess: 1 }
```
```
const people = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Alice", role: "admin" },
  { id: 4, name: "Alice", role: "guest" }
];

// Find all entries that have same `name` and `role`.
// Expected Output: [
//   { id: 1, name: "Alice", role: "admin" },
//   { id: 3, name: "Alice", role: "admin" }
// ]
```
# What is Object.fromEntries()

> Object.fromEntries() is a JavaScript method that takes an iterable of key-value pairs (like an array of arrays) and transforms it into an object.

```
Array Of Array

const entries = [
  ['name', 'John'],
  ['age', 30],
  ['country', 'USA']
];

//{ name: 'John', age: 30, country: 'USA' }
```

```
Transforming an Object with Object.entries and Object.fromEntries
Converting Map data structures to plain objects.

const user = {
  name: 'Alice',
  age: 25
};
//{ name: 'ALICE', age: '25' }

Solution : --
const user = {
  name: 'Alice',
  age: 25
};
//{ name: 'John', age: 30, country: 'USA' }

const result = (entries) => {
  // console.log(entries)
  return Object.fromEntries(
    Object.entries(entries).map(([key,val]) => [key, String(val).toLocaleUpperCase()])
  )
};

console.log('result Pass Concept : ',  result(user))
```
```
const user = {
  name: 'Alice',
  age: 25,
  details: { city: 'New York' },
};

// { name: 'ALICE', details: { city: 'NEW YORK' } }

```

```
by reduce method
const nestedArray = [[1, 2], [3, 4], [5, 6]];
// Output: [1, 2, 3, 4, 5, 6];
```

```
by reduce method
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

// Output: 1800
```
```
Remove Duplicate by reduce method
const numbers = [1, 2, 2, 3, 4, 4, 5];
//Output: [1, 2, 3, 4, 5]

const arr = [1, 2, 3, 4, 5];
//output : [[1,2], [3,4], [5]];

const arr = [1,2,3,4,5,6,7,8,9];
//output : [[1,2,3,4],[5,6,7,8],[9]]

const arr = [1,2,3,49,7,9];
//output : 4997321
```

> # Topic : Reduce
```
const arr = [{id: 1, name: 'A'}, {id: 2, name: 'B'}];
// Output: {1: 'A', 2: 'B'}

const input = ['a', 'b', 'a', 'c', 'b'];
// Output: { a: 2, b: 2, c: 1 }

const nested = [[1, 2], [3, 4], [5]];
// Output: [1, 2, 3, 4, 5]

const nums = [1, 2, 3, 2, 4, 1, 5];
// [1, 2, 3, 4, 5] remove duplicate

```
> # map and reduce

```
const data = [[1, 2], [3, 4, 5], [6]];
// Goal: Return[2, 4, 6, 8, 10, 12]

const students = [
  { name: "John", scores: [70, 80, 90] },
  { name: "Jane", scores: [85, 95, 100] },
  { name: "Jack", scores: [60, 65, 70] }
];

Goal: Return "Jane".
```

# Promise Concept
- it's asynchronous
✅ resolve (success, returns a value)

❌ reject (failure, returns an error)

⏳ be in pending state until it completes

- States of a Promise

**Pending** → initial state, not resolved or rejected.

**Fulfilled** → operation completed successfully (resolve).

**Rejected** → operation failed (reject).

```
Basic Syntax
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data fetched successfully!");
  } else {
    reject("Error: Something went wrong");
  }
});

// Consuming the promise
myPromise
  .then((result) => {
    console.log("✅ Success:", result);
  })
  .catch((error) => {
    console.error("❌ Error:", error);
  })
  .finally(() => {
    console.log("🔄 Operation completed");
  });

```

> 🔹 Types of Promise usage

**Promise.resolve(value)** → instantly resolves with a value.

**Promise.reject(error)**  → instantly rejects with an error.

**Promise.all([...])** → runs multiple promises in parallel, fails if any reject.

**Promise.race([...])** → returns first settled promise (resolve or reject).

**Promise.allSettled([...])** → waits for all, returns success + failure results in [{
    "status": "fulfilled",
    "value": "C done"
  }].

**Promise.any([...])** → returns first fulfilled promise (ignores rejects).

```
const promiseA = Promise.resolve("A done");
const promiseB = Promise.resolve("B done");
const promiseC = Promise.resolve("C done");


Promise.**race**([promiseA,promiseB,promiseC]).then(data => console.log(data))
```