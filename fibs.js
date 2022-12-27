const fibs = (n) => {
  let firstNum = 0;
  let secondNum = 1;
  let fibArray = [];

  for (let i = 0; i <= n - 1; i++) {
    fibArray.push(firstNum);

    firstNumCopy = firstNum;
    firstNum = secondNum;
    secondNum = firstNumCopy + firstNum;
  }

  return fibArray;
};

console.log(fibs(8));
