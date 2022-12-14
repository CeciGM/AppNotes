import React, { Component, useState } from 'react'

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
        mode: 'no-cors',
        body: JSON.stringify({mail : user, password : password })
    };

    const login = async()=>{
        fetch('http://localhost:8000/api/auth/login/',requestOptions)
        .then(response => {if (response.status == 400) {
           alert("user not found")
           window.location.reload();
        }else{
            console.log(response.json());
            window.location.replace('/sign-up');
        }})
        
    };
    const handleSubmit= (event)=>{
      event.preventDefault();
      login();

  };
   {
    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={onChangeUser} value ={user} required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={onChangePas} value={password} required
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
          </div>
        </div>
        <div className="d-grid">
          <button type="submit"  className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
  }
}