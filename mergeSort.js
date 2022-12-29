const mergeSort = (arr) => {
  // divide into two
  if (arr.length === 2) {
    // sort the array
    if (arr[1] < arr[0]) {
      const sampleElement = arr[0];
      arr[0] = arr[1];
      arr[1] = sampleElement;
    }

    console.log(`SORTED: ${arr}`);
    return arr;
  }

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2, arr.length);

  mergeSort(left);
  mergeSort(right);

  console.log('LEFT', left);
  console.log('RIGHT', right);
  return { left, right };
};

console.log(mergeSort([2, 1, 5, 4, 101, 100, 21, 19]));
