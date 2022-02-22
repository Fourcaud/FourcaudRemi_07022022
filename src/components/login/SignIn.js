import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { logOut } from "../../actions/user.actions";

const SignIn = () => {
  const dispatch = useDispatch();
  const first = useSelector((state) => state.userReducer.user.firstName);
  const logIn = useSelector((state) => state.userReducer.isLogIn);

  const signOut = () => {
    dispatch(logOut());
  };
  const linkToProfile = (
    <div className="login">
      <FontAwesomeIcon icon={faUnlock} className="icon" />
      <Link to="/profile" className="btn-signin" onClick={() => signOut()}>
        {first}
        <p>Sign Out</p>
      </Link>
    </div>
  );
  return (
    // if user is conneted, show Link to Profile, else Link to Sign In
    logIn ? (
      linkToProfile
    ) : (
      <div className="login">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <Link to="/login" className="btn-signin">
          Sign in
        </Link>
      </div>
    )
  );
};

export default SignIn;
