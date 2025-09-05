# Q - Getters and Setters exercise
Create a class UserProfile that encapsulates a user's profile information.

This class should have fields for username, email, and birthdate. Use getters and setters when creating these fields. Use setters to validate that the username is a non-empty string, the email includes an '@' symbol, and the birthdate is a valid date string.

If the username is an empty string or not a string - throw an error with the message of 'Invalid username.'

If the email does not include a @ character - throw an error with the message of 'Invalid email.'

If the birthdate is not a valid date string, throw an error with the message of 'Invalid birthdate.' - Note that the valid expected date string format is YYYY-MM-DD . For example, '1990-12-31' is a valid date string.
# use Case of call apply bind
- The call() method immediately invokes a function with a given this value and arguments provided individually, separated by commas.
```
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Output: Hello, Alice!
```
- The apply() method immediately invokes a function with a given this value and arguments provided as an array or an array-like object. The main difference from call() is how arguments are passed.
```
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Bob' };
const args = ['Hi', '.'];

greet.apply(person, args); // Output: Hi, Bob.
```
- The bind() method does not immediately invoke the function. Instead, it returns a new function with a specified this value and optionally, pre-set arguments. This new function can then be invoked later.
```
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Charlie' };

const boundGreet = greet.bind(person, 'Greetings');

boundGreet('!'); // Output: Greetings, Charlie!
```


# Note Random resource::::

> Use for → when the number of iterations is known (array length, counters).

> Use while → when iterations depend on a condition that may change dynamically.

> Use do...while → when you need to run the code at least once before checking the condition.