import React from "react";
import Feature from "../components/feature/Feature";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider img="../assets/bank-tree.jpeg" />
      <div className="feature">
        <Feature
          img="../assets/icon-chat.png"
          titre="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          img="../assets/icon-money.png"
          titre="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          img="../assets/icon-security.png"
          titre="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </div>
    </div>
  );
};

export default Home;
