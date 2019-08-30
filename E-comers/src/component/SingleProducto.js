import React from 'react';
import '../css/SingleProducto.css'
const Singleproducto = (props) => {
    const{nombre, precio,imagen,descripcion}= props.producto    
   
    
    return ( 
        <div className="info-producto">
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre}/>   
            </div>
            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">${precio}</p>
                <p>{descripcion}</p>
            </div>
        </div>
     );
}
 
export default Singleproducto;