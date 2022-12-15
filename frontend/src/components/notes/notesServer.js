// VAMOS A CONECTARNOS A UNA API
const API_URL1 = 'http://localhost:8000/notescreate/'
const API_URL2 = 'http://localhost:8000/notesnotes/'
const API_URL3 = 'http://localhost:8000/notesdetail-note/'


export const listNotes = async () => {
    return await fetch(API_URL2);
    // return "listadode usuarios";
};

// INSERTA UNA NOTA
export const registerNote = async (newNote) => {
    console.log(newNote)
    return await fetch(API_URL1,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        mode: 'no-cors', //
        // headers: [],
        body: JSON.stringify({
            "user_id": String(newNote.user_id).trim(),
            "title": String(newNote.ititle).trim(),
            "description": String(newNote.description),
            "condition": Number(newNote.condition)
        })
    });
};


export const getNoteId = async (noteId) => {
    return await fetch(`${API_URL2}${noteId}`);
};

// ACTUALIZA UN HEROE
export const updateNote = async (noteid, newNote) => {
    // AQUI DEBEMOS DEFINIR LOS PARAMETOS PARA ENVIAR LOS DATOS AL BACKEND
    return await fetch(`${API_URL3}${noteid}`),{
        // metodos doc: https://www.w3schools.com/tags/ref_httpmethods.asp || doc: https://openjavascript.info/2022/01/03/using-fetch-to-make-get-post-put-and-delete-requests/
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": String(newNote.user_id).trim(),
            "title": String(newNote.ititle).trim(),
            "description": String(newNote.description),
            "condition": Number(newNote.condition)
        })

    };
};


