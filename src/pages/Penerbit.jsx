import React from "react";
import NavLogin from "../componets/NavLogin/NavLogin";
import Foot from "../componets/Foot/Foot";
import SideBarPenerbit from "../componets/SidebarPenerbit";
import InputPenerbit from "../componets/AddFormPenerbit";


const Penerbit = () => {
  return (
    <>
      <NavLogin />
      <div className="container">
        <div className="row">
        <SideBarPenerbit/>
        <InputPenerbit/>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Penerbit;
