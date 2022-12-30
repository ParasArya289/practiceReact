// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.

import { useState } from "react";

// Write a function which takes two objects and return the person with more power based on their name and power both.

let obj1 = {
  name: "Ram",
  power: 2500,
  yuga: "Treta"
};
let obj2 = {
  name: "Krishna",
  power: 2325,
  yuga: "Dwapar"
};

let PowerName = () => {
  let [win, setWin] = useState("");
  let [lose, setLose] = useState("");

  let calPower = (a, b) => {
    let newPowerA = a.name.length * 35 + a.power;
    let newPowerB = b.name.length * 35 + b.power;

    if (newPowerA > newPowerB) {
      setWin(`${a.name} is more powerfull and has power of ${newPowerA}`);
      setLose({ name: b.name, power: newPowerB });
    } else if (newPowerA < newPowerB) {
      setWin(`${b.name} is more powerfull and has power of ${newPowerB}`);
      setLose(a.name);
      setLose({ name: a.name, power: newPowerA });
    } else {
      setWin(`they are equal`);
      setLose("");
    }
  };
  // calPower(obj1, obj2);
  return (
    <>
      <h1>{win}</h1>
      <p>
        {lose.name} <sub>{lose.power}</sub>
      </p>
      <button
        style={{ padding: "1rem", borderRadius: "6px", border: "none" }}
        onClick={() => calPower(obj1, obj2)}
      >
        💪🏻
      </button>
    </>
  );
};
export default PowerName;
