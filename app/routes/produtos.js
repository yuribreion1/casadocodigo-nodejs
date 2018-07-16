module.exports = app => {

    app.get('/produtos', (req, res) => {
        console.log('Listando produtos');

        var connection = app.infra.connectionFactory();
        var produtoDAO = new app.infra.ProdutoDAO(connection);

        produtoDAO.lista((err, data) => {
            if (!err) {
                res.format({
                    html: () => {
                        res.render('produtos/lista', { lista: data });
                    },
                    json: () => {
                        res.json(data);
                    }
                });
            } else {
                console.log(err);
            }

        });
        connection.close();

    });

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form');
    });

    app.post('/produtos', (req, res) => {

        var connection = app.infra.connectionFactory();
        var produtoDAO = new app.infra.ProdutoDAO(connection);

        var produto = req.body;

        produtoDAO.salva(produto, (err, data) => {
            if (!err) {
                res.format({
                    html: () => {
                        res.render('produtos/lista', { lista: data });
                    },
                    json: () => {
                        res.json(data);
                    }
                });
            } else {
                console.log(err);
            }
        });
        connection.close();
    });
}