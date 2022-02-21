import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const Logo = (props) => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={props.img} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;

Logo.propTypes = {
  img: PropTypes.string.isRequired,
};
