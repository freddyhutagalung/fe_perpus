import { Children, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormEdit from "../../../Form";
import { useDispatch } from "react-redux";
import { updateAnggota } from "../../../../config/redux/actions/anggotaAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModelUpdateMhs({ id_anggota, nim_nidn, nama, jenis_kelamin, telepon, email, children }) {
  const [show, setShow] = useState(false);
  const [loading, isLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [preview, setPreview] = useState(null);

  let [data, setData] = useState({
    id_anggota,
    nim_nidn,
    nama,
    telepon,
    email,
  });

  const [gender, setGender] = useState(jenis_kelamin);

  console.log(gender);

  let hendelChangeGender = (e) => {
    setGender(e.target.value);
  };

  let hendelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const [foto, setPhoto] = useState(null);

  // console.log(photo);

  let hendelUpload = (e) => {
    const img = e.target.files[0];
    setPhoto(img);
    setPreview(URL.createObjectURL(img));
  };

  let dispatch = useDispatch();

  const hendelSubmit = (e) => {
    e.preventDefault();

    console.log(data);
    dispatch(updateAnggota(data, foto, gender, isLoading, setShow));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{children}</Modal.Title>
        </Modal.Header>
        <form onSubmit={hendelSubmit}>
          <Modal.Body>
            <FormEdit type={"text"} title={"NIM"} name={"nim_nidn"} placeholder={"NIM"} value={data?.nim_nidn} onchange={hendelChange} />
            <FormEdit type={"text"} title={"Nama Lengkap"} name={"nama"} placeholder={"Nama Langkap"} value={data?.nama} onchange={hendelChange} />

            <div>
              <label htmlFor="thumbnail">Jenis Kelamin</label>
            </div>
            <div className="radio">
              <label>
                <input className="mr-2" type="radio" value={"Laki-Laki"} checked={gender === "Laki-Laki"} onChange={hendelChangeGender} />
                Laki-Laki
              </label>
            </div>
            <div className="radio">
              <label>
                <input className="mr-2" type="radio" value={"Perempuan"} checked={gender === "Perempuan"} onChange={hendelChangeGender} />
                Perempuan
              </label>
            </div>
            <FormEdit type={"text"} title={"Telepon"} name={"telepon"} placeholder={"Telepon"} value={data?.telepon} onchange={hendelChange} />
            <FormEdit type={"text"} title={"Email"} name={"email"} placeholder={"Email"} value={data?.email} onchange={hendelChange} />
            <label htmlFor="">Foto</label>
            <input className="form-control" type="file" placeholder="Foto" name="foto" value={data.foto} onChange={hendelUpload} />
            {preview ? (
              <img src={preview} alt="avatar" height={100} width={100} style={{ height: 50, borderRadius: 20 }} className={`m-auto my-3 h-50 w-md-20  avatar `} />
            ) : (
              // <Image src={upload} alt="uploadImg" />
              <img src={foto} alt="uploadImg" style={{ height: 100 }} />
            )}
          </Modal.Body>
          <ToastContainer />

          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
            <Button className={`btn btn-lg btn-info pb-2 btn-block mt-4 `} type="submit" variant="secondary">
              {loading ? <span className="spinner-border spinner-border-sm" /> : "Update Anggota"}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModelUpdateMhs;
