#  Loja Interdimensional - O E-commerce Backend

Este projeto se trata de uma loja virtual tematizada de Rick and Morty focado em venda de produtos


Para configurar o projeto você fara um git clone https://github.com/RafaelBrProg/AtividadeFinal.git

Apos isso abra o arquivo e de um npm i pois ele depende do express, mongoose, bcryptjs, jsonwebtoken, cors, dotenv e.s joi.


---

Descrição EndPoints

- ***Pasta Controllers:***

- _controllers/authControlller:_
  - É a parte que controla a criação e login do usuario no site.(Create)
- _cartControlller:_
  - É a parte que controla a criação do carrinho e adicionar os produtos nele com base na id do produto e atualizar o carrinho.(Create, Update, Read e Delete)
- _orderControlller:_
  - É a parte que controla o acesso ao seu carrinho monitorando o seu preço, estoque e criando o pedido.(Create e Read)
- _controllers/productControlller:_
  - É a parte do admin que cria e controla os produtos, com base em id entre outros fatores como nome.(Create, Read, Update e Delete)


- ***Pasta Middleware:***
  - Essa pasta é a parte em que  faz autenticação ele valida e confirma se o usuario é um admin.

  - ***Pasta Models:***
  - Essa pasta é onde fica o codigo que cria os usuarios produtos e as ordens.


  - ***Pasta Routes:***
  - É a parte em que fica as rotas de produtos e autenticação

    - ***Pasta src:***
  - É onde fica os arquivos do site, de onde é coletado para a pagina.
---

