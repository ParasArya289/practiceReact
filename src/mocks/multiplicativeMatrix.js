const multiplicationTable = function (size) {
  //   let table = [];
  //   for(let i=1;i<=size;i++){
  //     const temp = [];
  //     for(let j=1;j<=size;j++){
  //       temp.push(i*j);
  //     }
  //     table.push(temp)
  //   }
  //   return table;
  return new Array(size)
    .fill(0)
    .reduce(
      (acc, _, i) => [
        ...acc,
        new Array(size)
          .fill(0)
          .reduce((acc2, _, j) => [...acc2, (i + 1) * (j + 1)], []),
      ],
      []
    );
};
console.log(multiplicationTable(3));
