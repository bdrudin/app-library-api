function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}
// console.log(multiplyAll([[1], [2], [3]]));
// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );

function sum(arr, n) {
  if (n <= 0) {
    return n;
  } else {
    console.log(n);
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// console.log(sum([1], 0));
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));
// 4 + 3 + 2
// n- 1 => n = 2, sum 2+2 = 4
// n -1 => n = 1, sum 1+2 = 3
// n -1 => n = 0, sum 0+2 = 2
