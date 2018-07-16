var express = require('express');
var load = require('express-load');
var logger = require('morgan');
var bodyParser = require('body-parser');

module.exports = () => {
    var app = express();

    app.use(logger('dev'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    load('infra', { cwd: 'app', verbose: true })
        .then('routes')
        .into(app);

    console.log('Modulo express carregado');

    return app;
}