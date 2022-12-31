import { useState } from "react";

let PasswordChecker = () => {
  let [message, setMessage] = useState("");
  let [flag, setFlag] = useState(true);
  let [showError, setShowError] = useState("");

  let passwordValidation = (e) => {
    setMessage(e.target.value);
      if (message.length === '') {
        setShowError(1);
      }else if(message.length !=='' && message.length < 10){
        setFlag(true);
        setShowError('length of password should be 10');
      }
       else {
        setShowError("Validated");
        setFlag(false);
      }
  };
  return (
    <div>
      <input style={{width:"50%",height:"2rem",backgroundColor:`${flag? 'rgb(255,0,0,0.3)':'rgb(0,255,0,0.3)'}`}}
        type="password"
        onChange={(e) => {
          passwordValidation(e);
        }}
      />
      <div style={{ display: "inline"}}>
        <button disabled={flag}>Submit</button>
        <small
          style={{ display: "block"}}
        >
          {showError}
        </small>
      </div>
      <h3>{message}</h3>
    </div>
  );
};
export default PasswordChecker;
