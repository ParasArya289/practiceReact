// Create color variables in CSS. Two colors: primary and secondary. Now make your h1 of primary color, h2 of secondary color. Make two buttons, primary and secondary using the same color. Can you also set a font from Google Font?

import "./primaryColor.css";

let PrimaryColor = () => {
  return (
    <>
      <h1 className="primary-h1">This Is Primary</h1>
      <h1 className="secondary-h1">This Is Secondary</h1>
      <button className="primary-btn">Primary</button>
      <button className="secondary-btn">Secondary</button>
    </>
  );
};
export default PrimaryColor;
