import { useState } from "react";

let AutoMorphic = () =>{
  let [number,setNumber] = useState(0);
  let [output,setOutput] = useState('');
  let checkAutoMorphic = () =>{
    let square = number*number;
    let squareStr = square.toString().slice(-`${number.length}`);

    console.log(square,squareStr);
    // console.log('SSS',str)
    if(number === squareStr){
      setOutput(`YES, ${number} is a automorphic`)
    }else{
      setOutput(`NO, ${number} is not a automorphic`)      
    }
    console.log(square)
  }
  return(
    <>
    <input type="number" onChange={e=>setNumber(e.target.value)}/>
    <button onClick={checkAutoMorphic}>Check</button>
    <h3>{output}</h3>
    </>
  )
}
export default AutoMorphic;