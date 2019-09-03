import React, { Component } from 'react';

//redux
import {connect} from 'react-redux';
import {showItem} from '../actions/productosActions'
import {updateItem} from '../actions/productosActions'

class EditarProducto extends Component {
    state = {  
        id:"",
        nombre:"",
        precio:"",
        error:false
    }

    componentDidMount(){
        const {id}=this.props.match.params;
        this.props.showItem(id);
        //console.log(this.props.match.params);    
    }

    /*este componente  del ciclo de vida es usado para saber cuando los props 
    son recibidos por el componente
    esto es bueno porque si recibimos datos de una api o asincronos puede que 
    lleguen despues del renderizado del componente

    */
    componentWillReceiveProps(nextProps,nextState){
        const {nombre, precio,id} = nextProps.producto;
        console.log(nombre);
        this.setState({
            nombre,
            precio ,
            id           
        })
        
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
    UpItem=e=>{
                    e.preventDefault();
                    const {nombre, precio,id}=this.state;
                    if(nombre==="" || precio===""){
                        this.setState({
                            error:true
                        })
                    return;
                    }
                    this.setState({error:false});
            //crear nuevo producto
            const item ={
                id,
                nombre,
                precio:precio,                            
            }


            //enviar producto 
            this.props.updateItem(item);

                //redireccional
               this.props.history.push('/');
        
    }
    render() { 
        const {nombre, precio} = this.state;
        
        const {error}=this.state;
        return ( 
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Agregar Nuevo Producto</h2>
                        <form onSubmit={this.UpItem}>
                            <div className="form-group">
                                <label>Titulo</label>
                                <input onChange={this.nameItem} type="text" className="form-control" placeholder="Titulo"  defaultValue={nombre}/>
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input onChange={this.priceItem} type="number" className="form-control" placeholder="Precio" defaultValue={precio}/>
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

const mapStateToProps = state =>({
    producto:state.productos.producto
})


export default connect(mapStateToProps, {showItem,updateItem})( EditarProducto);