import React from "react";
import NavLogin from "../componets/NavLogin/NavLogin";
import Foot from "../componets/Foot/Foot";
import TblPengarang from "../componets/TablePengarang";
import SideBarPengarang from "../componets/SidebarPengarang";

const TblPenarang = () => {
  return (
    <>
      <div>
        <NavLogin />
        <div className="container">
          <div className="row">
            <SideBarPengarang />
            <TblPengarang />
          </div>
        </div>
        <Foot />
      </div>
    </>
  );
};

export default TblPenarang;
