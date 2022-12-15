const API_URL = 'http://localhost:8000/api/auth/register/'



// INSERTA UN HEROE
export const registerUser = async (newUser) => {
    console.log(newUser)
    return await fetch(API_URL,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
         
        body: JSON.stringify({ 
            "email" : String(newUser.email),
            "username" : String(newUser.username),
            "name" : String(newUser.name),
            "last_name" :String(newUser.last_name),
            "password" : String(newUser.password)
        })
        
    });
};
