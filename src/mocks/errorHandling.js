import { useState } from "react";

let ErrorHandling = () => {
  let [errorState, setErrorState] = useState("");

  let fetchApi = async () => {
    try {
      let response = await fetch(
        "https://mystery-api.kushanksriraj.repl.co/get"
      );
      console.log(response);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("page not found");
        } else if (response.status === 401) {
          throw new Error("You are not loggedin");
        }else{
          throw new Error('something went wrong');
        }
      }
      let data = response.json;
    } catch (err) {
      setErrorState(err.message);
      console.log('err',err.message);
    }
  };
  return (
    <>
      <h1>hello fetch</h1>
      <button onClick={fetchApi}>Fetch</button>
      <h1>{errorState}</h1>
    </>
  );
};
export default ErrorHandling;
