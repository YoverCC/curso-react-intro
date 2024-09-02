import React from 'react';
import './TodoSearch.css'

// viene en las props, pero se usa destructuracion para obtener directamente lo que se envio en App.js
function TodoSearch({
  searchValue,
  setSearchValue,
}){

    return(
      <input 
        placeholder="Cortar cebolla" 
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    );
  }

export { TodoSearch };