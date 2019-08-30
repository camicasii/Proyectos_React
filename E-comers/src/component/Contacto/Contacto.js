import React from 'react';
import './Contacto.css'
const Contacto =()=> {    
    
        return ( 
            <form action="">
                <legend>Formulario de Contacto</legend>
                <div className="input-field">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" placeholder ="Tu Nombre"/>
                </div>
                <div className="input-field">
                    <label htmlFor="">Email: :</label>
                    <input type="email" placeholder ="Tu Email"/>
                </div>
                <div className="input-field">
                    <label htmlFor="">Email: :</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="input-field enviar">
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
         )
    }

 
export default Contacto;