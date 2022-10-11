import { useEffect,useState } from "react";
import axios from 'axios';
import CardU from "./cardU";
function CardUser(){
    /*1. Definir url del api, generar peticiones asincronas*/ 
    const url = "https://hoteliakuepa.herokuapp.com/users";

    const getData = async()=>{
        const response = axios.get(url);
        return response;
    }
    
    /**useState para guardar la respuesta de la peticion en un estado*/
    const [list,setList]=useState([]);
    /**useEffect para ejecutar funciones desde el inicio del renderizado */
    useEffect(()=>{
        getData().then((response)=>{ //Promesa
            setList(response.data) //Escribir en el useState list
        })
    },[])
    //console.log(list)
    return(
        <>
            <div className="users">
                { list.map((us,index)=>((
                    <CardU
                    key={index}
                    user={us}/>
                ))  
                )}
            </div>                    
        </>
    );
}

export default CardUser;