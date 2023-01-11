import { useState } from "react";
import DebounceInput from "react-debounce-input";

let FetchOtp = () => {
  let [name, setName] = useState("");
  let [validate, setValidate] = useState("");
  let [validatedOTP, setValidatedOTP] = useState("");
  let [otp, setOtp] = useState("");
  let [error, setError] = useState("");
  let [color, setColor] = useState("black");

  let fetchApi = async (e) => {
    // setName(e.target.value);
    try {
      let url = `https://otpgenerator.ishanjirety.repl.co/get-otp?name=${name}`;
      let resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`something went wrong (${resp.status})`);
      }
      let data = await resp.json();
      setOtp(data?.otp);
      setError("");
    } catch (err) {
      setError("Something went wrong");
      setOtp("");
    }
  };

  let validateOtp = () => {
    if (otp === validate) {
      setValidatedOTP("Your OTP has beeen varified");
      setColor("green");
    } else {
      setValidatedOTP("Wrong OTP");
      setColor("red");
    }
  };

  return (
    // {}
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={fetchApi}>Get OTP</button>
      <h4>{error}</h4>
      <h3>{otp}</h3>

      {otp && (
        <>
          <input
            type="text"
            placeholder={otp}
            onChange={(e) => setValidate(e.target.value)}
          />
          <button onClick={validateOtp}>Validate OTP</button>
          <button onClick={() => setOtp("")}>Go Back</button>
          <h3 style={{ color: color }}>{validatedOTP}</h3>
        </>
      )}

      {/* <DebounceInput
        placeholder="Enter something here..."
        debounceTimeout={1000}
        onChange={(e) => fetchApi(e)}
      /> */}
    </div>
  );
};
export default FetchOtp;
