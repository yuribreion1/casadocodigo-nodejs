var listaLivros = 'select * from tvz74199.livros';
var insereLivros = 'insert into tvz74199.livros (ID, NOME, DESCRICAO, VALOR) values (?, ?, ?, ?)'

function ProdutoDao(connection) {
    this._connection = connection;
}

ProdutoDao.prototype.lista = function(callback) {
    this._connection.query(listaLivros ,callback);
}

ProdutoDao.prototype.salva = function (produto, callback) {
    this._connection.query(insereLivros, [produto.ID, produto.NOME, produto.DESCRICAO, produto.VALOR], callback);
}

module.exports = function(){
    return ProdutoDao;
};