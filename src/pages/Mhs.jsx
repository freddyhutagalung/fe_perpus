import React from "react";
import NavLogin from "../componets/NavLogin/NavLogin";
import Foot from "../componets/Foot/Foot";
import SideBar from "../componets/SideBar/SideBar";
import FormMhs from "../componets/addFormMhs";

export const Mhs = () => {
  return (
    <div>
      <NavLogin />
      <div className="container">
        <div className="row">
          <SideBar />
          <FormMhs />
        </div>
      </div>
      <Foot />
    </div>
  );
};
