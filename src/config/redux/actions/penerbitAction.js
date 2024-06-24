import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


export const getPenerbit = (setData, isLoading) => async (dispatch) => {
  try {
    isLoading(true);

    axios.get(`${process.env.REACT_APP_API_KEY}/api/penerbit`).then(function (respose) {
      console.log(respose);
      setData(respose.data.data);
      isLoading(false);
    });

    dispatch({ type: "GET_ALL_PENERBIT", payload: "success" });
  } catch (error) {
    console.log(error);
  }
};


export const createPenerbit = (data, isLoading, navigate) => async (dispatch) => {
  try {
    isLoading(true);

    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/penerbit`, data)
      .then((res) => {
        console.log(res);
        toast.success("Add PENERBIT successful", {
          position: toast.POSITION.TOP_CENTER,
        });

        navigate(`/MyPenerbit`);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);

        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        isLoading(false);
      });

    dispatch({ type: "CREATE_PENERBIT", payload: "success" });
  } catch (err) {
    toast.error("Add penerbit Error", {
      position: toast.POSITION.TOP_CENTER,
    });
    isLoading(false);
  }
};

export const updatePenerbit = (data, isLoading, setShow) => async (dispatch) => {
  try {
    isLoading(true);
    axios
      .put(`${process.env.REACT_APP_API_KEY}/api/penerbit/${data?.id_penerbit}`)
      .then((res) => {
        toast.success("Update Penerbit successful", {
          position: toast.POSITION.TOP_CENTER,
        });
        window.location.reload();
        isLoading(false);
        setShow(false);
        window.location.reload();
        dispatch({ type: "UPDATE_Penerbit", payload: res.data });
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


export const deletePenerbit = (id_penerbit, setShow) => async (dispatch) => {
  try {
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/api/penerbit/${id_penerbit}`)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: " Delete penerbit",
          text: `Delete penerbit Success`,
          icon: "success",
        });
        setShow(false);
        window.location.reload();
        dispatch({ type: "DELETE_PENERBIT", payload: "success" });
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
