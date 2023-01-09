import { useState } from "react";

let ChangeBorder = () => {
  let [borderPx, setBorderPx] = useState(1);
  console.log(borderPx)
  return (
    <>
      <h1 style={{ border: `${borderPx}px solid black` }}>Paras Arya</h1>
      <button onClick={()=>setBorderPx(5)}>5px</button>
      <button onClick={()=>setBorderPx(10)}>10px</button>
    </>
  );
};
export default ChangeBorder;
