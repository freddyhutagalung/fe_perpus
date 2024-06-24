import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const getAnggota = (setData, isLoading) => async (dispatch) => {
  try {
    isLoading(true);

    axios.get(`${process.env.REACT_APP_API_KEY}/api/anggota`).then(function (respose) {
      console.log(respose);
      setData(respose.data.data);
      isLoading(false);
    });

    dispatch({ type: "GET_ALL_ARTICEL", payload: "success" });
  } catch (error) {
    console.log(error);
  }
};

export const createAnggota = (data, saveImage, gender, isLoading, navigate) => async (dispatch) => {
  try {
    isLoading(true);
    const formData = new FormData();
    formData.append("nim_nidn", data.nim_nidn);
    formData.append("nama", data.nama);
    formData.append("jenis_kelamin", gender);
    formData.append("telepon", data.telepon);
    formData.append("email", data.email);
    formData.append("foto", saveImage);

    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/anggota`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Add Anggota successful", {
          position: toast.POSITION.TOP_CENTER,
        });

        navigate(`/myMhs`);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);

        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        isLoading(false);
      });

    dispatch({ type: "CREATE_ANGGOTA", payload: "success" });
  } catch (err) {
    toast.error("Add Articel Error", {
      position: toast.POSITION.TOP_CENTER,
    });
    isLoading(false);
  }
};

export const updateAnggota = (data, saveImage, gender, isLoading, setShow) => async (dispatch) => {
  try {
    // console.log(data.id_anggota);
    isLoading(true);
    const formData = new FormData();
    formData.append("nim_nidn", data.nim_nidn);
    formData.append("nama", data.nama);
    formData.append("jenis_kelamin", gender);
    formData.append("telepon", data.telepon);
    formData.append("email", data.email);
    formData.append("foto", saveImage);
    axios
      .put(`${process.env.REACT_APP_API_KEY}/api/anggota/${data?.id_anggota}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Update Articel successful", {
          position: toast.POSITION.TOP_CENTER,
        });

        window.location.reload();
        isLoading(false);
        setShow(false);
        window.location.reload();
        dispatch({ type: "UPDATE_ARTICEL", payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        isLoading(false);
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnggota = (id_anggota, setShow) => async (dispatch) => {
  try {
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/api/anggota/${id_anggota}`)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: " Delete Anggota",
          text: `Delete Anggota Success`,
          icon: "success",
        });
        setShow(false);
        window.location.reload();
        dispatch({ type: "DELETE_ARTICEL", payload: "success" });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "error",
          icon: "error",
        });
        setShow(false);
      });
  } catch (error) {
    console.log(error);
  }
};
