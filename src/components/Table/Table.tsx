//@ts-nocheck
import React, { useMemo, useState } from "react";
import {
    useTable,
    useGlobalFilter,
    useAsyncDebounce,
    usePagination,
} from "react-table";

import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
} from "@heroicons/react/solid";

import Modal from "../Modal/Modal";

const Search = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}: any) => {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <label className="flex gap-x-2 items-baseline">
            <span className="text-gray-400 font-semibold">Buscar: </span>
            <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-400 focus:ring-opacity-50"
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} registros...`}
            />
        </label>
    );
};

interface Itable {
    columnas: any;
    dataa: any;
    formChild: JSX.Element;
}

const Table = ({columnas, dataa, formChild}:Itable) => {

    const [showModal, setShowModal] = useState(false);

    const data: Array<any> = useMemo(() => dataa, []);
    const columns: Array<any> = useMemo(() => columnas, []);

    const {
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
    } = useTable({ columns, data }, useGlobalFilter, usePagination);

    const handleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
        
        {showModal? <Modal handleModal={handleModal} title="Registro de pacientes">
        
            {formChild}
        
        </Modal> : null }

            <div className="w-5/6 mx-auto my-10">
            <div className="flex  mx-auto justify-between">
                <Search
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />

                <button onClick={()=>{setShowModal(true)}} className="bg-sky-400 text-base text-white font-semibold px-6 rounded-xl hover:bg-sky-500">
                    {" "}
                    Agregar +{" "}
                </button>
            </div>

            <div className="mt-6 mx-auto flex flex-col">
                <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow max-w-full overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table
                                className="min-w-full divide-y divide-gray-200"
                                {...getTableProps()}
                            >
                                <thead className="bg-gray-100">
                                    {headerGroups.map((headerGroup) => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map((column) => (
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                                    {...column.getHeaderProps()}
                                                >
                                                    {column.render("Header")}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody
                                    className="bg-white divide-y divide-gray-200"
                                    {...getTableBodyProps()}
                                >
                                    {page.map((row, i) => {
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map((cell) => {
                                                    return (
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            {...cell.getCellProps()}
                                                        >
                                                            {cell.render("Cell")}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="py-3 bg-gray-50  ">
                                <div className="flex items-center justify-between w-5/6 mx-auto">
                                    <div className="flex-1 flex justify-between sm:hidden">
                                        <button
                                            className="rounded-l-md relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                            onClick={() => previousPage()}
                                            disabled={!canPreviousPage}
                                        >
                                            Anterior
                                        </button>
                                        <button
                                            className="rounded-l-md relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                            onClick={() => nextPage()}
                                            disabled={!canNextPage}
                                        >
                                            Siguiente
                                        </button>
                                    </div>
                                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                        <div className="flex gap-x-2 items-baseline">
                                            <span className="text-sm text-gray-700">
                                                Página{" "}
                                                <span className="font-medium">
                                                    {state.pageIndex + 1}
                                                </span>{" "}
                                                de{" "}
                                                <span className="font-medium">
                                                    {pageOptions.length}
                                                </span>
                                            </span>
                                            <label>
                                                <select
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    value={state.pageSize}
                                                    onChange={(e) => {
                                                        setPageSize(Number(e.target.value));
                                                    }}
                                                >
                                                    {[5, 10, 20].map((pageSize) => (
                                                        <option key={pageSize} value={pageSize}>
                                                            Mostrar {pageSize}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                        </div>
                                        <div>
                                            <nav
                                                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                                aria-label="Pagination"
                                            >
                                                <button
                                                    className="rounded-l-md relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                    onClick={() => gotoPage(0)}
                                                    disabled={!canPreviousPage}
                                                >
                                                    <ChevronDoubleLeftIcon
                                                        className="h-5 w-5 text-gray-800"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                                <button
                                                    onClick={() => previousPage()}
                                                    disabled={!canPreviousPage}
                                                    className="rounded-l-md relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                >
                                                    <ChevronLeftIcon
                                                        className="h-5 w-5 text-gray-800"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                                <button
                                                    className="rounded-l-md relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                    onClick={() => nextPage()}
                                                    disabled={!canNextPage}
                                                >
                                                    <ChevronRightIcon
                                                        className="h-5 w-5 text-gray-800"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                                <button
                                                    className="rounded-r-md rounded-l-md relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                    onClick={() => gotoPage(pageCount - 1)}
                                                    disabled={!canNextPage}
                                                >
                                                    <ChevronDoubleRightIcon
                                                        className="h-5 w-5 text-gray-800"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
};

export default Table;
