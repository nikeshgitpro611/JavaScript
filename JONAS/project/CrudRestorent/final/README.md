# Core JavaScript & Language Features.

1. Explain the JavaScript event loop and microtasks vs. macrotasks.

 # event loop

 Event Loop Flow (Simplified)

 > JS code starts executing → functions are added to the call stack.
 > Async functions (e.g., setTimeout, fetch) are sent to the Web APIs.
 > When async ops are done:

   - Their callbacks go to the task queue.

   - Promise.then() callbacks go to the microtask queue.
> The event loop:

If the call stack is empty:

- Runs all microtasks in order.

- Then runs one task from the task queue.

Repeats.


2. What are the differences between var, let, and const? When would you use each?

3. How does JavaScript handle asynchronous operations under the hood?

4. What is the Temporal Dead Zone in ES6?

5. How does JavaScript's prototype chain work?


🧠 Advanced Concepts.

1. What are closures and how do they work in JavaScript?

2. Can you explain how this works in arrow functions vs regular functions?

3. Describe memoization and how it could be implemented in JS.

4. What is a WeakMap and how does it differ from a regular Map?

5. Explain the concept of "hoisting" in JavaScript.

# ⚙️ Performance and Optimization

1. How would you optimize large-scale rendering in a single-page application?

2. What are some common causes of memory leaks in JavaScript applications?

3. How would you debounce or throttle a function and what are their use cases?.

# 📦 Modular JavaScript & Architecture

1. Explain ES Modules vs CommonJS modules.

2. How would you structure a large-scale JavaScript/React project?

3. What is tree shaking and how does it improve bundle size?

4. How do you handle dependency injection in JS frameworks (e.g., Angular or custom)?

# 🧪 Testing and Debugging

1. What’s your approach to debugging a slow-performing web app?

2. What tools do you use for JavaScript testing and why (e.g., Jest, Mocha, Cypress)?

3. How would you test a function with asynchronous behavior?

# 🌐 Browser & DOM

1. What’s the difference between == and === in JavaScript?

2. How does JavaScript's garbage collection work in modern browsers?

3. What are some ways to handle cross-browser compatibility issues?

# 🧰 Tooling & Ecosystem

1. Explain the role of Babel and Webpack in a modern JavaScript workflow.

2. What’s your experience with TypeScript and its advantages over plain JS?

3. Have you used linting tools like ESLint? How do they help in maintaining code quality?