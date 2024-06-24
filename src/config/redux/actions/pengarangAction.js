import axios from "axios";
import { toast } from "react-toastify";


export const getPengarang = (setData, isLoading) => async (dispatch) => {
  try {
    isLoading(true);

    axios.get(`${process.env.REACT_APP_API_KEY}/api/pengarang`).then(function (respose) {
      console.log(respose);
      setData(respose.data.data);
      isLoading(false);
    });

    dispatch({ type: "GET_ALL_PENGARANG", payload: "success" });
  } catch (error) {
    console.log(error);
  }
};


export const createPengarang = (data, isLoading, navigate) => async (dispatch) => {
  try {
    isLoading(true);

    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/pengarang`, data)
      .then((res) => {
        console.log(res);
        toast.success("Add PENGARANG successful", {
          position: toast.POSITION.TOP_CENTER,
        });

        navigate(`/MyPengarang`);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);

        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        isLoading(false);
      });

    dispatch({ type: "CREATE_PENGARANG", payload: "success" });
  } catch (err) {
    toast.error("Add Articel Error", {
      position: toast.POSITION.TOP_CENTER,
    });
    isLoading(false);
  }
};

export const updatePengarang = (data, isLoading, setShow) => async (dispatch) => {
  try {
    isLoading(true);
    axios
      .put(`${process.env.REACT_APP_API_KEY}/api/pengarang/${data?.id_pegarang}`)
      .then((res) => {
        toast.success("Update Pengarang successful", {
          position: toast.POSITION.TOP_CENTER,
        });
        window.location.reload();
        isLoading(false);
        setShow(false);
        window.location.reload();
        dispatch({ type: "UPDATE_PENGARANG", payload: res.data });
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