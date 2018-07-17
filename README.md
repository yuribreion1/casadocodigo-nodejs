# casadocodigo-nodejs
## Aprendizado usado no [curso de Node JS](https://cursos.alura.com.br/course/node-js) da [Alura](https://alura.com.br)

### Como instalar o projeto? 

- **Crie** sua pasta:
```sh
mkdir <your-folder-name>
```
- **Acesse** a pasta que você acabou de criar:
```sh
cd <your-folder-name>
```
- **Instale** as dependencias do projeto
```
npm i casadocodigo-nodejs
```

***

## O que eu aprendi neste treinamento:

* Conhecendo a biblioteca [Express](http://expressjs.com/pt-br/)
  * Instalando a biblioteca `npm i express --save`
  * Carregando ela no projeto `var express = require('express');`
  * Usando ele em uma variável inicializada `var app = require('express')();`

* Trabalhando com [EJS](http://ejs.co/) para paginas dinâmicas
    * Instalação `npm i ejs --save`
    * Definindo como padrão para paginas `app.set('view engine', 'ejs');`
    * Listagem dinâmica de produtos cadastrados

* Conectando a aplicação ao banco de dados relacionado do [IBM Cloud(DashDB)](https://www.ibm.com/analytics/br/pt/technology/data-warehousing/), módulo `ibm_db`
  * Usando VCAP_SERVICES para segurança de dados de conexão
  * Criando prototypes para funções de consulta e inserção no banco

* Otimização do projeto com [Consign](https://www.npmjs.com/package/consign), e organizando carregamento de rotas
  * Instalando o consign `npm i consign --save`

* Usando serviço REST para cadastro massivo de produtos através do `cadastra-livro-terminal.js`
