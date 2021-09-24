const express = require("express");
const server = express();
const fs = require("fs");

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

server.listen(8080, () => {
    console.log("Server is runnig on port " + 8080);
});

// HTTP Methods

//Get -> lecturas
//Post -> crear un nuevo recurso
//Put -> reemplazar un recurso existente
//Patch -> remmplazar la parte de un recurso existente
//Delete -> remover un recurso

//Home
server.get('/', (res, req) => {
    res.rawListeners(home);
});
//About
server.get('/about', (res, req) => {
    res.rawListeners(about);
});



