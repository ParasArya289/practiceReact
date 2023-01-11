import { useState } from "react";
let CheckVowels = () => {
  let [str, setStr] = useState("");
  let vowels = ["a", "e", "i", "o", "u"];
  let [output, setOutput] = useState("");
  let handler = () => {
    let counter = [];
    // vowels.forEeach((el) => {
    //   if (str.includes(el)) {
    //     counter.push(el);
    //   }
    // });

    for (let letter of str) {
      if (vowels.includes(letter)) {
        counter.push(letter);
      }
    }
    let distinctCounter = new Set(counter);
    console.log(distinctCounter)

    setOutput(`${Array.from(distinctCounter).join(',')} (${counter.length})`);
    console.log(counter);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setStr(e.target.value)} />
      <button onClick={handler}>Check</button>
      <h1>{output}</h1>
    </div>
  );
};
export default CheckVowels;
