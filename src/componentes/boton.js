import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton (props) {
    const esOperador = (valor) =>{
        if (isNaN(valor) && (valor != '.') && (valor != '=')) {
        return true
        } else {
            return false 
        }
    };

    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador ' : ''}` .trimEnd()}
        onClick={() =>props.manejarclick(props.children)}>
            {props.children}
        </div>
    );

}

export default Boton;