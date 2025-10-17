import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Latestnews from "../Components/Latestnews";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <Latestnews></Latestnews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <section className="leftNav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="rightNav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
