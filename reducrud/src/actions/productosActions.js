import {SHOW_ITEMS, SHOW_ITEM, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from './types';
//import {SHOW_ITEMS }from './types';

import axios from 'axios';
//import { async } from 'q';

const url = 'http://localhost:5001/productos';
//const url ='https://api.myjson.com/bins/dkycj';
const url2 = 'https://my-json-server.typicode.com/camicasii/Proyectos_React/db'
export const showItems=()=>async dispatch =>{
    
    const respuesta =await axios.get(url);

    dispatch({
        type:SHOW_ITEMS,
        payload:respuesta.data
    })
}
export const deleteItem=id=>async dispatch=>{
    
    await axios.delete(url +"/"+ id)
    //await axios.delete(url +"/"+ id)
    
    dispatch({
        type:DELETE_ITEM,
        payload:id
    })
}

export const addItem= item =>async dispatch=>{
    
    
        await axios.post(url,item).then((res)=>{

        if (res.status===201){
            dispatch({
                type:ADD_ITEM,
                payload:res.data
            })
        }})
}
export const updateItem= (item) =>async dispatch=>{    
    
    await axios.put(url+"/"+item.id,item).then((res)=>{

        console.log(res);
        
        if (res.status===200){
            dispatch({
                type:UPDATE_ITEM,
                payload:res.data
            })
    
}})
}

export const showItem= (id) =>async dispatch=>{    
    
    const res = await axios.get(url +"/"+id)
    dispatch({
        type:SHOW_ITEM,
        payload:res.data
    })

}