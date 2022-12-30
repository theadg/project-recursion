const mergeSort = (arr) => {
  // divide into two
  if (arr.length === 2) {
    // sort the array
    return arr.sort(sortArray);
  }

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2, arr.length);

  // recursive call to sort the arrays
  mergeSort(left);
  mergeSort(right);

  // merge the arrays together
  return merge(left, right);
};

function sortArray(a, b) {
  return a - b;
}

const merge = (left, right) => {
  const mergedArray = left.sort(sortArray).concat(right.sort(sortArray));

  return mergedArray.sort(sortArray);
};

console.log(mergeSort([2, 1, 5, 4, 101, 100, 21, 19]));
