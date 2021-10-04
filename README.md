# Trilha NodeJS

# Chapter 1: Fundamentos de Node.js



## O que e Node.js?

  Plataforma opensource.
  
  Executa o js ao lado do servidor.

  - Arquitetura Event Loop
 
    o node fica escutando a requisicao
    (requisicao) a funcao chega na callstack 
    distribui para a thread disponivel

  - Single thread
  
    1 Callback que escuta todas as requisiçoes, porem as requisicoes sao enviadas pra diversas threads

  - Non block I/O
    
    consegue executar varias funcoes de forma sincrona, sem esperar que uma requisiçao seja finalziada.
    
    Modulos proprios: http, dns, buffer... sem precisar instalar nada, ja vem no node


  - Gerenciadores de pacotes
    
    NPM E YARN
    
    YARN eh mais rapido
    
    Servem para instaalar bibliotecas externas

  - Frameworks
  
    Express


## O que eh uma API

Aplication Programming Interface ( Interface de Programaçao de aplicativos).

Conjunto de especifiçoes de possiveis interaçoes entre aplicativos.

Exemplo: e-commerce, calcular o frete.
Nao precisa ter o trabaho de calcular distancia e peso.

API dos correios: a documentacao eh importante pois tera as rotas, parametros etc.


## REST

Representation State Transfer ( Transferencia Representacional de Estado )

Nao eh uma linguagem, eh um modelo de arquitetura

REGRAS:
- Client Server

  Servidor != Cliente

- Stateless

  O cliente pode fazer quantas requisiçoes quiser, porem o servidor so armazenara qdo todas as informaçoes necessarias sejam informadas

- Cache

  Precisa disponibilizar suporte para cache

- Interface Uniforme
  
  Cliente e servidor compartilhar a iterface
  
  enderecoservidor.com/produto

- HATEOAS

  Poder retornar links na requisiçao

## Metodos HTTP
  GET - Leitura

  POST - Criaçao

  PUT - Atualizaçao

  DELET - Deletar
  
  PATCH - Atualizaçao parcial


## HTTP Codes
  - 1xx
    
    - Informativo
      a solicitaçao foi aceita ou o processo continua em andamento

  - 2xx 
    
    - Confirmaçao

      200 - Requisiçao bem sucedida

      201 - GEralmente usado para POST apos uma inserçao
    
  - 3xx

    - Redirecionamento

      301 - Moved Permanently

      302 - Moved
  
  - 4xx
    - Erro do cliente

        400 - Bad request

        401 - Unauthorized

        403 - Forbiden

        404 - Not found
        
        422 - Unprocessable Entity

## Tipos de parametros

- Route Params

  Identificar recursos para poder buscar, editar ou deletar.

- Query Params

  Paginaçao, filtros
  courses?page=1&order=asc

- Body Params
  Os objetos de inserçao/alteraçao (json)