import { useState } from "react";

// Q1) Create 2 buttons with text YJHD and ZNMD. On the click of a button, call given API with query as same as the button text, and display the message you get on the screen.API - https://mock-practice.prakhar10v.repl.co/bollywood?name=Eg - Clicking on button YJHD will make a call to https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD .
let FetchBollyWood = () => {
  let [message, setMessage] = useState("");
  let moviesBtn = ["YJHD", "ZNMD"];

  let url = "https://mock-practice.prakhar10v.repl.co/bollywood?name=";

  let fetchApi = async (el) => {
    try {
      let newUrl = url + el;

      let resp = await fetch(newUrl);
      if (!resp.ok) {
        throw new Error("something went wrong");
      }
      let data = await resp.json();
      setMessage(data?.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      {moviesBtn.map((el) => {
        return (
          <button key={el} onClick={() => fetchApi(el)}>
            {el}
          </button>
        );
      })}
      <h1>{message}</h1>
    </div>
  );
};
export default FetchBollyWood;
