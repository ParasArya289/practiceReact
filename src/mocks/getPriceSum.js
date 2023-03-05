const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 9.99 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 7.99 },
    { title: '1984', author: 'George Orwell', price: 10.99 },
    { title: 'Animal Farm', author: 'George Orwell', price: 8.99 },
  ];
  // Output: 19.98
  
  const getPriceSum = (arr,name) => arr.reduce((acc,{author,price})=> author === name?acc+price:acc,0);
  
  console.log(getPriceSum(books,'George Orwell'))