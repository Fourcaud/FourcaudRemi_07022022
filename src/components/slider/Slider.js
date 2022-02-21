import React from "react";
import PropTypes from "prop-types";

const Slider = (props) => {
  return (
    <div className="slider">
      <img src={props.img} alt="logo" />
      <div className="news">
        <h2>No fees.</h2>

        <h2>No minimum deposit.</h2>

        <h2>High interest rates.</h2>

        <p>Open a savings account with Argent Bank today!</p>
      </div>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  img: PropTypes.string.isRequired,
};
