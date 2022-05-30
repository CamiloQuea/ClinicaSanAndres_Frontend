import React from 'react'
import DataTable, { Alignment } from 'react-data-table-component'
import { CustomStyleTable } from '../Table/CustomStyleTable'



const Table = ({ filteredItems, columns, subHeaderComponentMemo }: any) => {


   return (<>
        <DataTable
            fixedHeader
            title="Pacientes registrados"
            data={filteredItems}
            noHeader={false}
            pagination
            paginationRowsPerPageOptions={[10]}
            subHeader={true}
            subHeaderAlign={Alignment.RIGHT}
            subHeaderComponent={subHeaderComponentMemo}
            highlightOnHover
            pointerOnHover
            striped
            responsive
            columns={columns}
            customStyles={CustomStyleTable}
        />

    </>


    )
}

export default Table