import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAnggota } from "../../config/redux/actions/anggotaAction";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import style from "./tabelMhs.module.css";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import ModelUpdateMhs from "../Model/ModelMhs/ModelMhsUpdale";
import ModelDelete from "../Model/ModelMhs/ModelMhsDelete";

function TblMhs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const [filter, setFilter] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    nim_nidn: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    nama: { value: null, matchMode: FilterMatchMode.IN },
  });

  useEffect(() => {
    dispatch(getAnggota(setData, setLoading));
    console.log(data);
  }, []);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filter };

    _filters["global"].value = value;

    setFilter(_filters);
    setGlobalFilterValue(value);
  };

  let actionBodyTamplate = (data) => {
    return (
      <>
        <ModelUpdateMhs id_anggota={data.id_anggota} nim_nidn={data.nim_nidn} nama={data.nama} jenis_kelamin={data.jenis_kelamin} telepon={data.telepon} email={data.email} foto={data.foto}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench-adjustable-circle" viewBox="0 0 16 16">
            <path d="M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8m-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z" />
          </svg>
          <span> Upadte</span>
        </ModelUpdateMhs>
        <ModelDelete className="ml-2" id_anggota={data.id_anggota} nama={data.nama}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
          </svg>
          <span className="ml-1 p-1">Delete</span>
        </ModelDelete>
      </>
    );
  };

  return (
    <>
      <div class={`container  col-12 col-md-10 bg-light ${style.rightSide}`}>
        <div className="col-12">
          <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
            <div className="col-11">
              <h3 className="pt-4">My Anggota</h3>
              <hr className={style.hr} />
              <div className=" mt-4 container row">
                <div className="container  mb-2"></div>
                <div className="flex justify-content-end">
                  <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                  </span>
                </div>
              </div>
              <div className="table-responsive   col-xs-12" style={{ overflowX: "auto" }}>
                <table className={`${style.table} table table-responsive-sm `}>
                  <tbody>
                    <div className={`card ${style.card}`}>
                      <DataTable value={data} paginator rows={5} loading={loading} showGridlines rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: "80rem", position: "center" }}>
                        <Column field="nim_nidn" header="Nim/Nidn" sortable style={{ width: "15%" }}></Column>
                        <Column field="nama" header="Nama" sortable style={{ width: "15%" }}></Column>
                        <Column field="jenis_kelamin" header="Jenis Kelamin" sortable style={{ width: "15%" }}></Column>
                        <Column field="telepon" header="Nomor Telepon" sortable style={{ width: "15%" }}></Column>
                        <Column field="email" header="Email" sortable style={{ width: "15%" }}></Column>

                        <Column header="Action" body={actionBodyTamplate} exportable={false} style={{ minWidth: "16rem" }}></Column>
                      </DataTable>
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <p></p>
      </div>
    </>
  );
}

export default TblMhs;
