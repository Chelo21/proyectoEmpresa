import React from "react";
import "./LoadSpinner.css";

const LoadSpinner = () => {
//   let elem = document.getElementById("lds-spinner");
// elem.style.background = "blue"
  return (
    <div className="lds-spinner">
      <div className="pipo"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadSpinner;

// const LoadSpinner = () => (
// );

// export default LoadSpinner;
