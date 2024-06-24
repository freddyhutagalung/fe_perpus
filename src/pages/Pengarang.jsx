import React from "react";
import NavLogin from "../componets/NavLogin/NavLogin";
import Foot from "../componets/Foot/Foot";
import SideBarPengarang from "../componets/SidebarPengarang";
import InputPengarang from "../componets/AddFormPengarang";

const Pengarang = () => {
  return (
    <>
      <NavLogin />
      <div className="container">
        <div className="row">
          <SideBarPengarang />
          <InputPengarang />
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Pengarang;
