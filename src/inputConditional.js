import {useState} from 'react';
let Input = ({ value }) => {
  let [message,setMessage] = useState('')
  return (
    value && (
      <>
      <input
        style={{
          width: "12rem",
          padding: "1rem",
          backgroundColor: "wheat",
          border: "none",
          borderRadius: "6px"
        }}
        onChange={e=>setMessage(e.target.value)}
      />
      <h2>{message}</h2>
      </>
    )
  );
};
export default Input;
