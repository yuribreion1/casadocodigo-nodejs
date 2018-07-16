var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

var client = http.request(configuracoes, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('Body: ' + body);

    });
});

var produto = {
    'ID': 25,
    'NOME': 'Livro de SASS',
    'DESCRICAO': 'Livro legal pacas',
    'VALOR': 40.99
}

client.end(JSON.stringify(produto));