import React from "react";
import '../hojas-de-estilo/boton-clear.css';

const Botonclear = (props) => (
    <div className='boton-clear'
    onClick={ props.manejarclick}>
        {props.children}
    </div>
);

export default Botonclear;