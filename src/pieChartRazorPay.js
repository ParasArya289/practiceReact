//RazorPay interview question

import { useState } from "react";

let PieChart = () =>{
  let [value,setValue] = useState(0);
  return (
    <>
    <input type="range" value={value} onChange={e=>setValue(e.target.value)}/>
    <div style={{
      width:'200px',
      height:'200px',
      margin:'auto',
      backgroundImage:`conic-gradient(#7c3aed,${value}%,#a78bfa 0)`,
      borderRadius:'50%',
      border:'2px solid grey'
    }}></div>
    </>
  )
}
export default PieChart;