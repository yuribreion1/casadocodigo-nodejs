var sql = 'select * from tvz74199.livros';

function ProdutoDao(connection) {
    this._connection = connection;
}

ProdutoDao.prototype.lista = function(callback) {
    this._connection.query(sql ,callback);
}

module.exports = function(){
    return ProdutoDao;
};