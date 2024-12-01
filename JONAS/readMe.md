# Section - 09

 **What we learn in this section**

1. Destructure Array
2. Destructure Object
3. The Spread operator
4. Rest pattern and parameters 
5. Short Circuit (&& and ||)
6. Nullish(??)
7. for of
8. object literal
9. optional chaining(.?)
10. Loop Object : object key,values , entries
11. sets

FQA SECTION

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
