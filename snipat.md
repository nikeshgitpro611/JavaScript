### Logic Question From JavaScript Mastery

```
const potion1 = { name: "Healing", level: 1 };
const potion2 = potion1;

const potion3 = { ...potion2 };
const potion4 = { ...potion3 };

potion2.name = "Poison";
potion3.level = 5;
potion4.name = "Invisibility";

console.log(potion1.name);
console.log(potion1.level);
console.log(potion3.name);
console.log(potion4.level);

```

**Output:**
```
Poison
1
Poison
5
```

**Explanation:**
- `potion2 = potion1` creates a **reference** (both variables point to the same object in memory)
- `potion3 = { ...potion2 }` creates a **shallow copy** (new independent object)
- `potion4 = { ...potion3 }` creates another **shallow copy**
- When `potion2.name = "Poison"` executes, it modifies `potion1` too because they share the same reference
- `potion3.level = 5` only affects `potion3` (it's an independent object)
- `potion4.name = "Invisibility"` only affects `potion4` (it's an independent object)
- Final state: `potion1` and `potion2` both have `name: "Poison"` and `level: 1`

**Key Concepts:** Object references, spread operator, shallow copying

---

## Question 2: Closure and setTimeout

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

**Output:**
```
3
3
3
```

**Explanation:**
- `var` has **function scope**, not block scope
- By the time setTimeout callbacks execute (after 1 second), the loop has already finished
- All three callbacks reference the same `i` variable, which is now 3
- **Solution 1:** Use `let` instead of `var` (creates block scope)
- **Solution 2:** Use IIFE: `(function(j) { setTimeout(() => console.log(j), 1000); })(i);`

**Key Concepts:** Closures, event loop, var vs let, setTimeout

---

## Question 3: Array Methods and Mutation

```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1.map(x => x * 2);
const arr3 = arr1.push(4);

console.log(arr1);
console.log(arr2);
console.log(arr3);
```

**Output:**
```
[1, 2, 3, 4]
[2, 4, 6]
4
```

**Explanation:**
- `map()` returns a **new array** without modifying the original
- `push()` **mutates** the original array and returns the new length
- `arr1` is modified by push (adds 4 to the end)
- `arr2` contains doubled values from the original arr1 `[1, 2, 3]`
- `arr3` stores the return value of push, which is 4 (the new length of arr1)

**Key Concepts:** Array methods, mutation vs immutability, return values

---

## Question 4: Hoisting and Temporal Dead Zone

```javascript
console.log(a);
console.log(b);
console.log(c);

var a = 1;
let b = 2;
const c = 3;
```

**Output:**
```
undefined
ReferenceError: Cannot access 'b' before initialization
```

**Explanation:**
- `var` declarations are **hoisted** and initialized with `undefined`
- `let` and `const` are hoisted but remain in **Temporal Dead Zone (TDZ)** until their declaration line
- Accessing `a` before declaration returns `undefined` (hoisted and initialized)
- Accessing `b` or `c` before declaration throws `ReferenceError` (in TDZ)

**Key Concepts:** Hoisting, Temporal Dead Zone, var vs let vs const

---

## Question 5: Type Coercion and Equality

```javascript
console.log([] == ![]);
console.log([] == []);
console.log({} == {});
console.log(null == undefined);
console.log(null === undefined);
```

**Output:**
```
true
false
false
true
false
```

**Explanation:**
- `[] == ![]`: `![]` becomes `false`, `[]` coerces to `""` then `0`, `false` coerces to `0` → `0 == 0` → `true`
- `[] == []`: Different object references in memory → `false`
- `{} == {}`: Different object references in memory → `false`
- `null == undefined`: Special case in loose equality (==) → `true`
- `null === undefined`: Different types in strict equality (===) → `false`

**Key Concepts:** Type coercion, loose vs strict equality, object comparison by reference

---

## Question 6: this Keyword Context

```javascript
const obj = {
  name: "Alice",
  greet: function() {
    console.log(this.name);
  },
  greetArrow: () => {
    console.log(this.name);
  }
};

obj.greet();
obj.greetArrow();

const greetFunc = obj.greet;
greetFunc();
```

**Output:**
```
Alice
undefined
undefined (or TypeError in strict mode)
```

**Explanation:**
- `obj.greet()`: `this` refers to `obj` → prints "Alice"
- `obj.greetArrow()`: Arrow functions don't have their own `this`, inherits from lexical scope (global) → `undefined`
- `greetFunc()`: Lost object context, `this` becomes global object (or undefined in strict mode)
- **Solution:** Use `bind()`, `call()`, or `apply()` to preserve context

**Key Concepts:** this binding, arrow functions, context loss, lexical scope

---

## Question 7: Promise Chain and Error Handling

```javascript
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error("Error!"); })
  .then(x => x + 1)
  .catch(err => 2)
  .then(x => x + 1)
  .then(x => console.log(x));
```

**Output:**
```
3
```

**Explanation:**
- First `then`: 1 + 1 = 2
- Second `then`: Throws error, skips remaining `then` blocks until `catch`
- `catch`: Catches error and returns 2 (resolves the promise with value 2)
- Third `then`: 2 + 1 = 3
- Fourth `then`: Logs 3

**Key Concepts:** Promise chaining, error handling, catch behavior, promise resolution

---

## Question 8: Event Loop and Microtasks

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
```

**Output:**
```
1
4
3
2
```

**Explanation:**
- Synchronous code executes first: `1`, then `4`
- **Microtasks** (Promise callbacks) execute before **macrotasks** (setTimeout)
- Promise callback (`3`) executes before setTimeout callback (`2`)
- Even with 0ms delay, setTimeout is queued as a macrotask in the task queue
- Order: Call Stack → Microtask Queue → Macrotask Queue

**Key Concepts:** Event loop, microtasks vs macrotasks, execution order, call stack

---

## Question 9: Destructuring and Default Values

```javascript
const { a = 10, b = 5 } = { a: 3 };
console.log(a, b);

const [x = 1, y = 2, z = 3] = [9, undefined];
console.log(x, y, z);
```

**Output:**
```
3 5
9 2 3
```

**Explanation:**
- Object destructuring: `a` exists in object (value 3), `b` doesn't exist so uses default (5)
- Array destructuring: `x` is 9, `y` is `undefined` so uses default (2), `z` not in array so uses default (3)
- Default values only apply when value is `undefined`, NOT for `null`
- `null` would be assigned as-is, not replaced by default

**Key Concepts:** Destructuring, default parameters, undefined vs null

---

## Question 10: Prototype Chain

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};

const john = new Person("John");
console.log(john.greet());
console.log(john.hasOwnProperty('name'));
console.log(john.hasOwnProperty('greet'));
```

**Output:**
```
Hello, John
true
false
```

**Explanation:**
- `john.greet()` is found in `Person.prototype` → returns "Hello, John"
- `name` is an own property of `john` instance → `true`
- `greet` is in the prototype, not an own property → `false`
- Prototype chain lookup: `john` → `Person.prototype` → `Object.prototype` → `null`

**Key Concepts:** Prototypes, constructor functions, hasOwnProperty, prototype chain

---

## Question 11: Async/Await Error Handling

```javascript
async function fetchData() {
  try {
    const data = await Promise.reject("Error");
    console.log(data);
  } catch (error) {
    console.log("Caught:", error);
  }
  console.log("After catch");
}

fetchData();
console.log("Outside");
```

**Output:**
```
Outside
Caught: Error
After catch
```

**Explanation:**
- `fetchData()` is async, returns a Promise immediately
- "Outside" logs first (synchronous code)
- Promise rejection is caught by try-catch block
- "Caught: Error" logs inside catch
- Execution continues after catch block
- "After catch" logs last

**Key Concepts:** Async/await, error handling, asynchronous execution order

---

## Question 12: Shallow vs Deep Copy

```javascript
const original = {
  name: "Alice",
  address: { city: "NYC" }
};

const shallow = { ...original };
const deep = JSON.parse(JSON.stringify(original));

shallow.name = "Bob";
shallow.address.city = "LA";

console.log(original.name);
console.log(original.address.city);
console.log(deep.address.city);
```

**Output:**
```
Alice
LA
NYC
```

**Explanation:**
- Spread operator creates **shallow copy** (only copies top-level properties)
- `shallow.name = "Bob"` doesn't affect original (primitive value is copied)
- `shallow.address.city = "LA"` affects original (nested object is referenced, not copied)
- `deep` is completely independent (deep copy via JSON serialization)
- **Limitation:** JSON method loses functions, undefined, Date objects, and circular references

**Key Concepts:** Shallow copy, deep copy, object references, spread operator limitations

---
## Question 13: Object Shorthand


```
let sword1 = { color: "Silver", power: 10 };
const sword2 = sword1;

sword1 = { color: "Gold", power: 50 };
sword2.power = 20;

console.log(sword1.color);
console.log(sword1.power);
console.log(sword2.color);
console.log(sword2.power);

```

## freeze() vs. Object.freeze()

  
**Explanation:**
  - `freeze()` is a method of the Object class, not a function.
  - `Object.freeze()` is a function that freezes an object, preventing any modifications to its properties.


```
const config = Object.freeze({
 api: "https://v1.api.com",
 settings: {
 retries: 3
 }
});

config.api = "https://v2.api.com";
config.settings.retries = 5;

console.log(config.api);
console.log(config.settings.retries);
```


## Interview Tips:

1. **Explain your reasoning** - Walk through the code step-by-step
2. **Mention edge cases** - Show awareness of potential issues
3. **Discuss alternatives** - Multiple ways to solve problems
4. **Use proper terminology** - Hoisting, closure, coercion, prototype, etc.
5. **Ask clarifying questions** - Demonstrate critical thinking
6. **Test your understanding** - Run code mentally before answering
7. **Know the fundamentals** - Event loop, execution context, scope chain
