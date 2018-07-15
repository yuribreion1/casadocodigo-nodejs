module.exports = app => {

    app.get('/produtos', (req, res) => {
        console.log('Listando produtos');

        var connection = app.infra.connectionFactory();
        var produtoDAO = new app.infra.ProdutoDAO(connection);

        produtoDAO.lista((err, data) => {
            if (err) {
                res.status(404).render('erros/404');
                res.status(500).render('erros/500');
            } else {
                res.render('produtos/lista', { lista: data });
            }
        });
        connection.close();

    });

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form');
    });

    app.post('/produtos/salva', (req, res) => {

        var connection = app.infra.connectionFactory();
        var produtoDAO = new app.infra.ProdutoDAO(connection);

        var produto = req.body;

        produtoDAO.salva(produto, (err, data) => {
            if(err) {
                console.log('===============\n')
                console.log(err);
                console.log('\n===============')
            }
            else console.log(data);

            res.redirect('/');
        });
    });
}