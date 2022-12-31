import { useState } from "react";
import Input from "./inputConditional";

let HeadingNew = () => {
  let [value,setValue] = useState(false);

  let clickHandler = () =>{
    if(value === false){
      setValue(true);
    }else if(value === true){
      setValue(false);
    }
  }
  return (
    <>
      <button
        style={{
          padding: "2rem 6rem",
          margin: "8rem auto",
          backgroundColor: `${value? "lime": 'tomato'}`,
          border: "none",
          borderRadius: "6px",
          color:'white',
          fontSize:"20px",
          display:'block'
        }}
        onClick={clickHandler}
      >
        {value? 'ON':'OFF'}
      </button>
      <Input value={value}/>
    </>
  );
};
export default HeadingNew;
