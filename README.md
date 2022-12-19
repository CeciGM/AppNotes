# AppNotes
Este es un repositorio de una App que permite hacer notar rápidas. Es el proyecto final para aprobar el curso de Full Stack Python del Instituto Superior Politécnico Córdoba.

## Consideraciones

No pudimos lograr obtener el user id del response, por lo que cuando cualquier usuario se loguea, le trae todas las notas que hay en la base de datos. 

Los accesos de Sign in y sign up funcionan correctamente.

Las notas se pueden crear y eliminar, modificar esta contemplado a nivel Back (checkeado con postman) pero a nivel front no se logro implementar por falta de tiempo. 

Dependencias del front:
```
* bootstrap@5.2.3
* cors@2.8.5
* react-data-table-component@7.5.3
* react-dom@18.2.0
* react-icons@4.7.1
* react-router-dom@6.4.5
* react-scripts@5.0.1
* react-select@5.7.0
* react@18.2.0
* sweetalert2@11.6.15
* web-vitals@2.1.4
```
## Como correr el proyecto?

#### Base de Datos:
1- Crear base de datos llamada 'appnotes'
2- Considerar si se accede con user y password o sin password, se debe modificar desde el archivo settings.py, en la seccion relacionada a la base de datos. Si no usa password su user root, dejar --> password: '', <-- asi
3- si no desea hacer uso del archivo .sql, puede ubicarse en la carpeta donde se encuentra el archivo manage.py y correr los siguientes comandos para hacer todas las migraciones:
    - python3 manage.py makemigrations
    - python3 manage.py migrate
4- luego de esto ya puede crear usuarios y notas desde el frontend.


#### Backend:
1- Abrir la terminal y situarse dentro de la carpeta Backend
2- ubicar la ruta donde se encuentra el archivo manage.py
3- tomarse el trabajo de descargar todas las dependencias necesarias para que el server levante **(ubicadas en _requierements.txt_)**
4- Luego corremos:
    - python3 manage.py runserver

#### Frontend:
1- Contar con las instalaciones necesarias para poder correr _REACT_
2- Crear un nuevo proyecto haciendo uso del comando **npx create-react-app my-app**
3- luego entrar a la carpeta my-app
4- instalar todas las dependencias y paquetes necesarios para que el server levante
5- correr npm start 
