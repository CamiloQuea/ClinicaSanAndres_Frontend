import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dashboard } from "../../layouts/Dashboard";
import Table from "../../components/Table/Table";
import PatientForm from "../../components/Forms/PatientForm";

export default function Patients() {
  const [patients, setPatients]: any = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [tableHeader, setTableHeader]: any = useState([]);
  const allowedParmams = ["_id", "allergis", "__v"]

  useEffect(() => {
    const tmpArray: any = [];
    axios
      .get(
        "http://localhost:4000/patient"
      )
      .then((res) => {

        console.log(res.data)
        setPatients(res.data);

        Object.keys(res.data[0]).filter((key) => !allowedParmams.includes(key)).map((el: string) => {
          tmpArray.push({
            id: el,
            Header: el,
            accessor: el,
          });
        });
        setTableHeader(tmpArray);
        setIsFetched(true);
        console.log(tableHeader)
        //console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [{ data: "firstName", title: "Nombre" }];

  return (
    <Dashboard>
      <div className="h-full flex  justify-center min-w-0">
        <div className="w-5/6 rounded-xl mx-4 my-8 dark:bg-neutral-900 shadow-xl min-w-0">
          {isFetched ? (
            <Table columnas={tableHeader} dataa={patients} formChild={<PatientForm />} />
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </Dashboard>
  );
}
