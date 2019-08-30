import React from 'react';
import './Navigation.css'
import { NavLink} from 'react-router-dom'
const Navegacion = () => {
    return ( 
        <nav className="navegacion">
            <NavLink to='/nosotros' activeClassName="activo" >Nosotros</NavLink>
            <NavLink to='/productos' activeClassName="activo">Productos</NavLink>
            <NavLink to='/contactos' activeClassName="activo">Contactos</NavLink>

        </nav>
     );
}
 
export default Navegacion;