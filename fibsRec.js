const fibs = (n) => {
  if (n < 2) return n;

  return fibs(n - 1) + fibs(n - 2);
};

const fibsNonRec = (n) => {
  return n - 1 + (n - 2);
};

const fibsRec = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const fibs = fibsRec(n - 1);
  return [...fibs, fibs[fibs.length - 1] + fibs[fibs.length - 2]];
};

console.log(fibsRec(8));
console.log(fibsNonRec(8));
// // [0, 1, 1, 2, 3, 5, 8, 13]
