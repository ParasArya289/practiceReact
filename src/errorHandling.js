// Here's an API, it can give two errors. Either 404, or 401. If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'.

import { useState } from "react";

let ErrorHandling = () => {
  let [message, setMessage] = useState("");

  let url = `https://api.funtranslations.com/translate/pirate.json`;
  let formatFetchUrl = (text) => {
    let formatedUrl = url + "?text=" + text;
    return formatedUrl;
  };
  let fetchCall = () => {
    fetch(formatFetchUrl("hello there my name is paras"))
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Page not found");
          } else if (response.status === 401) {
            throw new Error("you are not login");
          } else {
            throw new Error("Something went wrong");
          }
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.contents.translated);
      })
      .catch((err) => setMessage(err.message));
  };
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={fetchCall}>RUN</button>
    </div>
  );
};
export default ErrorHandling;
