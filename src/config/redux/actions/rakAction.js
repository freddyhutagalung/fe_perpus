import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


export const getRak = (setData, isLoading) => async (dispatch) => {
  try {
    isLoading(true);

    axios.get(`${process.env.REACT_APP_API_KEY}/api/rak`).then(function (respose) {
      console.log(respose);
      setData(respose.data.data);
      isLoading(false);
    });

    dispatch({ type: "GET_ALL_RAK", payload: "success" });
  } catch (error) {
    console.log(error);
  }
};


export const createRak = (data, isLoading, navigate) => async (dispatch) => {
  try {
    isLoading(true);

    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/rak`, data)
      .then((res) => {
        console.log(res);
        toast.success("Add rak successful", {
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

    dispatch({ type: "CREATE_RAK", payload: "success" });
  } catch (err) {
    toast.error("Add Rak Error", {
      position: toast.POSITION.TOP_CENTER,
    });
    isLoading(false);
  }
};

export const updateRak = (data, isLoading, setShow) => async (dispatch) => {
  try {
    isLoading(true);
    axios
      .put(`${process.env.REACT_APP_API_KEY}/api/rak/${data?.id_rak}`)
      .then((res) => {
        toast.success("Update Rak successful", {
          position: toast.POSITION.TOP_CENTER,
        });
        window.location.reload();
        isLoading(false);
        setShow(false);
        window.location.reload();
        dispatch({ type: "UPDATE_RAK", payload: res.data });
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


export const deleteRak = (id_rak, setShow) => async (dispatch) => {
  try {
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/api/rak/${id_rak}`)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: " Delete rak",
          text: `Delete rak Success`,
          icon: "success",
        });
        setShow(false);
        window.location.reload();
        dispatch({ type: "DELETE_RAK", payload: "success" });
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
