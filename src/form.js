// import { useState } from "react";
let Form = () => {
  let diseaseSymptoms = ['d1','d2','d3','d4','d5','d6','d7'];
  let submitHandler = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    let formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
  return (
    <>
    <h1>hello</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="name" name="name" />
        <input type="email" placeholder="email" name="email" />
        <input type="number" placeholder="number" name="number" />
        <input type="address" placeholder="address" name="address" />
        <input type="checkbox" value="disease" name="disease"/>
        <select name="symptom">
          {
              diseaseSymptoms.map(el=><option value={el}>{el}</option>)
          }
        </select>
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default Form;
