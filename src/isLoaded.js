// Create a web app with a button loded. Show a text loading... on a web app. However, hide it if I click on the button loaded.

import { useState } from "react";

let IsLoaded = () => {
  let [state, setState] = useState(true);
  let toggleHandler = () =>{
    if(state === false){
      setState(true);
    }else if(state === true){
      setState(false);
    }
  }
  return (
    <div>
       <h1 style={{display:`${state? "none" : " block"}`}}>Loading...</h1>
      <button onClick={() => toggleHandler()}>Loaded</button>
    </div>
  );
};
export default IsLoaded;
