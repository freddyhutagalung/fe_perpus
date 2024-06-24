import React from "react";

import logo from "../../assets/logo/logosimsukma.png";

import Style from "./NavLogin.module.css";
import { Link } from "react-router-dom";

const NavLogin = () => {
  return (
    <>
      <style>
        header {"{"}
        top: 0; position: sticky; background-color: transparent; transition: background-color 0.2s ease-in-out; z-index: 10;
        {"}"}
        header.scrolled {"{"}
        background-color: lightblue; opacity: 0.98;
        {"}"}
        .icon {"{"}
        height: 50px; width: 50px; position: relative; background-color: lightblue;
        {"}"}
        .icon::after {"{"}
        content: ""; width: 15px; height: 15px; background-color: beige; position: absolute; border-radius: 100%; right: 0px; top: 0px;
        {"}"}
      </style>

      {/* Hello world */}
      <nav className={`  navbar navbar-expand-lg navbar-light`}>
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="/home">
            <img className={`${Style.logo} logo`} src={logo} alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item dropdown">
                <a class={`nav-link dropdown-toggle `} href="#" role="button" data-toggle="dropdown" aria-expanded="true">
                  Input
                </a>
                <div className={` ${Style.drop} drop dropdown-menu`}>
                  <Link className={`dropdown-item`} to="/inputMhs">
                    <span clasName={`${Style.mhs} mhs`}> Mahasiwa/Mahasiwi</span>
                  </Link>
                  <Link to="/dashboardBuku">
                    <a className="dropdown-item" href="#">
                      Buku
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
            <form className="">
              <li class="nav-item dropdown">
                <span class={`nav-link ${Style.seting} seting`} href="#" data-toggle="dropdown" aria-expanded="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </span>
                <div className={` ${Style.drop} drop dropdown-menu`}>
                  <Link className={`dropdown-item`} to="/inputMhs">
                    <span clasName={`${Style.mhs} mhs`}> User</span>
                  </Link>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </li>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavLogin;
