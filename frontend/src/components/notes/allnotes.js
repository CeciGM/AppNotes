import React, {useState, useEffect} from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import *  as NotesServer from './notesServer';

const AllNotes = () => {
    // VARIABLES DEL COMPONENTE
       
       const [note, setNotes] = useState([])
       const [popup,setPop]=useState(false)
       const [delet,setDelet] = useState([])
       const history = useNavigate();
       const handleClickOpen=()=>{
        setPop(!popup)
        }
        const closePopup=()=>{
        setPop(false)
        }
        const onChangeid =  (delet)=>{
            setDelet(delet.target.value);
        }

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


const handleSubmit = async (e) => {
    console.log(delet);
    e.preventDefault();
    try {
        await NotesServer.DeleteNote(delet);
        window.location.replace('/notes');
    } catch (error) {
      console.log(error);
    }
    
}


    useEffect(() => {
        getNotes();
        //delNote();
    }, []);


const columns = [
    {
        name: "ID",
        selector: row => row.id
    },
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
    {
        name: "FECHA INICIO",
        selector: row => row.creation_date
    },
    
];

 


    return(
       
        <div className="container">
            <h2> Bienvenido a sus notas</h2>

            <div className="col-md-10 mb-10 my-2">
                <DataTable columns={columns} data={note} />
            </div> 
            <a href="http://localhost:3000/createnotes">
            <button type="submit"  className="btn btn-primary" onclick="createnotes">
                Agregar Nota
            </button>    
            <button type="submit"  className="btn btn-primary" onclick="createnotes">
                Modificar Nota
            </button> 
            </a>
            
            <button type="submit" onClick={handleClickOpen} className="btn btn-primary" >
                Eliminar Nota
            </button>
            <form onSubmit={handleSubmit}>
                {
                    popup?
                        
                        <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                            <div className="row">
                            <div className="mb-8">
                            <label className="form-label col-12" htmlFor="id_note">Ingrese el id de la nota que quiere eliminar </label>
                            <input className="form-control" type='text' name='id_note' id='id_note' onChange={onChangeid} value ={delet}></input>
                        </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                            Eliminar
                             </button>
                        </div>
                        <h3 onClick={closePopup}>Cerrar</h3>
                        </div>
                        </div>
                        </div>:""
                }
            
            </form>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        );
    
    
    
    
    
    
    
    }
    
export default AllNotes;