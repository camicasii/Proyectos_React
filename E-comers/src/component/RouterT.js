import React,{Component} from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Productos from './productos/Productos'
import Nosotros from './Nosotros/Nosotros';
import Error from './Error/Error';
import inforProductos  from '../JSON/datos.json'
import Header from './Header/Header';
import Singleproducto from './SingleProducto';
import Navegacion from './Navegacion/Navegacion';
import Contacto from './Contacto/Contacto';
import { log } from 'util';




class RouterT extends Component {

    state={
        productos:inforProductos,
        terminoBusqueda:""
    }
    
    /* //React recomienda no inicializar estados con este metodo, es mas eficiente
    inicializar de una ves la variable
    componentWillMount(){
        this.setState({
            productos: inforProductos
        })
    }*/
    
    leerDatosProductos=(busqueda)=>{
        if(busqueda.length >3){
            this.setState({
                terminoBusqueda:busqueda
            })
        }else{
            this.setState({
                terminoBusqueda:""
            })
        }
    }

    render() { 
        //console.log(this.state.productos);
        
        
        let productos =this.state.productos;
        //console.log(productos);
        
        let busqueda=this.state.terminoBusqueda;
        let resultado =[];

        //logica para el buscador
/*
        if(busqueda!==''){
            resultado=productos.filter(producto=>{                
                   
                return producto.nombre.toUpperCase().indexOf(busqueda.toUpperCase())!==-1;
                
                

            })
        }
        else resultado=""*/
        
        
        
        
        

        //logica similar pero com mi sudor y esfuerzo  tomando en cuenta que  let productos =this.state.productos;
        //i resultado =[];
        if(busqueda!=='')                
            Object.keys(productos).map(key=>{
                //recuerda que esto productos[key].nombre.toUpperCase().indexOf(busqueda.toUpperCase())
                //da -1 si no encuentra coincidencias y (0/false ) si encuentra coincidencia
                if(!productos[key].nombre.toUpperCase().indexOf(busqueda.toUpperCase()))
                 resultado.push(productos[key]);
                else resultado.push({})})
        else resultado=productos;           
            
        return ( 
            <BrowserRouter>                
                <div className="contenedor">
                    <Header/>  
                    <Navegacion/>                  
                    <Switch>
                    
                        <Route exact path="/contactos" component={Contacto}/>
                        <Route exact path="/nosotros" component={Nosotros}/>
                        {/**  desde una clase Router para pasar informacion a los hijos necesitas 
                        usar la propiedad render como se muestra acontinuacion */}
                        <Route exact path="/" render={()=>(
                            <Productos
                            productos={resultado}
                            leerDatosProductos={this.leerDatosProductos}
                            />
                            
                        )} />

                        <Route exact path="/productos" render={()=>(
                            <Productos
                            productos={resultado}
                            leerDatosProductos={this.leerDatosProductos}
                            />
                            )} />
                            
                        {/**Observa como se coloca el ID para una ruta nueva 
                        *************************************************************************
                        Aqui definimos la pagina de cada producto
                        */}
                        
                        <Route exact path="/productos/:idProducto" render={(props)=>{
                           
                           let idProducto=props.location.pathname.replace("/productos/",'')                                                     
                           
                           if(!this.state.productos[idProducto]) return(<Error/>)
                           
                           return(                               
                               <Singleproducto
                               producto={this.state.productos[idProducto]}
                               />
                           )}} />
                           {/*************************************************************** */}
                           

                        <Route component={Error} />
                    

                    </Switch>   
                </div>
            </BrowserRouter>
         );
    }
}
 
export default RouterT;