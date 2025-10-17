import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center items-center gap-2 flex-col">
      <img src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent font-semibold">
        {format(new Date(), "EEEE , MMMM MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
