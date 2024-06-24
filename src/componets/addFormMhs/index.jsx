import React, { useState } from "react";
import FormEdit from "../Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Style from "./addForm.module.css";
import { useDispatch } from "react-redux";
import { createAnggota } from "../../config/redux/actions/anggotaAction";
import { useNavigate } from "react-router-dom";

const FormMhs = () => {
  const [preview, setPreview] = useState(null);
  const [loading, isLoading] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    nim_nidn: "",
    nama: "",
    telepon: "",
    email: "",
  });

  let hendelChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const [geder, setGender] = useState("");

  const [foto, setFoto] = useState(null);

  let hendelUpload = (e) => {
    const img = e.target.files[0];
    setFoto(img);
    setPreview(URL.createObjectURL(img));
  };

  let hendelChange = (e) => {
    setGender(e.target.value);
  };

  console.log(geder);

  const dispatch = useDispatch();

  let hendelSubmit = (e) => {
    e.preventDefault();

    dispatch(createAnggota(data, foto, geder, isLoading, navigate));
  };

  return (
    <>
      <div class={` mt-4 col-7 col-md-9 bg-light ${Style.rightSide}`}>
        <div className="col-12">
          <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${Style.themeRow} ${Style.rowOneRight}`}>
            <div className="col-11">
              <h3 className="pt-4">Add Anggota</h3>
              <hr className={Style.hr} />
              <form onSubmit={hendelSubmit}>
                <FormEdit type={"text"} title={"NIM"} name={"nim_nidn"} placeholder={"NIM"} value={data?.nim_nidn} onchange={hendelChangeData} />
                <FormEdit type={"text"} title={"Nama Lengkap"} name={"nama"} placeholder={"Nama Langkap"} value={data?.nama} onchange={hendelChangeData} />

                <div>
                  <label htmlFor="thumbnail">Jenis Kelamin</label>
                </div>
                <div className="radio">
                  <label>
                    <input className="mr-2" type="radio" value="Laki-Laki" checked={geder === "Laki-Laki"} onChange={hendelChange} />
                    Laki Laki
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input className="mr-2" type="radio" value="Perempuan" checked={geder === "Perempuan"} onChange={hendelChange} />
                    Perempuan
                  </label>
                </div>
                <FormEdit type={"text"} title={"Telepon"} name={"telepon"} placeholder={"Telepon"} value={data?.telepon} onchange={hendelChangeData} />
                <FormEdit type={"text"} title={"Email"} name={"email"} placeholder={"Email"} value={data?.email} onchange={hendelChangeData} />
                <label htmlFor="">Foto</label>
                <input className="form-control " type="file" placeholder="foto" name="image" value={data.foto} onChange={hendelUpload} />
                {preview ? (
                  <img src={preview} alt="avatar" height={100} width={100} style={{ height: 10, borderRadius: 20 }} className={`m-auto my-3 h-50 w-md-20 ${Style.avatar} avatar `} />
                ) : (
                  // <Image src={upload} alt="uploadImg" />
                  <img src={require("../../assets/addAnggota/image.png")} alt="uploadImg" />
                )}
                <button className={`btn btn-lg btn-info pb-2 btn-block mt-4 ${Style.btn}`} type="submit">
                  {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : "Add Anggota"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
        <p></p>
      </div>
    </>
  );
};

export default FormMhs;
