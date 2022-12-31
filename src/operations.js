// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice. Your time starts now.

import { useState } from "react";

let Operations = () => {
  let [inp, setInp] = useState("");
  let [out, setOut] = useState(0);

  let [value1, value2] = inp.split(",");

  let operatorsArr = ["+", "-", "/", "*",'%'];

  let doOperations = (op) => {
    console.log(op);
    if (op === "+") {
      setOut(+value1 + +value2);
    } else if (op === "-") {
      setOut(value1 - value2);
    } else if (op === "/") {
      setOut(value1 / value2);
    } else if (op === "*") {
      setOut(value1 * value2);
    } else if (op === "%") {
      setOut(value1 % value2);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Value1,Value2"
        onChange={(e) => setInp(e.target.value)}
      />
      {operatorsArr.map((op) => {
        return (
          <button
            key={op}
            onClick={() => {
              doOperations(op);
            }}
          >
            {op}
          </button>
        );
      })}
      <h3>{inp}</h3>
      <h3>{out}</h3>
    </div>
  );
};
export default Operations;
