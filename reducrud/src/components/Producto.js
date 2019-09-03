import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Reduc

import {connect} from 'react-redux';
import {deleteItem} from '../actions/productosActions';

class Producto extends Component {
  
    dItem=()=>{
        const id=this.props.producto.id;
        
        this.props.deleteItem(id);
        
    }
    render() { 
        const{nombre, precio, id}=this.props.producto  
        return ( 
            <li className="list-group-item">
                <div className="row justify-content-between aling-item-center">
                    <div className="col-md-8 d-flex justify-content-between"> 
                    <p className="text-dark m-0">{nombre}</p>
                    <span className="badge badge-warning text-dark">${precio}</span>
                    </div>
                    <div className="col-md-4 justify-content-end acciones "> 
                    <Link to={`productos/editar/${id}`} className="btn btn-primary ml-2 mr-2" >Editar</Link>
                    <button className="btn btn-warning" onClick={this.dItem} >Borrar</button>
                    </div>

                </div>

            </li>
         );
    }
}
 
export default connect(null,{deleteItem})( Producto);