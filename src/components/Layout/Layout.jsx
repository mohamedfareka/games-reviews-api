import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
