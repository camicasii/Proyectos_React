import React, { Component } from 'react';

//redux
import {connect} from 'react-redux';
import {addItem} from '../actions/productosActions'
import {showItems} from '../actions/productosActions'
class NuevoProducto extends Component {
    state = {  
        nombre:"",
        precio:"",
        error:false
    }

    componentDidMount(){
        //this.props.showItems();
    }

    nameItem=e=>{
        
        this.setState({
            nombre:e.target.value
        })
        
    }
    priceItem=e=>{
        this.setState({
            precio:e.target.value
        })
        
    }
    newItem=e=>{
        e.preventDefault();
        const {nombre, precio}=this.state;
        
        if(nombre==="" || precio===""){
            this.setState({
                error:true
            })
        return;
        }
        this.setState({error:false});
//crear nuevo producto
const item ={
    nombre:nombre,
    precio:precio,
    id:Date.now()
}


//enviar producto 
this.props.addItem(item);

    //redireccional
    this.props.history.push('/');
        
    }
    render() { 
        const {error}=this.state;
        return ( 
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Agregar Nuevo Producto</h2>
                        <form onSubmit={this.newItem}>
                            <div className="form-group">
                                <label>Titulo</label>
                                <input onChange={this.nameItem} type="text" className="form-control" placeholder="Titulo" />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input onChange={this.priceItem} type="number" className="form-control" placeholder="Precio" />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                        <div>
                            {error ?<div className="font-weight-bold alert alert-danger text-center mt-4"> 
                            Todos los campos son Obligatorios
                            </div> : ""}
                        </div>
    
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}
 
export default connect(null, {addItem,showItems})( NuevoProducto);