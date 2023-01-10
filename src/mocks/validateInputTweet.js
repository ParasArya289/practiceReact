import { useState } from "react";

let ValidateInput = () => {
  let [messaage, setMessage] = useState("");
  let [disableTweet, setDisableTweet] = useState(false);
  let [validateMessage, setValidateMessage] = useState("");
  let message;
  let maxLength = 50;

  let validate = (e) => {
    message = e.target.value;
    if (message.length === maxLength) {
      setValidateMessage("You crossed 50 characters length");
      setDisableTweet(true);
    } else {
      setValidateMessage("");
      setDisableTweet(false);
    }
    console.log("I ran", message.length);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Max Length is 50 Characters"
        onChange={(e) => validate(e)}
        maxLength={maxLength}
      />
      <button disabled={disableTweet}>Tweet</button>
      <h6>{validateMessage}</h6>
      {/* <h3>{message}</h3> */}
    </>
  );
};
export default ValidateInput;
