import React from 'react';
import './EmptyTodos.css'

// viene en las props, pero se usa destructuracion para obtener directamente lo que se envio en App.js
function EmptyTodos(){

    return(
      <p>Crea tu primer TODO...</p>
    );
  }

export { EmptyTodos };