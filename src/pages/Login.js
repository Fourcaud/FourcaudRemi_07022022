import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { getUser, SET_TOKEN } from "../actions/user.actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getToken = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: SET_TOKEN,
          payload: result.body.token,
        });
        dispatch(getUser(result.body.token));
        navigate("/profile");
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div className="container">
      <div className="container__modal">
        <div className="container__modal__center">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <h1>Sign In</h1>
          <form action="" onSubmit={getToken}>
            <div className="inputuser">
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="inputuser">
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label for="remember-me">Remember Me</label>
            </div>

            <input type="submit" value="Sign in" className="btn-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
