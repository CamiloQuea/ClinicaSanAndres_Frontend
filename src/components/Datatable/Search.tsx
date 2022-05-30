import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal"

interface ISearch {
  filterText: any;
  onFilter: any;
  onClear: any;
  placeHolder: string;
  formChild: any
}

const Search = ({ filterText, onFilter, onClear, placeHolder, formChild }: ISearch) => {

    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    }
return (<>
    {showModal? <Modal handleModal={handleModal} title="Registro de pacientes">
        
        {formChild}
    
    </Modal> : null }
    <div className="flex w-full justify-between">
      <div className="border-2 flex items-center border-slate-200 rounded-lg overflow-hidden">
        <FontAwesomeIcon className="mx-2" icon={faMagnifyingGlass} />
        <input
          value={filterText}
          onChange={onFilter}
          className="focus:outline-none py-2"
          placeholder={placeHolder}
          name={placeHolder.toLowerCase()}
          id="search_input"
        />
        <button
          className="bg-slate-200 h-full border-2  border-slate-200 px-4 text-slate-800 font-semibold"
          onClick={onClear}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div>
          <button className="bg-green-500 py-2 px-4 text-white font-semibold m-1" onClick={()=>{
                handleModal()
          }}> Agregar </button>
      </div>
    </div>
  </>
    
  );
};

export default Search;
