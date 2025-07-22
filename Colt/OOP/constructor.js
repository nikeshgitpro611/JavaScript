class tangle {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }

  trangles() {
    return (this.x * this.y) / 2;
  }

  hypothenuse() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  perimetr() {
    return this.x + this.y + this.hypothenuse();
  }
}

const result = new tangle(6, 8);
console.log("trangles", result.trangles());
console.log("hypothenuse", result.hypothenuse());
console.log("perimetr", result.perimetr());

//TASK SECTION

// create class banking user balance, deposit, withdraw

class User {
  constructor(accHolder, accName, balance = 0) {
    (this.accName = accName),
      (this.accHolder = accHolder),
      (this.balance = balance);
  }

  deposit(amount) {
    if (amount <= 0) {
      return "amount must be greater than 0";
    }

    this.balance += amount;
    return `${this.accName} your deposit amount is ${amount} your  total balance is ${this.balance}`;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      return "insufficient funds";
    }

    this.balance -= amount;
    return `${this.accName} your withdraw amount is ${amount} your total balance is ${this.balance}`;
  }
}

const results =  new User("John", "Doe");
console.log(results.deposit(500));
console.log(results.deposit(400));
console.log(results.withdraw(200));


//Task -02
// Implement a class named ArrayUtils that cannot be instantiated 
// and contains static methods average and max. If the class is instantiated throw an error 
// with the message 'ArrayUtils cannot be instantiated.'
// The average method should return the average of an array of numbers. 
// If the array is empty, throw an error with the message 'Array cannot be empty.'
// The max method should return the largest number from an array of numbers. 
// You can assume you will always get passed an arrray of numbers
