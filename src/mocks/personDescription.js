import { useState } from "react";

// Create an Input Element, which shows a display message according to the Input text.If you type -"Tanvi" - then show, "She is the best CEO ever!""Tanay" - then show, "He is our FUNNY mentor!""Swapnil" - then show, "He helps us CONQUER jobs!""Akanksha" - then show, "She is our CHEERFUL Interviewer!"

let data = [
  {
    name: "Tanvi",
    description: "She is the best CEO ever!"
  },
  {
    name: "Tanay",
    description: "He is our FUNNY mentor!"
  },
  {
    name: "Swapnil",
    description: "He helps us CONQUER jobs!"
  },
  {
    name: "Akansha",
    description: "She is our CHEERFUL Interviewer!"
  }
];

let PersonDescription = () => {
  let [input, setInput] = useState("");
  let [output, setOutput] = useState("");
  let [nameAndDescriptiption, setNameAndDescription] = useState("");

  let descriptionHandler = () => {
    setOutput("");
    console.log("this is search", data);
    data.map((el) => {
      if (input.toUpperCase() === el.name.toUpperCase()) {
        setOutput(el.description);
      }
    });
    if (!output) {
      setOutput("Your name is not in the list, may be in future?");
    }
  };
  let getNameAndDescription = () => {
    let [name, des] = nameAndDescriptiption.split(",");

    console.log({ name, des });
    let obj = {
      name: name,
      description: des
    };
    data.push(obj);
    console.log("this is setdata", data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name,Description"
        onChange={(e) => setNameAndDescription(e.target.value)}
      />
      <button onClick={getNameAndDescription}>Submit</button>
      <br />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={descriptionHandler}>Check</button>
      <h3>{input}</h3>
      <h3>{output}</h3>
    </div>
  );
};
export default PersonDescription;
