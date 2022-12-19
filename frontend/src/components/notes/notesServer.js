// VAMOS A CONECTARNOS A UNA API
const API_URL1 = 'http://localhost:8000/notescreate/'
const API_URL2 = 'http://localhost:8000/notesnotes/'
const API_URL3 = 'http://localhost:8000/notesdetail-note/'


export const listNotes = async () => {
    return await fetch(API_URL2) ;
    // return "listadode usuarios";
};

// INSERTA UNA NOTA
export const registerNote = async (newNote) => {
    console.log(newNote)
    return await fetch(API_URL1,{
        method: 'POST',
        headers:new Headers({'content-type': 'application/json'}), 
        body: JSON.stringify({
            "user_id": Number(newNote.id_user),
            "title": String(newNote.title),
            "description": String(newNote.description),
            "condition": String(newNote.condition)
        })
    });
};


export const getNoteId = async (noteId) => {
    return await fetch(`${API_URL2}${noteId}`);
};

// ACTUALIZA UN nota
export const updateNote = async (noteid, newNote) => {
    // AQUI DEBEMOS DEFINIR LOS PARAMETOS PARA ENVIAR LOS DATOS AL BACKEND
    return await fetch(`${API_URL3}${noteid}`),{
        // metodos doc: https://www.w3schools.com/tags/ref_httpmethods.asp || doc: https://openjavascript.info/2022/01/03/using-fetch-to-make-get-post-put-and-delete-requests/
        method: 'PUT',
        headers:new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            "user_id": Number(newNote.id_user),
            "title": String(newNote.title),
            "description": String(newNote.description),
            "condition": String(newNote.condition)
        })

    };
};

//ELIMINA nota

export const DeleteNote = async (noteId) => {
    return await fetch(`${API_URL3}${noteId}${'/'}`,{
        method: 'DELETE',
         headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
           },
        
      
    });
    
};


