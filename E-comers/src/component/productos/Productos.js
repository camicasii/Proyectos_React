import React, { Component } from 'react';
import Producto from './Producto';
import './Productos.css'
import Buscador from '../Buscador/Buscador';



class Productos extends Component {
    
    render() { 
        return ( 
            <div className="productos">
            <h2>Nuestros Productos</h2>
            <Buscador
                leerDatos ={this.props.leerDatosProductos}
            />
            <ul className="lista-productos">
            {/**esto se usa frecuente mente para imprimir varias cosas a las ves
            iterando sobre el objeto y luego pasando cada objeto al componenete hijo
            que se encargara de imprimir cada llave */}
                {Object.keys(this.props.productos).map(key=>(
                    
                    <Producto 
                    key={key}
                    inf={this.props.productos[key]}
                    />
                )
                
                )}
            </ul>

            </div>
         );
    }
}
 
export default Productos;