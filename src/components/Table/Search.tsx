import React, {useState} from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce } from 'react-table'

const Search = ({preGlobalFilteredRows, globalFilter, setGlobalFilter}:any) => {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
        Search:{' '}
        <input
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </span>
  )
}

export default Search