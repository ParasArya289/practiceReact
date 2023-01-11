import { useEffect, useState } from "react";

let NewFetchItem = () => {
  let [itemsArr, setItemsArr] = useState([]);
  let [state, setState] = useState("");

  let sortArray = (e) => {
    let filter = e.target.value;
    if (filter === "dcc") {
      let sortedArrDcc = itemsArr.sort((a, b) => {
        return b.price - a.price;
      });
      setState("");
      setItemsArr(sortedArrDcc);
    } else if (filter === "acc") {
      let sortedArrAcc = itemsArr.sort((a, b) => {
        return a.price - b.price;
      });
      setState("");
      setItemsArr(sortedArrAcc);
    }
    console.log("this is sort", itemsArr, filter);
  };

  let url = "https://mock-practice.prakhar10v.repl.co/items";
  let fetchApi = async () => {
    try {
      let resp = await fetch(url);
      if (!resp.ok) {
        throw new Error("something went wrong");
      }
      let data = await resp.json();
      console.log(data);
      setItemsArr(data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   console.log("i ran");
  // }, [itemsArr, state]);
  return (
    <div>
      <button onClick={fetchApi}>Fetch</button>
      <button onClick={(e) => sortArray(e)} value="dcc">
        High to Low
      </button>
      <button onClick={(e) => sortArray(e)} value="acc">
        Low to High
      </button>
      <ul>
        {itemsArr.map((el) => {
          return (
            <div>
              <li>
                {el.item}{" "}
                <span>
                  <b>{el.price}</b>
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default NewFetchItem;
