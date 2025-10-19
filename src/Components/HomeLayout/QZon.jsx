import React from "react";
import swimingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
const QZon = () => {

  return (
    
    <div className="bg-base-200 p-3">
      <h1 className="font-bold mb-5 ">QZone</h1>
      <div className="space-y-5">
        <img src={swimingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
      </div>
    </div>
  );
};

export default QZon;
