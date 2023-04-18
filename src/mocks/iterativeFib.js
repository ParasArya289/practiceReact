const fib = (n) => {
  let [a,b] = [0,1];
  
  for(let i=0;i<n;i++){
    [a,b] = [b,b+a];
  }
  
  return a;
}
console.log(fib(9))