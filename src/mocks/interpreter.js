import { useState } from "react";

let OutPut = () => {
  let btn = [
    { state: "Log", color: "black" },
    { state: "Warn", color: "yellow" },
    { state: "Error", color: "red" }
  ];

  let [color, setColor] = useState("");
  let [message, setMessage] = useState("");

  let outputHandler = (el) => {
    btn.forEach(btnEl=>{
      if(btnEl.state === el){
        setColor(btnEl.color);
      }
    })
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        onChange={(e) => setMessage(e.target.value)}
      />
      {btn.map((el) => {
        return (
          <button key={el.state} onClick={() => outputHandler(el.state)}>
            {el.state}
          </button>
        );
      })}
      <h3 style={{ color: color }}>{message}</h3>
    </div>
  );
};
export default OutPut;
