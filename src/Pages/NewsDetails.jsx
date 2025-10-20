import React from "react";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayout/RightAside";

const NewsDetails = () => {
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h1 className="font-bold bg-4">News Details</h1>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
