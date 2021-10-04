//apenas importando a funçao do express
const express = require('express');
const { v4: uuidv4 } = require("uuid");
const { request, response } = require('express');

const app = express();

app.use(express.json());

//array vazio
const customers = [];

/* 
cpf - string
name - string 
id - uuid
statement []
 */


app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const id = uuidv4();
  
  const customerAlreadyExists = customers.some(
    (customer => customer.cpf === cpf)
  );

  if(customerAlreadyExists) {
    return response.status(400).json({error: "Customer already exists!"});
  }

  //bd fake, inserindo dados no array
  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  //retornando q deu tudo certo
  return response.status(201).send();
});

//funçao listen fala pro express startar a aplicaçao
app.listen(8080);
