import { useState } from "react";

let FetchWithImg = () => {
  let [dataArr, setDataArr] = useState([]);

  let fetchApi = async () => {
    try {
      let resp = await fetch("https://nftbaazarapi.rawheatg.repl.co/product");
      if (!resp.ok) {
        throw new Error(`Something went wrong (${resp.status})`);
      }
      let data = await resp.json();
      console.log(data.data);
      setDataArr(data.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <div>
        <button onClick={fetchApi}>Fetch</button>
        <ul className="todo-ul">
          {dataArr.map(({ image, name, price }) => {
            return (
              <div className="todo-list">
                <img className="todo-image" src={image} alt="product" />
                <div className="list-container">
                  <li className="list">
                    {name}
                    <span>{price}</span>
                  </li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default FetchWithImg;
