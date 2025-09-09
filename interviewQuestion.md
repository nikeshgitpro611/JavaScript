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

**Promise.reject(error)** → instantly rejects with an error.

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

🔹 Basic Promise Questions

# 1. What is a Promise in JavaScript?

it's Js object that eventually handling resolve and reject task in asynchronous manner.

Avoid callback hell (cleaner chaining).

Built-in error handling with .catch().

Better readability and maintainability.

Work seamlessly with async/await (modern syntax for async code).

States of a Promise (pending, fulfilled, rejected).

How do you create a Promise?

```
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});
```

;

# 2. What’s the difference between .then(), .catch(), and .finally()?

**Then**

Used to handle a fulfilled (resolved) promise.

It takes a callback function that receives the resolved value.

**.catch()**

Used to handle a rejected promise (errors).

It’s basically .then(null, errorHandler), but cleaner.

**.finally()**

Runs no matter what (fulfilled or rejected).

Often used for cleanup (e.g., hiding a loading spinner).

# 3. .catch() vs try/catch with async/await.

**Use .catch() →** when chaining simple promises or doing one-off async operations.

✅ Pros:

Cleaner chaining than nested callbacks.

Centralized error handling at the end of the chain.

❌ Cons:

Can become messy if you have lots of async steps.

Harder to use with try...catch logic that’s familiar from synchronous code.

**Use try...catch with async/await →** when writing more complex async flows (multiple awaits, step-by-step logic).

✅ Pros:

Looks like synchronous code → much easier to read & debug.

You can use multiple try...catch blocks for more granular error handling.

Works well when you have lots of sequential async operations.

❌ Cons:

Needs an async function wrapper.

If you forget await, errors may silently escape until .catch() handles them.

```
async function showOrders() {
  try {
    const user = await fetchUser();
    const orders = await fetchOrders(user.id);
    console.log("Orders:", orders);
  } catch (err) {
    console.error("Error:", err);
  }
}
showOrders();
```

🔹 Intermediate Promise Questions

# 4. What is the difference between Promise.all, Promise.race, Promise.any, and Promise.allSettled?

✅ Quick Comparison Table

| Method                 | When it Resolves | When it Rejects | Use Case                                     |
| ---------------------- | ---------------- | --------------- | -------------------------------------------- |
| **Promise.all**        | All succeed      | Any fail        | Run tasks in parallel, but need all results. |
| **Promise.race**       | First settles    | First rejects   | Timeout handling, or “first response wins”.  |
| **Promise.any**        | First success    | All fail        | Need at least one success (fallbacks).       |
| **Promise.allSettled** | After all settle | Never rejects   | Collecting all results (success + failure).  |

# 5. What happens if one promise fails inside Promise.all?

Promise.all() waits for all promises to resolve successfully.

If any one promise rejects, the whole Promise.all() immediately rejects with that error.

The other promises may still be running in the background, but their results are ignored.

# 6. What’s the difference between synchronous and asynchronous code execution?

1. Synchronous Code Execution

👉 Code runs line by line, in order.

👉 Each line waits for the previous one to finish before running.

```
console.log("Start");

for (let i = 0; i < 3; i++) {
  console.log("Loop:", i);
}

console.log("End");
```

| Feature             | Synchronous                           | Asynchronous                                    |
| ------------------- | ------------------------------------- | ----------------------------------------------- |
| **Execution order** | Line by line (blocking)               | Can skip waiting tasks and continue             |
| **Blocking**        | Yes (next line waits)                 | No (non-blocking)                               |
| **Use case**        | Simple calculations, sequential logic | Network calls, file I/O, timers, user input     |
| **Example**         | Loops, math                           | `setTimeout`, `fetch`, `Promise`, `async/await` |

```
Async
console.log("Start");

setTimeout(() => {
  console.log("Async Task Finished");
}, 2000);

console.log("End");
```

# 7. What is the difference between callbacks and Promises?

```
function fetchData(callback) {
  setTimeout(() => {
    callback(null, "Data received"); // success
    // callback("Error happened", null); // failure
  }, 1000);
}

fetchData((err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Callback Result:", data);
  }
});
```

| Feature            | Callbacks                               | Promises                                        |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| **Definition**     | Function passed into another function   | Object representing future success/failure      |
| **Readability**    | Can lead to nested “callback hell”      | Cleaner chaining with `.then()` / `async/await` |
| **Error Handling** | Must handle errors manually in callback | Built-in `.catch()` for errors                  |
| **Chaining**       | Hard to chain async tasks               | Easy chaining with `.then()`                    |
| **Modern Usage**   | Older style, still used in some APIs    | Standard in modern JS, works with `async/await` |

# 8. What is the difference between microtask queue and macrotask queue in event loop?

Event Loop Basics

JavaScript is **single-threaded →**it executes one thing at a time.

When async tasks happen, they’re scheduled into queues, and the **event loop decides when to run them.**

There are two main queues:

Macrotask Queue (a.k.a. Task Queue)

Microtask Queue

**Promises use the microtask queue.**

1. Macrotask Queue

Contains tasks like:

setTimeout

setInterval

setImmediate (Node.js)

I/O events (e.g., mouse clicks, network requests)

👉 Each macrotask runs after the current script finishes, then the event loop moves on.

2. Microtask Queue

Contains tasks like:

Promise.then / catch / finally callbacks

queueMicrotask()

MutationObserver

👉 Microtasks are executed immediately after the current operation, before any macrotask.

Execution Order

Run synchronous code (top of the call stack).

Process all microtasks (in order).

Run the next macrotask.

Repeat.

```
console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

Promise.resolve()
  .then(() => console.log("Microtask: Promise.then"));

console.log("End");

output :
Start
End
Microtask: Promise.then
Macrotask: setTimeout
```

🔹 Advanced Promise Questions

# 9. What happens if you call .then() multiple times on the same Promise?

Multiple .then() calls on the same promise → all callbacks run with the same result.

```
const p = Promise.resolve(5);

p.then(x => console.log("First:", x)); //5
p.then(x => console.log("Second:", x)); // 5
```

Chained .then() calls → results flow step by step, each .then() returning a new Promise.

```
const p = Promise.resolve(5);

p.then(x => x * 2)
 .then(x => x * 3)
 .then(x => console.log("Chained result:", x));

 output :30
```

# 10. How do you cancel a Promise?

by AbortController in fetch

```
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
  .then(response => response.json())
  .then(data => console.log("Data:", data))
  .catch(err => {
    if (err.name === "AbortError") {
      console.log("Fetch aborted!");
    } else {
      console.error("Error:", err);
    }
  });

// Cancel after 100ms
setTimeout(() => controller.abort(), 100);
```

🎯 Summary

Autocomplete / Search → cancel outdated requests.

Timeouts → stop slow operations.

React / UI Cleanup → avoid updating unmounted components.

Background tasks → save resources if no longer needed.

Not directly possible → must use AbortController or custom logic.

# 11. What is the difference between Promise.resolve() and new Promise(resolve => resolve(...))?

What will this code print?

console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

👉 Answer:

Start
End
Promise
setTimeout

What’s the difference between async/await and .then() syntax?

Can await be used outside an async function? (Yes, in top-level await with ES2022+ or modules)

🔹 Trick / Coding Interview Questions

Write a function that resolves after 2 seconds using Promise.

function delay(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("Waited 2s"));

What’s the output?

async function test() {
return "Hello";
}
test().then(console.log);

👉 Answer: "Hello" (async always returns a Promise).

What’s the difference between Promise.all and Promise.allSettled in error handling?

What’s the difference between concurrency and parallelism in JavaScript?

Implement a simple Promise.retry(fn, retries) function.

🟡 Medium Level (Core JavaScript + Browser API)

# Explain how JavaScript closures work and provide an example.

A closure in JavaScript is a feature where an inner function has access to variables from an outer function

When a function is defined inside another function, it retains access to the outer function’s variables.

```
const outer = () => {
    let c = 0
    return () => {
        c++
        console.log(`Increased ${c}`)
    }
}

let deff = outer();
deff()
deff()
deff()
```

# What is hoisting and how does it affect variable/function declarations?

```
console.log(myFunc); // Output: undefined
myFunc(); // TypeError: myFunc is not a function
var myFunc = function() {
    console.log('Function Expression');
};
myFunc(); // Output: Function Expression
```

| Concept             | Description                                              |
| ------------------- | -------------------------------------------------------- |
| Scope               | Defines where a variable can be accessed.                |
| Lexical Environment | The context in which variables and functions are stored. |
| Scope Chain         | The hierarchy used to resolve variables.                 |
| Closures            | Functions retaining access to outer scopes.              |

# What is the difference between null and undefined?

let x = null; // Explicitly set to null
console.log(x); // Output: null

🔵 Hard Level (Asynchronous Programming, Prototypes, Patterns)

# Explain how prototypal inheritance works in JavaScript.

# What are modules in JavaScript and how are they different between ES6 and CommonJS?

A module is a reusable block of code that encapsulates related variables, functions, or classes. Modules help organize code, avoid naming conflicts, and manage dependencies by exporting and importing functionality across different files.

✅ CommonJS Modules (CJS)

**Characteristics:**

Used by default in Node.js.

Synchronous loading.

Uses require() to import and module.exports or exports to export.

✅ ES6 Modules (ESM)

Characteristics:

Official standard for modern JavaScript.

Supports static analysis and tree shaking.

Uses import and export.

Asynchronous loading in browsers.

```
trest.js file
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

result.js file

import { add, subtract } from './math.mjs';

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
```

| Feature                   | ES6 Modules (ESM)             | CommonJS Modules (CJS)          |
| ------------------------- | ----------------------------- | ------------------------------- |
| **Syntax**                | `import` / `export`           | `require()` / `module.exports`  |
| **Loading**               | Asynchronous                  | Synchronous                     |
| **Standardization**       | Official standard             | Node.js-specific implementation |
| **Use in Browsers**       | Supported natively            | Needs bundlers (like Webpack)   |
| **Static Analysis**       | Possible (helps tree shaking) | Not possible at load time       |
| **Circular Dependencies** | Better handled                | Can cause issues                |

# How does JavaScript’s call stack work, and how can recursion lead to stack overflow?

The call stack in JavaScript is a mechanism that keeps track of function execution. It’s a stack data structure that follows the Last In, First Out (LIFO) principle.

When a function is called:

It’s added (pushed) to the top of the stack.

The function executes.

When the function finishes, it’s removed (popped) from the stack.

If one function calls another, the new function is added to the top, and when it’s done, control goes back to the previous one.

✅ What is Recursion?

Recursion is when a function calls itself either directly or indirectly. It’s useful for solving problems that can be broken into smaller sub problems, like factorials or traversing trees.

```
function countdown(n) {
    if (n <= 0) {
        console.log('Done!');
        return;
    }
    console.log(n);
    countdown(n - 1); // recursive call
}

countdown(5);
```

# Explain the difference between shallow copy and deep copy.

# How does debouncing and throttling work? Provide use cases.

Debouncing is great for actions that should only happen when the user stops interacting, like typing or resizing.

Throttling is better when you need to ensure a function runs regularly during continuous activity, like scrolling or animation frames.

| Aspect          | Debouncing                                   | Throttling                                     |
| --------------- | -------------------------------------------- | ---------------------------------------------- |
| When it runs    | After the event has stopped firing           | At regular intervals while the event is firing |
| Controls timing | Waits until events stop                      | Runs at intervals during events                |
| Use case        | Avoid excess calls when user is still active | Spread out execution to improve performance    |
| Example events  | Input fields, search boxes                   | Scroll, resize, mouse movement                 |

# What is the difference between event bubbling and event capturing?

| Feature          | Event Capturing                 | Event Bubbling                 |
| ---------------- | ------------------------------- | ------------------------------ |
| Direction        | From outer element → target     | From target → outer element    |
| Phase            | Capturing phase                 | Bubbling phase                 |
| Trigger order    | Happens before the target event | Happens after the target event |
| Default behavior | Rarely used unless specified    | Default behavior in browsers   |

# Explain how memory leaks occur in JavaScript and how to avoid them.

A memory leak in JavaScript occurs when memory that is no longer needed by an application is not released back to the system, causing the program to consume more memory than necessary. Over time, this can lead to performance degradation, slowdowns, or crashes, especially in long-running applications like single-page apps (SPAs).

### Detecting and Debugging Memory Leaks

**Browser DevTools:**

Use Chrome’s Memory tab to take heap snapshots and identify retained objects.
Record allocation timelines to spot growing memory usage.

**Node.js:**

Use tools like heapdump or node --inspect to analyze memory.

Libraries like memwatch-next can detect leaks.

**Manual Inspection:**

Check for unremoved event listeners, uncleared timers, or persistent references.

Ensure cleanup in frameworks (e.g., React’s useEffect cleanup).

# What are symbols in JavaScript and how are they used?

What’s the difference between synchronous and asynchronous iteration (for..of vs for await..of)?

Explain how you can use closures for data encapsulation and privacy.

🟣 Advanced Level (Deep Internals, Design Patterns, Performance)

How does JavaScript’s garbage collection work?

Explain the differences between tasks, microtasks, and macrotasks in the event loop.

How would you implement a publish-subscribe pattern in JavaScript?

Explain how generators and iterators work and provide an example.

How can you handle errors in asynchronous code using async/await?

What are WeakMap and WeakSet, and when should you use them?

How does JavaScript handle concurrency, given that it's single-threaded?

Explain function currying and partial application with examples.

How can you optimize JavaScript code for performance in large-scale applications?

How would you implement a memoization function and when is it useful?
