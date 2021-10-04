//apenas importando a funçao do express
const { request, response } = require('express');
const express = require ('express');

const app = express();

//Metodos HTTP
app.get("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);  
});

app.post("/courses", (request, response) =>{
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]); 
});

app.put("/courses/:id", (request, response) =>{
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) =>{
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4"]);
});


//funçao listen fala pro express startar a aplicaçao
app.listen(8080);
