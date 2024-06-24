import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Detail from "../../pages/Detail";
import Home from "../../pages/Home";
import Page404 from "../../pages/Page404";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import { Mhs } from "../../pages/Mhs";
import TableMhs from "../../pages/TableMhs";
import DashboardBuku from "../../pages/DashboardBuku";
import Pengarang from "../../pages/Pengarang";
import TblPenarang from "../../pages/TablePengarang";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/inputMhs" element={<Mhs />} />
          <Route path="/myMhs" element={<TableMhs />} />
          <Route path="/dashboardBuku" element={<DashboardBuku />} />
          <Route path="/Pengarang" element={<Pengarang />} />
          <Route path="/MyPengarang" element={<TblPenarang/>} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
