import React from "react";
import NavLogin from "../componets/NavLogin/NavLogin";
import Foot from "../componets/Foot/Foot";
import DashboardBook from "../componets/DashboardBuku";

const DashboardBuku = () => {
  return (
    <>
      <NavLogin />
      <DashboardBook />
      <Foot />
    </>
  );
};

export default DashboardBuku;
