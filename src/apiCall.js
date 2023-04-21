

let ApiCall = () => {
    let url = `https://api.funtranslations.com/translate/piratee.json`;
  
    let formatApi = (text) => {
      let formatedUrl = url + "?text=" + text;
      return formatedUrl;
      // console.log(formatedUrl);
    };
  
    let call = () => {
      fetch(formatApi("My name is Paras Arya"))
        .then((response) => {
          if (!response.ok) {
            throw new Error("Something went wrong " + response.status);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.contents.translated);
        })
        .catch((error) => console.error(error.message));
    };
    // call();
    return (
      <div>
        <button onClick={call}>run</button>
      </div>
    );
  };
  export default ApiCall;