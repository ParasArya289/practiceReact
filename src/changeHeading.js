// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

import { useState } from "react";

let ChangeHeadingType = () =>{
  let [message,setMessage] = useState('');
  let [out,setOut] = useState('');
  let headingArr = ['h1','h2','h3'];

  let headingHandler = (heading) =>{
    let h =`<${heading}>${message}</${heading}>`
    setOut(h);
  }
  return (
    <div>
      <input type ="text" onChange={e=>setMessage(e.target.value)}/>
      {
        headingArr.map((heading)=>{
          return <button key={heading} onClick={()=>headingHandler(heading)}>{heading}</button>
        })
      }
      <div dangerouslySetInnerHTML={{__html:out}}/>
    </div>
  );
}
export default ChangeHeadingType;