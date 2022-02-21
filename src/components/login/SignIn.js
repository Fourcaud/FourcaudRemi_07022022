import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="login">
      <FontAwesomeIcon icon={faUser} className="icon" />
      <Link to="/login" className="btn-signin">
        Sign in
      </Link>
    </div>
  );
};

export default SignIn;
