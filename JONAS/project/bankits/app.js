// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = (movements) => {
  containerMovements.innerHTML = "";
  movements.forEach((element, index) => {
    const type = element > 0 ? "deposit" : "withdrawal";
    let html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${element} ₹</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const totalMoney = (movements) => {
  let val = movements
    .filter((ele) => ele > 0)
    .reduce((acc, ele) => acc + ele, 0);
  console.log("movements : ", val);
  labelBalance.textContent = `${val}₹`;
};
totalMoney(account1.movements);

const calDisplaySummary = (movements) => {
  let incomes = movements
    .filter((ele) => ele > 0)
    .reduce((acc, ele) => acc + ele, 0);
  labelSumIn.textContent = `${incomes}₹`;
  //Deduction
  let deduction = movements
    .filter((ele) => ele < 0)
    .reduce((acc, ele) => acc + ele, 0);
  labelSumOut.textContent = `${Math.abs(deduction)}₹`;

  //each deposit 1.2% interest
  let deposit = movements
    .filter((ele) => ele > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .reduce((acc, ele) => acc + ele, 0);
    labelSumInterest.textContent = `${deposit}₹`
};
calDisplaySummary(account1.movements);

const creatUsername = (acc) => {
  acc.forEach((val) => {
    val.userName = val.owner
      .toLowerCase()
      .split(" ")
      .map((val) => val[0])
      .join(" ");
  });
};
creatUsername(accounts);
