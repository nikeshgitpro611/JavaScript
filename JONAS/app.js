const calAvgHumnAge = (num) => {
  let multData = num.map((ele) => ele * 2);
  let totalDeposit = multData
    .filter((ele) => ele > 0)
    .reduce((Acc, ele, i, acc) => Acc + ele/acc.length, {letVal : 0});
    console.log('totalDeposit : ', totalDeposit);
    
};

calAvgHumnAge([5, 2, 4, 1, -15, -8, 3]);
