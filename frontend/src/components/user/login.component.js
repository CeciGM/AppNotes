import React, { useState } from 'react'
import swal from "sweetalert2";

export default function Login() {
  const[user,setUser]= useState("");
    const[password,setPassword] = useState("");

    const onChangeUser =  (user)=>{
        setUser(user.target.value);
        
    }
    const onChangePas = (password)=>{
    setPassword(password.target.value)};

    
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username : user, password : password })
    };

    const login = async()=>{
        fetch('http://localhost:8000/api/auth/login/',requestOptions)
        .then(response => {if (response.status == 401) {
          swal.fire({
           text: "Datos incorrectos",
           icon: 'error',
          }).then((result) => {
           if (result.isConfirmed) {
               window.location.reload();
               return response.json()
           }})
       }
       if(response.status==200){
         swal.fire({icon: 'success'}
         ).then((result) => {
           if (result.isConfirmed) {
             window.location.replace('/notes');
             return response.json()
           }})
    }})
    
    };
    const handleSubmit= (event)=>{
      event.preventDefault();
      login();

  };
  /**/

    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label htmlFor="username">username</label>
          <input
            type="text"  name='username' id='username'
            className="form-control" 
            placeholder="Enter username"
            onChange={onChangeUser} value ={user} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password" name='password' id='password'
            className="form-control"
            placeholder="Enter password"
            onChange={onChangePas} value={password} required
          />
        </div>
        <div className="d-grid">
          <button type="submit"  className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
  }
