import React from "react";
import NavLogin from "../componets/NavLogin/NavLogin";
import SideBar from "../componets/SideBar/SideBar";
import TblMhs from "../componets/TableMhs";
import Foot from "../componets/Foot/Foot";

const TableMhs = () => {
  return (
    <>
      <div>
        <NavLogin />
        <div className="container">
          <div className="row">
            <SideBar />
            <TblMhs />
          </div>
        </div>
        <Foot />
      </div>
    </>
  );
};

export default TableMhs;
