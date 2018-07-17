var express = require('express');
var consign = require('consign');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = () => {
    var app = express();

    app.use(logger('dev'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(expressValidator());
    
    consign( 
        {   cwd: 'app', 
            verbose: true,
            locale: 'pt-br',
            logger: console
         })
        .include('infra')
        .then('routes')
        .into(app);

    console.log('Modulo express carregado');

    return app;
}