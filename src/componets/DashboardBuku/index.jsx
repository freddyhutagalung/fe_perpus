import React from "react";

import Style from "./dashboardBuku.css";
import { Link } from "react-router-dom";

const DashboardBook = () => {
  return (
    <>
      <div className={`${Style.backgound} backgound mt-4 }`}>
        <div className={`container ${Style.dashboard} dashboard `}>
          <div className={`card m-md-3 m-12 ${Style.cardOne} cardOne`}>
            <div className={` ${Style.backgoundImage} backgoundImage`}>
              <img className={`card-img-top ${Style.imageOne} imageOne `} src={require("../../assets/buku/book.png")} alt="Card image cap" />
            </div>
            <div className={`card-body ${Style.content} content `}>
              <h5 className="card-title">BUKU</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <a href="#" className="btn btn-primary">
                Open
              </a>
            </div>
          </div>
          <div className={`card m-md-3 ${Style.cardOne} cardOne`}>
            <div className={` ${Style.backgoundImage} backgoundImage`}>
              <img className={`card-img-top ${Style.imageOne} imageOne `} src={require("../../assets/buku/pengarang.png")} alt="Card image cap" />
            </div>
            <div className={`card-body ${Style.content} content `}>
              <h5 className="card-title">PENGARANG</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <Link to="/Pengarang">
                <a href="#" className="btn btn-primary">
                  Open
                </a>
              </Link>
            </div>
          </div>
          <div className={`card m-md-3 ${Style.cardOne} cardOne`}>
            <div className={` ${Style.backgoundImage} backgoundImage`}>
              <img className={`card-img-top ${Style.imageOne} imageOne `} src={require("../../assets/buku/penerbit.png")} alt="Card image cap" />
            </div>
            <div className={`card-body ${Style.content} content `}>
              <h5 className="card-title">PENERBIT</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <a href="#" className="btn btn-primary">
                Open
              </a>
            </div>
          </div>
          <div className={`card m-md-3 ${Style.cardOne} cardOne`}>
            <div className={` ${Style.backgoundImage} backgoundImage`}>
              <img className={`card-img-top ${Style.imageOne} imageOne `} src={require("../../assets/buku/rak1.png")} alt="Card image cap" />
            </div>
            <div className={`card-body ${Style.content} content `}>
              <h5 className="card-title">RAK BUKU</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <a href="#" className="btn btn-primary">
                Open
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardBook;
