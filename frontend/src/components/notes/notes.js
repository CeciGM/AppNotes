import React, {useState} from "react";
import {useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useHistory, Navigate , useParams } from "react-router-dom";

// IMPORT Select (componente de react) Instalacion = npm i --save react-select 
import Select from 'react-select';
// DOC: https://react-select.com/home

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// https://react-bootstrap.github.io/getting-started/introduction/

// import { Alert } from 'react-bootstrap/Alert';

// componentes
import *  as NotesServer from './notesServer';

const Notes = () => {
    // VARIABLES DEL COMPONENTE
       const history = useNavigate();
       const params = useParams();

    // HOOK useState
    const initialState = {    
        id_user: 1,   
        title: '',
        description:'',        
        condition: 0
    };

    const [note, setNotes] = useState(initialState);
    
   


    const handleInputChange = (e) => {
          console.log(e);
         console.log(e.target.name);
         console.log(e.target.value);
        setNotes({ ...note,[e.target.name]: e.target.value});
         console.log(note);
    }

    const handleInputSelectCondicion = (e) =>{
         // console.log(e);
        setNotes({ ...note, condition: e.value});
        // console.log(heroe);


    }
    
    // ENVIO DEL FORMULARIO QUE LA DECLARAMOS EN EL onSubmit DEL FORM que enviara el usuario al servidor para grabarlo en la base de datos
    // variable global de respuesta
    var res;
    const handleSubmit = async (e) => {
        console.log(note);
        console.log(" HANDLE SUBMIT:", note.id);
        e.preventDefault();
        // Podemos ver como se crea el nuevo usuario en un json
        //  console.log(usuario);
        try {
          
          if (!params.id) {
            console.log(" ENTRA EN param.id NO EXISTE");
            res = await NotesServer.registerNote(note);
            console.log("RES: ", res);
            const data = await res.json();
            console.log("Data: ",data);
            if (data.id != 0) {
                console.log(" ENTRA EN data.id != 0");
              setNotes(initialState);
            }
          } else {
            res = await NotesServer.updateNote(params.id, note);
          }
           history("/notes");
        } catch (error) {
          console.log(error);
        }
    }


    // RENDER o HTML o RETURN
    const options_notes = [
        { value: '1', label: 'En proceso' },
        { value: '2', label: 'Pendiente' },
        { value: '3', label: 'Finalizada' }

      ]

    return(
        <div className="col-md-10 mx-auto">
            
            <div className="col-md-12 mx-auto">
                <h2 className="mb-12 text-center">Notas</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-8">
                            <label className="form-label col-12" htmlFor="title">Titulo </label>
                            {/* {heroe.nombre} */}
                            <input className="form-control" type='text' name='title' id='title' value={note.title} onChange={handleInputChange}>
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-8">
                            <label className="form-label col-12" htmlFor="description">Descripcion </label>
                            <input className="form-control" type='text' name='description' id='description'  value={note.description} onChange={handleInputChange}>
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-6">
                            <div className="mb-6">
                                <label className="form-label" htmlFor="condition"> Condicion</label>
                                <Select id="condition" name="condition" className="form-control"
                                        onChange={handleInputSelectCondicion}
                                        // onChange={handleInputChange}
                                        classNamePrefix="my-react-select"
                                        options={options_notes} 
                                        />
                            </div>
                        </div>
                    </div>
                    <br>
                    </br>
                    <div className="row">
                        <p>
                            {res}
                        </p>
            
                    </div>
                    <div className="row">
                        <div className="d-grid gap-2">
                        
                        
                            <button type="submit" className="btn btn-block btn-success mb-12" >
                                Register
                            </button>
                      
                        </div> 
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Notes;
