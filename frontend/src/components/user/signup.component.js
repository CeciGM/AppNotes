import React, {useState, useEffect, set} from "react";
import {useParams,useNavigate } from "react-router-dom";


// IMPORT Select (componente de react) Instalacion = npm i --save react-select 
import Select from 'react-select';
// DOC: https://react-select.com/home

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// https://react-bootstrap.github.io/getting-started/introduction/

// import { Alert } from 'react-bootstrap/Alert';

// componentes
import *  as UsersServer from './userServer';

const SignUser = () => {
    // VARIABLES DEL COMPONENTE
       const history = useNavigate();
       const params = useParams();

    // HOOK useState
    const initialState = {    
      email: '',
      username: '',
      name:'',
      last_name:'',
      password: ''
    };

    const [user, setUser] = useState(initialState);
    
    const handleInputChange = (e) => {
      //console.log(e);
       //console.log(e.target.name);
       //console.log(e.target.value);
      setUser({...user,[e.target.name]:e.target.value});
       console.log(user);
      
  }

    // ENVIO DEL FORMULARIO QUE LA DECLARAMOS EN EL onSubmit DEL FORM que enviara el usuario al servidor para grabarlo en la base de datos
    // variable global de respuesta
    var res;
    const handleSubmit = async (e) => {
        console.log(user);
        e.preventDefault();
        try {
            res = await UsersServer.registerUser(user);
            console.log("RES: ", res);
            const data = await res.json();
            console.log("Data: ",data);
            if (data != 0) {
              console.log(" ENTRA EN data.id != 0");
              setUser(initialState);
            }
           history("/");
        } catch (error) {
          console.log(error);
        }
    }
   

  {
    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={user.email}  onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            className="form-control"
            type="text" name="nombre"
            placeholder="First name"
            value={user.username} onChange={handleInputChange} 
          />
        </div>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={user.name} onChange={handleInputChange} 
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" 
          className="form-control" 
          placeholder="Last name"
          value={user.last_name} onChange={handleInputChange}  />
        </div>
       
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={user.password} onChange={handleInputChange} 
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
};
export default SignUser;