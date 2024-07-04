import React from "react";
import NavLogin from "../componets/NavLogin/NavLogin";
import Foot from "../componets/Foot/Foot";
import SideBarPenerbit from "../componets/SidebarPenerbit";
import TblPenerbit from "../componets/TablePenerbit";


const TablePenerbit = () => {
  return (
    <>
      <div>
        <NavLogin />
        <div className="container">
          <div className="row">
            <SideBarPenerbit />
            <TblPenerbit />
          </div>
        </div>
        <Foot />
      </div>
    </>
  );
};

export default TablePenerbit;
