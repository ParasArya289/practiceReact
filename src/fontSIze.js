// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

import { useState } from "react";

let ChangeFontSize = () =>{
  let [inp,setInp] = useState('');
  let [font,setFont] = useState(20);

  return(
    <div>
      <input type ="text" onChange={e => setInp(e.target.value)}/>
      <button onClick={()=>setFont(font + 2)}>+</button>
      <button onClick={()=>setFont(font>20? font - 2 : 20)}>-</button>
      <h2 style={{fontSize:font}}>{inp}</h2>
    </div>
  )
}
export default ChangeFontSize;