import {SHOW_ITEMS, SHOW_ITEM, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../actions/types';
//import {SHOW_ITEMS} from '../actions/types';
const initialState={
    productos:[]
}


export default function(state=initialState, action){
    switch(action.type){
        case SHOW_ITEMS:
            return{
                ...state,
                productos:action.payload
            }
        case SHOW_ITEM:
        return{
            ...state,
            producto:action.payload
        }    
        case ADD_ITEM:
        return{
            ...state,            
            productos:[...state.productos, action.payload]
            
        }    
        case UPDATE_ITEM:
        return{
            ...state,
            //aca usamos map porque queremos recorrer todo y editar uno de los productos
            //manteniendo el resto igual
            productos:state.productos.map((producto)=>producto.id===  action.payload.id
            ?(producto= action.payload):producto
            
            )
            //map recorre todo, filter recorre todo pero descarta segun una booleano
        }    
        case DELETE_ITEM:
        return{
            ...state,
            //aca usamos filter porque queremos eliminar una de los productos
            productos: state.productos.filter(producto => producto.id !== action.payload )
            
        }    
        //importante agregar siempre esta linea de lo contrario dara un error 
        //porque redux trata de encontrar un state inicial como no hay un defaul nunca se le pasa un state
        //y queda en un bucle infinito
        default:
            return state
    }
}