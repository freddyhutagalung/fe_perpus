import React, { useState } from "react";
import FormEdit from "../Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Style from "./addFromPenerbit.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPenerbit } from "../../config/redux/actions/penerbitAction";


const InputPenerbit = () => {
  const [loading, isLoading] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    nama: "",
    alamat: "",
    telepon: "",
  });

  let hendelChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  let onClick = (e) => {
    e.preventDefault();

    dispatch(createPenerbit(data, isLoading, navigate));
  };

  return (
    <>
      <div class={` mt-4 col-7 col-md-9 bg-light ${Style.rightSide}`}>
        <div className="col-12">
          <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${Style.themeRow} ${Style.rowOneRight}`}>
            <div className="col-11">
              <h3 className="pt-4">Add Penerbit</h3>
              <hr className={Style.hr} />

              <FormEdit type={"text"} title={"Nama Penerbit"} name={"nama"} placeholder={"Nama Penerbit"} value={data?.nama} onchange={hendelChangeData} />
              <FormEdit type={"textarea"} title={"Alamat"} name={"alamat"} placeholder={"Alamat"} value={data?.alamat} onchange={hendelChangeData} />
              <FormEdit type={"text"} title={"Telepon"} name={"telepon"} placeholder={"Telepon"} value={data?.telepon} onchange={hendelChangeData} />
              <button className={`btn btn-lg btn-info pb-2 btn-block mt-4 ${Style.btn}`} onClick={onClick}>
                {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : "Add Pennerbit"}
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
        <p></p>
      </div>
    </>
  );
};

export default InputPenerbit;
