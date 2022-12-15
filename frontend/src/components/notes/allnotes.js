import React, {useState, useEffect} from "react";
import DataTable from "react-data-table-component";

import *  as NotesServer from './notesServer';

const AllNotes = () => {
    // VARIABLES DEL COMPONENTE
       
       const [note, setNotes] = useState([])

 // FUNCION PARA OBTENER NUESTRA NOTA
 const getNotes = async () => { 
    try{
        const res = await NotesServer.listNotes();
        const data = await res.json();
        
        setNotes(data);

    } catch (error){
        console.log(error)

    }
}

    useEffect(() => {
        getNotes();
    }, []);


const columns = [
    {
        name: "NOMBRE",
        selector: row => row.title
    },
    {
        name: "DESCRIPCIÓN",
        selector: row => row.description
    },
    {
        name: "ESTADO",
        selector: row => row.condition
    },
];

    const buttons = [
        // { extend: "create", editor: editor },
        { icon: 'edit', tooltip: "Editar Nota", onClick:(event, rowData)=>alert("Va a Editar el Usuario: "+ rowData.id)}
    ];


    return(
        <div className="container">
            <div className="col-md-10 mb-10 my-2">
                <DataTable columns={columns} data={note} buttons={buttons}/>
            </div> 
            <a href="http://localhost:3000/createnotes">
            <button type="submit"  className="btn btn-primary" onclick="createnotes">
                Agregar Nota
            </button>     
            </a>
        </div>
        );
    }
    
export default AllNotes;