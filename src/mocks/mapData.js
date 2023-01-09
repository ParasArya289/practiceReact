import { useState } from "react";

let MapData = () => {
  let [dataArr, setDataArr] = useState([]);
  let [error, setError] = useState("");
  let fetchData = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error("something went wrong", response.status);
      }
      let data = await response.json();
      setDataArr(data);
      setError("");
      // console.log(data);
    } catch (err) {
      setError(err.message);
    }
  };
  // console.log('this is state',dataArr);
  return (
    <>
      <button onClick={fetchData}>Fetch</button>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <ul className="ul-element">
          {dataArr.map((el) => {
            return (
              <div className="list-container">
                <li className="list-element" key={el.id}>
                  {el.title}
                  <span className="list-span">
                    <b> {`${el.completed ? "Completed" : "Not Completed"}`}</b>
                  </span>
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default MapData;
