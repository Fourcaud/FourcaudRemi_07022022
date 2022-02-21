import React from "react";

const Feature = (props) => {
  return (
    <div className="feature__card">
      <img src={props.img} alt="logo" className="feature-icon" />
      <h1>{props.titre}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Feature;
