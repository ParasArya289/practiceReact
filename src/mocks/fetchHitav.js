let FetchHetav = () => {
  // https://quick-access-api.desaihetav.repl.co
  let fetchAPI = async () => {
    try {
      let response = await fetch(
        "https://mystery-api.kushanksriraj.repl.co/get"
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      let data = response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  // let fetchApi = () => {
  //   fetch("https://mystery-api.kushanksriraj.repl.co/get")
  //     .then((res) => {
  //       console.log(res);
  //       if (!res.ok) {
  //         throw new Error("Something Went wrong", res.status);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.error(err.message));
  // };
  return <button onClick={fetchAPI}>fetch</button>;
};
export default FetchHetav;
