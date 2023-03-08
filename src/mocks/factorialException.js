const factorial = (n) => {
  if (n >= 13 || n < 0) throw new RangeError('n has to be lower then 13 and greater then -1');
  return Array.from({ length: n }, (_, i) => n - i)?.reduce(
    (acc, el) => acc * el,
    1
  );
};
console.log(factorial(0));
