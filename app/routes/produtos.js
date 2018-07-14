module.exports = app => {
    app.get('/produtos', (req, res) => {
        console.log('Listando produtos');

        var connection = app.infra.connectionFactory();
        var consultaProdutos = new app.infra.ProdutoDAO(connection);

        consultaProdutos.lista((err, data) => {
            if (err) {
                res.status(404).render('erros/404');
                res.status(500).render('erros/500');
            } else {
                res.render('produtos/lista', {lista: data});
            }
        });
        
    });
}