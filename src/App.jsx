import React from "react";
import Router from "./config/router";
import axios from "axios";

const App = () => {
  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
