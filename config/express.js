var express = require('express');
var load = require('express-load');
var logger = require('morgan');

module.exports = () => {
    var app = express();

    app.use(logger('dev'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('infra', {cwd: 'app', verbose: true})
        .then('routes')
        .into(app);

        console.log('Modulo express carregado');
        
        return app;
}