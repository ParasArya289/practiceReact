import { useEffect, useState } from "react";

let FetchItem = () => {
  let [itemsArr, setItemsArr] = useState([]);
  let fetchItems = () => {
    fetch("https://mock-practice.prakhar10v.repl.co/items")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setItemsArr(data);
      })
      .catch((err) => console.error(err.message));
  };
  let priceHighToLow = () => {
    let sortedArr1 = itemsArr.sort((a, b) => {
      return b.price - a.price;
    });
    setItemsArr(sortedArr1);
  };
  let priceLowToHigh = () => {
    let sortedArr2 = itemsArr.sort((a, b) => {
      return a.price - b.price;
    });
    setItemsArr(sortedArr2);
  };

  return (
    <div>
      <button onClick={fetchItems}>Fetch Items</button>
      {/* <h1>{item}</h1> */}
      <ul style={{ listStyle: "none" }}>
        <button onClick={priceHighToLow}>High To Low</button>
        <button onClick={priceLowToHigh}>Low TO High</button>
        {itemsArr.map((el) => {
          return (
            <div>
              <li>
                {el.item}{" "}
                <span>
                  <b>₹.{el.price}</b>
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchItem;
