import React, { Component } from 'react';
import  "./Buscador.css";
class Buscador extends Component {
    
    leerDatos = (e) =>{
        const termino = e.target.value;

        this.props.leerDatos(termino);
        
    }
    render() { 
        return (  
            <div className="buscador">
                <input type="text" placeholder="Buscador" onChange ={this.leerDatos} />
            </div>
        );
    }
}
 
export default Buscador;