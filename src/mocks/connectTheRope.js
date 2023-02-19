//unoptimised + wrong outputs on bigger arrays
//implement it using connect the rope algorithm
//can implement it using minHeap
function addAll(numbers) {
    let sum = []
    let cost = numbers[0]+numbers[1];
  
    // const [a,b] = numbers;
      sum.push(cost)
    for(let i=2;i<numbers.length;i++){
     cost = cost + numbers[i];
      sum.push(cost)
      
      console.log(sum)
    }
    return sum.reduce((acc,i)=>acc+i,0);
  }