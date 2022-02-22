import React, { useEffect } from "react";
import Accounts from "../components/dashboard/Account";
import HeaderUser from "../components/dashboard/HeaderUser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logIn = useSelector((state) => state.userReducer.isLogIn);
  console.log(logIn);

  useEffect(() => {
    if (logIn === null || logIn === undefined || !logIn) {
      return navigate("/");
    }
  });

  return (
    <div className="container-accounts">
      <HeaderUser />
      <Accounts />
    </div>
  );
};

export default Dashboard;
