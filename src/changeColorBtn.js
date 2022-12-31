// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.

import { useState } from "react";

let ChangeColorBtn = () => {
  let colorArr = ["red", "green", "blue"];
  let [inp, setInp] = useState("");
  let [clr, setColor] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="input text"
        onChange={(e) => setInp(e.target.value)}
      />
      {colorArr.map((clr) => {
        return (
          <button key={clr} onClick={() => setColor(clr)}>
            {clr}
          </button>
        );
      })}
      <h2 style={{ color: clr }}>{inp}</h2>
    </div>
  );
};

export default ChangeColorBtn;
