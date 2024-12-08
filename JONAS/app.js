const transactions = [
  { transaction_id: "TX001", amount: 100 },
  { transaction_id: "TX002", amount: 200 },
  { transaction_id: "TX001", amount: 150 },
  { transaction_id: "TX003", amount: 250 },
];

const uniqueTransactionIds = () => {
  return transactions.reduce((uniqueIds, transaction) => {
    uniqueIds[transaction.transaction_id] =
      (uniqueIds[transaction.transaction_id] || 0) + 1;
    return uniqueIds;
  }, {});
};

const uniqueDupicate = (passedArray) => {
  const dupliCate = Object.keys(passedArray).filter(
    (key) => passedArray[key] > 1
  );
  const unique = Object.keys(passedArray).filter(
    (key) => passedArray[key] === 1
  );
  return {
    duplicate: dupliCate,
    unique: unique,
  };
};

console.log(uniqueDupicate(uniqueTransactionIds()));
