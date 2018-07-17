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
