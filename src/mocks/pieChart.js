import { useState } from "react";

let PieChart = () => {
  let [value, setValue] = useState(0);
  return (
    <>
      <input
        style={{ display: "block", margin: "1rem auto" }}
        type="range"
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        style={{ display: "block", margin: "1rem auto" }}
        type="number"
        max="100"
        placeholder={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        style={{
          width: "250px",
          height: "250px",
          margin: "auto",
          borderRadius: "50%",
          backgroundImage: `conic-gradient(green,${value}%,lime 0)`
        }}
      ></div>
    </>
  );
};
export default PieChart;
