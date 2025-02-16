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

const totalMoney = (acc) => {
  acc.balance = acc.movements
    .filter((ele) => ele)
    .reduce((acc, ele) => acc + ele, 0);
  labelBalance.textContent = `${acc.balance}₹`;
};

const calDisplaySummary = (acc) => {
  acc.balance = acc.movements
    .filter((ele) => ele > 0)
    .reduce((acc, ele) => acc + ele, 0);
  labelSumIn.textContent = `${acc.balance}₹`;
  //Deduction
  let deduction = acc.movements
    .filter((ele) => ele < 0)
    .reduce((acc, ele) => acc + ele, 0);
  labelSumOut.textContent = `${Math.abs(deduction)}₹`;

  //each deposit 1.2% interest
  let deposit = acc.movements
    .filter((ele) => ele > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .reduce((acc, ele) => acc + ele, 0);
  labelSumInterest.textContent = `${deposit.toFixed(2)}₹`;
};

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

//Ui Display
const uiDisplay = (acc) => {
  displayMovements(acc.movements);
  totalMoney(acc);
  calDisplaySummary(acc);
};

//Event Handling
let currentAccount;

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    uiDisplay(currentAccount);
  }

  //Transfer Amout card
  btnTransfer.addEventListener("click", (e) => {
    e.preventDefault();
    let Amount = Number(inputTransferAmount.value);
    let receiverAcc = accounts.find(
      (acc) => acc.userName === inputTransferTo.value
    );

    if (
      Amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= Amount &&
      receiverAcc?.userName !== currentAccount.userName
    ) {
      currentAccount.movements.push(-Amount);

      receiverAcc.movements.push(Amount);

      uiDisplay(currentAccount);
    }
    inputTransferTo.value = inputTransferAmount.value = "";
  });

  btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    let confimAcc = accounts.find(
      (acc) => acc.userName === inputCloseUsername.value
    );
    if (confimAcc && confimAcc?.pin === Number(inputClosePin.value)) {
      let index =  accounts.findIndex(
        (acc) => acc.userName === currentAccount.userName
      );
      
      accounts.splice(index, 1);

      containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = "";
    console.log('accounts : ', accounts);
  });
  
});
