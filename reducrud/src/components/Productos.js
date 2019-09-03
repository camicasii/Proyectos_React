import React, { Component } from 'react';

//Redux
import {connect} from 'react-redux';
import {showItems} from '../actions/productosActions'
import Producto from './Producto';

class Productos extends Component {
    componentDidMount(){        
        this.props.showItems()
        
    }
    comp
    
    
    render() { 
        const { productos } =this.props
        
        if(productos.length===0) return null;
        
        
        return (
            <React.Fragment>
                <h2 className="text-center my-5">Listado de Productos</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul className="list-group">
                            {//colocamos productos.productos porque extrañamente nos axios nos esta retonrnando un objeto esto si usamos 
                            //https://my-json-server.typicode.com/camicasii/Proyectos_React/db
                        /*        productos.productos.map(producto=>(
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))*/
                            
                           productos.map(producto=>(
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))
                            }                    

                        </ul>
                    </div>
                </div>
            </React.Fragment>
          );
    }
}
//state
const mapStateToProps = state=>({
    productos:state.productos.productos/** 
    tener en cuenta que la composicion de este fragmento de codigo viene de la siguiente 
    convencion
    {estate que tendra mi componenete}: {state}.{state del reducer donde esta la funcion}.{state del index.js del reducer}
    */
    
}) 

export default connect(mapStateToProps,{showItems})(Productos);