var app = require('./config/express')();

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
});
