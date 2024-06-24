import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className=" mt-4 border  col-auto col-sm-2 bg-blue d-flex flex-column justify-content-between min-vh-100 ">
        <div>
          <a className="text-decoration-none ms-4 d-flex align-items-center text-dark d-none d-sm-inline">
            <span className="fs-4"> Mahasiwa </span>
          </a>
          <hr className="text-dark d-none d-sm-block"></hr>
          <ul class="nav nav-pills flex-column" id="myTab" role="tablist">
            <li class="nav-item text-dark my-1 ">
              <Link to={`/inputMhs`} className="nav-link " aria-current="page" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">
                <i className=" text-dark  bi-file-earmark-plus"></i>
                <span className="ms-2 text-dark d-none d-sm-inline">Add Mahasiwa</span>
              </Link>
            </li>
            <li class="nav-item text-dark my-1 ">
              <Link to={`/myMhs`} className="nav-link " aria-current="page" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">
                <i className=" text-dark  bi bi-grid"></i>
                <span className="ms-2 d-none text-dark d-sm-inline">Table Mahasiswa</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
