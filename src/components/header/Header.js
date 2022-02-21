import React from "react";
import Logo from "../logo/Logo";
import SignIn from "../login/SignIn";

const Header = () => {
  return (
    <div className="header">
      <Logo img="../assets/argentBankLogo.png" />
      <SignIn />
    </div>
  );
};

export default Header;
