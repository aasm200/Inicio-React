import React from 'react';
import '../hojas-de-estilo/Testimonio.css';


function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img  className='imagen-testimonio' 
        src={require(`../img/imagen-${props.img}.png`)}
        alt='Imagen Testimonio shawn' />

     <div className='contenedor-texto-textimonio'>
      <p className='nombre-testimonio'><strong> {props.nombre} </strong> en {props.pais}</p>
      <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
      <p className='texto-testimonio'>"{props.testimonio}"</p>
     </div>
    </div>
  );
};


export default Testimonio;