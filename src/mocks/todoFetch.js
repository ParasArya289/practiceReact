import { useState } from "react";
let TodoFetch = () => {
  let [dataArr, setDataArr] = useState([]);
  let [loading, setLoading] = useState(false);
  let [show, setShow] = useState(true);

  let fetchApi = async () => {
    try {
      let url = "https://jsonplaceholder.typicode.com/todos";

      let resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`Something Went Wrong (${resp.status})`);
      }
      setLoading(true);
      let data = await resp.json();
      let sortData = data.sort((a, b) => {
        return b.completed > a.completed ? 1 : -1;
      });
      setDataArr(sortData);
      setLoading(false);
      setShow(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  let formatString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <button onClick={fetchApi}>Fetch</button>
      {/* {loading && } */}
      {show || loading ? (
        loading && <h1>Loading...</h1>
      ) : (
        <>
          <div className="container">
            <ul className="todo-ul">
              {dataArr.map(({ title, completed }) => {
                return (
                  <div>
                    <li className="todo-list">
                      {formatString(title)}{" "}
                      <span
                        style={{ color: `${completed ? "lime" : "tomato"}` }}
                      >
                        <b>{completed ? "Completed" : "Pending"}</b>
                      </span>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
export default TodoFetch;
