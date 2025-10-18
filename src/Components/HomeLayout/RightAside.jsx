import React from "react";
import SocialLogin from "./SocialLogin";
import FildUs from "./FildUs";
import QZon from "./QZon";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin></SocialLogin>
      <FildUs></FildUs>
      <QZon></QZon>
    </div>
  );
};

export default RightAside;
