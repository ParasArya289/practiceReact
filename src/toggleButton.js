import { useState } from "react";
import "./toggleButton.css";
let FlexManipulation = () => {
  let [state, setState] = useState(false);

  let stateHandler = () => {
    if (state === false) {
      setState(true);
    } else if (state === true) {
      setState(false);
    }
  };

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
    </>
  );
};
export default FlexManipulation;
