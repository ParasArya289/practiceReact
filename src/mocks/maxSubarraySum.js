//Time:O(N) Space:O(1)
var maxSequence = function (arr) {
  let maxSum = 0;
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
    maxSum = Math.max(maxSum, arr[i]);
  }
  return maxSum;
};
