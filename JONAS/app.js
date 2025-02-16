const findMissingElements = (arr1, arr2) => {
    let missingElement = arr1.filter(ele => !arr2.includes(ele));
    console.log(missingElement);
};

findMissingElements([1, 2, 3, 4, 5], [2, 4]);