import React from "react";

const Botonborrar  = (props) => (
    <div className='boton-clear'
    onClick={props.manejarclick}>
        {props.children}
    </div>
);

export default Botonborrar;