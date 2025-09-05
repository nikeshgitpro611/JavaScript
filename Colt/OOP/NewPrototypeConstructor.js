// TOPIC Cover
//  > new
//  > prototype
//  > constructor
//  > prototype inheritance
//  > Object.getPrototypeOf and Object.setPrototypeOf

// :::::::::::::::::::::::new::::::::::::::::::::::
// it does do four things
// 1. It creates a new object
// 2. set the keyword this to the new object
// 2. It links the new object to the prototype
// 3. It sets the __proto__ property of the new object
// 4. It returns the new object

class User{
    constructor(accHolder, accName, balance = 0){
        this.accName = accName;
        this.accHolder = accHolder;
        this.balance = balance;
    }
}

console.log(new User("John", "Doe"));
// or 
function Userfn(accHolder, accName, balance = 0){
    this.accName = accName;
    this.accHolder = accHolder;
    this.balance = balance;
}
console.log(new Userfn());

