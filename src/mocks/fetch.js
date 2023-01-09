import { useEffect, useState } from "react";

let Fetch = () => {
  let [state, setState] = useState(false);

  // useEffect(() => {
  //   let fetchCall = () => {
  //     fetch("https://api.funtranslations.com/translate/pirate.json`")
  //       .then((response) => {
  //         if (!response.ok) {
  //           if (response.status === 404) {
  //             throw new Error("Page not found");
  //           } else if (response.status === 401) {
  //             throw new Error("you are not login");
  //           } else {
  //             throw new Error("Something went wrong");
  //           }
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data.contents.translated);
  //       })
  //       .catch((err) => console.log(err.message));
  //   };
  //   fetchCall();
  // }, [state]);
  // https://api.funtranslations.com/translate/pirate.json?
  useEffect(() => {
    let doFetch = async () => {
      try {
        let response = await fetch(
          "https://quick-access-api.desaihetav.repl.co/"
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        let data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    doFetch();
  }, [state]);

  return (
    <div>
      <button onClick={() => setState(true)}>Fetch</button>
      <button onClick={() => setState(false)}>reFetch</button>
    </div>
  );
};
export default Fetch;
