import { Children, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormEdit from "../../../Form";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updatePengarang } from "../../../../config/redux/actions/pengarangAction";

function ModelUpdatePengarang({ id_pengarang, nama, alamat, telepon, children }) {
  const [show, setShow] = useState(false);
  const [loading, isLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [preview, setPreview] = useState(null);

  let [data, setData] = useState({
 id_pengarang,
    nama,
    alamat,
    telepon,
   
  });

  let hendelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  let dispatch = useDispatch();

  const hendelSubmit = (e) => {
    e.preventDefault();


    dispatch(updatePengarang(data, isLoading, setShow));
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
    
          <Modal.Body>
            <FormEdit type={"text"} title={"Nama"} name={"nama"} placeholder={"Nama"} value={data?.nama} onchange={hendelChange} />
            <FormEdit type={"textarea"} title={"Alamat"} name={"alamat"} placeholder={"Alamat"} value={data?.alamat} onchange={hendelChange} />
            <FormEdit type={"text"} title={"Telepon"} name={"telepon"} placeholder={"Telepon"} value={data?.telepon} onchange={hendelChange} />
          </Modal.Body>
          <ToastContainer />

          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
            <Button className={`btn btn-lg btn-info pb-2 btn-block mt-4 `} onClick={hendelSubmit} variant="secondary">
              {loading ? <span className="spinner-border spinner-border-sm" /> : "Update Pengarang"}
            </Button>
          </Modal.Footer>
      
      </Modal>
    </>
  );
}

export default ModelUpdatePengarang;
