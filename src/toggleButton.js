import { useState } from "react";
import "./flex.css";
import NeoInput from "./neoInput";
let FlexManipulation = () => {
  let [state, setState] = useState(false);

  let stateHandler = () => {
    if (state === false) {
      setState(true);
    } else if (state === true) {
      setState(false);
    }
  };
  // style={{ backgroundColor: `${state ? "#dc2626" : "#86efac"}` }}
  return (
    <>
      <div
        className="parent"
        
      >
        <div
          className="child"
          style={{ float: `${state ? "left" : "right"}`, margin: "0.55rem" }}
          onClick={stateHandler}
        >
          <div className="dot" style={{ backgroundColor: `${state ? "#f87171" : "#86efac"}` }}></div>
        </div>
      </div>
      <hr/>
      <NeoInput state={state}/>
    </>
  );
};
export default FlexManipulation;
