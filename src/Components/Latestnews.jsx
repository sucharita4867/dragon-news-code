import React from "react";
import Marquee from "react-fast-marquee";

const Latestnews = () => {
  return (
    <div className="flex gap-5 items-center bg-base-200 p-3">
      <p className="text-base-100 bg-secondary py-2 px-3">latest</p>
      <Marquee className="flex gap-4" pauseOnHover={true} speed={50}>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          quae.
        </p>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          quae.
        </p>
      </Marquee>
    </div>
  );
};

export default Latestnews;
