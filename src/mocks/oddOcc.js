function findOdd(A,B) {
    const map = new Map();
    A.forEach(el=>map.set(el,(map.get(el) || 0)+1));
    for(let [key,value] of map){
      if(!!(value%2)){
        return key;
      }
    }
  }
  console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1,1,1],1))