import React from 'react';
import { Link} from 'react-router-dom'


const Producto = (props) => {
    
    const{nombre, id, precio,imagen}=props.inf;
    
    
    if(!nombre) return null;    
    return (
        <li>
        {/**nota que la imagen carga sin problemas por la ubicacion OJO con esta 
        funcionalidad puede dar dolores de cabeza */}
             <img src={`img/${imagen}.png`} alt={nombre}/>
            <p>{nombre} <span>${precio}</span></p>
            {/**en el html la etiqueta Link es interpretada como una etiqueta <a>, 
            por ellos se pueden usar los estilos de bootras para en el className de Link */}
            <Link to={`/productos/${id}`} >Mas informacion</Link>
        </li> 

     );
}
 
export default Producto;
 
