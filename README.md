# iBolacha

Aplicação de coleção de discos utilizando Node.js, Express, MySQL e Angular. 

## Pré-requisitos
1. Node.js e NPM: https://nodejs.org/en/download/
2. MySQL
  
## Configurações

**Banco de Dados**

  Criar banco com o nome "discomanagement"

**Depêndencias**

  No diretório "discoapp" executar os comandos:
  ```
  npm install
  ```
  
 **Migrations**
 
  No diretório "discoapp" executar os comandos:
  ```
  node_modules/.bin/sequelize db:migrate
  ```
  
  **Angular**
  
  No diretório "client" executar os comandos:
  ```
  npm install -g @angular/cli
  ng init
  ng serve
  ```
