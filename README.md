# Clon de la página de la página ElPOLONORTE de Wix 


<p>
  Este proyecto surge de manera autodidacta para aprender más sobre los sistemas de autenticación y se compone de:
</p>

<ul>
  <li>Un Back-End de Node.js y Express.js</li>
  <li>Una base de datos MySQL</li>
  <li>Un Front-End de React.js</li>
</ul>


### Requisitos para ejecutar este proyecto

<ol>
  <li>Tener Node.js y npm instalados</li>
  <li>Tener MySQL instalado</li>
</ol>

### Dependencias utilizadas:
#### Back-End:

``` 
"dependencies": {
    "bcrypt": "^5.1.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mysql2": "^3.6.2",
    "nodemailer": "^6.9.6"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.16",
    "dotenv": "^16.3.1",
    "nodemon": "^3.0.1",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5"
  }
```
#### Frond-End:
```
 "dependencies": {
    "axios": "^1.5.1",
    "formik": "^2.4.5",
    "js-cookie": "^3.0.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.11.0",
    "react-router-dom": "^6.17.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "vite": "^4.4.5"
  }
```
### Variables de entorno requeridas:
#### Back-End
```
PORT=""
PASS_DB=""
DB_HOST=""
DB_DATABASE=""
JWT_SECRET=""
PASS_APLICATION=""
EMAIL_NODEMAILER=""
```
#### Front-End
```
VITE_BACKEND_URL="http://localhost:3000/"
```
### Rutas del proyecto
#### Ruta del servidor:

```
Wixpage\server>
```
####Ruta del cliente:
```
Wixpage\client\ELPOLONORTE>
```

### Comandos para ejecutar:


#### Para el servidor:
```
npm install 
npm start
```
#### Para el cliente:
```
npm install 
npm run dev
```
## Prueba
<p>
Puedes probar la API utilizando Postman o Thunder Client y enviando una petición JSON.
</p>
### Ruta: http://localhost:3000/log
```
{
    "user":"Fulano0123@gmail.com",
    "name":"Fulano Pérez",
    "password":"132ksnk"
}
```

### Mandar un Email: http://localhost:3000/email
```
{
 "name":"Fulano", 
 "emial":"Fulano40@gmail.com", 
 "phone":"098409324", 
 "message":"Hola mundo"
}
```
### Para eliminar un usuario: http://localhost:3000/delete
```
{
    "name":"Fulano",
    "password":"4295f"
}
```
### Para usuarios con una sesión: http://localhost:3000/session
```
{
    "user":"Fulano0123@gmail.com",
    "password":"4295f"
}
```
<p>
  El Front-end es más fácil de usar. Solo debes ir a "Inicio" en el menú, lo que te llevará a una ruta que puedes utilizar para iniciar sesión y acceder a una ruta protegida, como "Sales". Para probarlo, solo tienes que escribir en la misma ruta lo siguiente: 
  <strong><i>"http://localhost:5173/Sales"</i></strong>
</p>
