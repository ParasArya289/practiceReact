import { useRef, useState } from "react";

let data = [];
let Students = () => {
  let [input, setInput] = useState("");
  let [topper, setTopper] = useState("");
  let [counter, setCounter] = useState(0);
  let [avg, setAvg] = useState("");
  let inputRef = useRef(null);

  let inputHandler = () => {
    let [name, ut, pf, fi] = input.split(",");
    if (name && ut && pf && fi) {
      let obj = {
        name: name,
        marks: +ut + +pf + +fi
      };
      console.log({ name, ut, pf, fi });
      data.push(obj);
      setCounter(data.length);
      inputRef.current.value = "";
      setInput("");
      console.log(data);
    } else {
      alert("Please provide all the data");
    }
  };
  let calcAvg = () => {
    let avg = 0;
    data.map(({ marks }) => (avg += marks / data.length));
    setAvg(`${avg} is class avg`);
  };
  let checkForTopper = () => {
    if(data.length>0){
      data.sort((a, b) => {
      return b.marks - a.marks;
    });
    let name = data[0]?.name;
    let marks = data[0]?.marks;
    setTopper(`${name} is Topper of this year with marks ${marks}`);
    calcAvg();
    }else{
      alert('No data to check')
    }
    
  };
  return (
    <div>
      <h1>{`Recorded for ${counter} students`}</h1>
      <br />
      <input
        ref={inputRef}
        type="text"
        style={{ width: "50%" }}
        placeholder="Name,Unit Test,Pre Final,Final"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={inputHandler}>Submit</button>
      <button onClick={checkForTopper}>Check</button>
      <h3>{topper}</h3>
      <h3>{avg}</h3>
    </div>
  );
};
export default Students;
