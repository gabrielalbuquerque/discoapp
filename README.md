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
  
 **Sequelize Migrations**
 
  No diretório "discoapp" executar os comandos:
  ```
  npm install -g sequelize-cli
  node_modules/.bin/sequelize db:migrate
  ```
  
  **Iniciar Servidor**
  
  No diretório "discoapp" executar os comandos:
  ```
  nodemon
  ```
  
  **Angular**
  
  ```
  npm install -g @angular/cli
  ```
  
  No diretório "client" executar os comandos:
   ```
  npm install
  ng serve
  ```
