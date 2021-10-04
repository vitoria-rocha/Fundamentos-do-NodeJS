//apenas importando a funçao do express
const { request, response } = require('express');
const express = require ('express');

const app = express();


app.get("/", (request, response) => {
  return response.json({message: "hello world"});  
});

//funçao listen fala pro express startar a aplicaçao
app.listen(8080);
