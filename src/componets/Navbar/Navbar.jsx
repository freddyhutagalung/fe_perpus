import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
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

      <header>
        <div className={`${style.kontak}  kontak`}>
          <div className="row">
            <FontAwesomeIcon className={`${style.call} call`} icon={faPhone} size="1x" />
            <span className={`${style.number} number`}>(061) 7883991 | 0877 6644 8555</span>
            <FontAwesomeIcon className={`${style.number} number`} icon={faMailBulk} />
            <span className={`${style.number} number`}>stims@stimsukmamedan.ac.id</span>
          </div>
        </div>
        <nav className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "auto",
            }}
          >
            <section>
              <div
                className="linkTo"
                style={{
                  alignItems: "center",
                  height: "70px",
                  textAlign: "center",
                  display: "flex",
                }}
              >
                <div>
                  <Link to="/login">
                    <button
                      style={{
                        height: "40px",
                        width: "100px",
                        borderRadius: "10px",
                        border: 0,
                      }}
                    >
                      Login
                    </button>
                  </Link>
                </div>
                <div style={{ margin: "0 10px" }}>
                  <Link to="/register">
                    <button
                      style={{
                        height: "40px",
                        width: "100px",
                        borderRadius: "10px",
                        border: 0,
                      }}
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>

                <div style={{ margin: "0 500px" }}>
                  <Link to="/home">
                    <button
                      style={{
                        height: "40px",
                        width: "100px",
                        borderRadius: "10px",
                        border: 0,
                      }}
                    >
                      Home
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </nav>
      </header>
    </>
  );
};
