import { useState } from "react";

let Laoded = () => {
  let [loading, setLoading] = useState(true);
  let loadingHandler = () => {
    setLoading(false);
  };
  let reloadingHandler = () => {
    setLoading(true);
  };
  return (
    <div>
      {loading && <h2>Loading....</h2>}
      <button onClick={() => loadingHandler()}>Loaded</button>
      <button onClick={() => reloadingHandler()}>Reload</button>
    </div>
  );
};
export default Laoded;
