import { useEffect,useState } from "react";
import axios from 'axios';
function ListUser(){
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
        getData().then((response)=>{
            setList(response.data)
        })
    },[])
    //console.log(list)
    return(
        <><table border="1">
            <tr>
                <th>No. Documento</th>
                <th>Tipo <br/> Documento</th>
                <th>Nombre Apellido</th>
            </tr>
            { list.map((us,index)=>((
                 <tr>
                    <td>{us._id}</td>
                    <td>{us.tipodoc}</td>
                    <td>{us.nombre} {us.apellido}</td>
                </tr> 
             ))
               
            )}
            
        </table></>
    );
}

export default ListUser;