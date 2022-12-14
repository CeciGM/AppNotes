const API_URL = 'http://localhost:8000/api/auth/register/'



// INSERTA UN HEROE
export const registerUser = async (newUser) => {
    console.log(newUser)
    return await fetch(API_URL,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        mode: 'no-cors', 
        body: JSON.stringify({ 
            "email" : String(newUser.email).trim(),
            "username" : String(newUser.username).trim,
            "name" : String(newUser.name).trim,
            "last_name" :String(newUser.lastname).trim(),
            "password" : String(newUser.password).trim() 
        })
        
    });
};
