import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { apiConfig } from "../../config/api";
import { Dashboard } from "../../layouts/Dashboard";
import Search from "../../components/Datatable/Search";
import Table from "../../components/Datatable/Table";
//por mientras en lo que termino el otro form
import PatientForm from "../../components/Forms/PatientForm";

interface IDoctor {
  _id: String;
  cmp: String;
  name: String;
  fatherSurname: String;
  motherSurname: String;
  email: String;
  phone: String;
  department: {
    _id: String;
    name: String;
  };
  password: String;
  rols: Array<String>;
}

const Doctors = () => {
  const [isFetched, setIsFetched] = useState(false);

  const [filterText, setFilterText] = useState("");
  const [resetPagination, setResetPagination] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const tmpArray: any = [];
    axios
      .get(`${apiConfig.domain}/get-doctores`)
      .then((res) => {
        res.data.map((doc: IDoctor, index: any) => {
          tmpArray.push({
            dni: doc._id,
            cmp: doc.cmp,
            nombres: doc.name,
            apellidos: doc.fatherSurname + " " + doc.motherSurname,
            departamento: doc.department.name,
          });
        });

        setFilteredData(tmpArray);
        setIsFetched(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const columns = [
    {
      name: "DNI",
      selector: (row: any) => row.dni,
      cell: (row: any) => <div>{row.dni}</div>,
    },
    {
      name: "Nombre",
      selector: (row: any) => row.nombres,
      cell: (row: any) => <div>{row.nombres}</div>,
    },
    {
      name: "Apellidos",
      selector: (row: any) => row.apellidos,
      cell: (row: any) => <div>{row.apellidos}</div>,
    },
    {
      name: "Departamento",
      selector: (row: any) => row.departamento,
      cell: (row: any) => <div>{row.departamento}</div>,
    },

    {
      name: "Acciones",
      selector: (row: any) => row._id,
      cell: (row: any) => (
        <div className="text-center">
          <button className="bg-red-500 py-2 px-4 text-white font-semibold m-1">
            Eliminar
          </button>
          <button className="bg-sky-500 py-2 px-4 text-white font-semibold m-1">
            Ver más
          </button>
        </div>
      ),
    },
  ];

  const filteredItems = filteredData.filter((item: any) => {
    return item.dni && item.dni.toString().includes(filterText);
  });

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setFilterText("");
        setResetPagination(!resetPagination);
      }
    };

    return (
      <Search
        formChild={<PatientForm />}
        filterText={filterText}
        onFilter={onFilter}
        onClear={handleClear}
        placeHolder={"Buscar por dni"}
      />
    );
  }, [filterText, resetPagination]);

  return (
    <Dashboard>
      <div className="h-full flex  w-full  justify-center min-w-0">
        <div className="mx-4 my-8 dark:bg-neutral-900 h-min shadow-xl w-5/6">
          {isFetched ? (
            <Table
              filteredItems={filteredItems}
              columns={columns}
              subHeaderComponentMemo={subHeaderComponent}
            />
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </Dashboard>
  );
};

export default Doctors;
