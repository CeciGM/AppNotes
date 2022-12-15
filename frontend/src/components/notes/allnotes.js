import React, {useState, useEffect} from "react";
import {useParams,useNavigate } from "react-router-dom";

import Select from 'react-select';

import *  as NotesServer from './notesServer';

const AllNotes = () => {
    // VARIABLES DEL COMPONENTE
       const history = useNavigate();
       const params = useParams();
       
       const [note, setNotes] = useState({})

 // FUNCION PARA OBTENER NUESTRO HEROE
 const getNotes = async () => { 
    try{
        const res = await NotesServer.listNotes();
        const data = await res.json();
        const {id_user, title, description, condition } = data.note;
        setNotes({ id_user, title, description, condition });
    } catch (error){
        console.log(error)

    }
}

useEffect(() => {
    getNotes();
  }, []);
}