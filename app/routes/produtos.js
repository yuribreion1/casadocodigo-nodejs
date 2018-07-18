module.exports = app => {

    var connection = app.infra.connectionFactory();
    var produtoDAO = new app.infra.ProdutoDAO(connection);

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
        res.render('produtos/form', { validationErrors: {}, produto: {} });
    });

    app.post('/produtos', (req, res) => {

        var produto = req.body;
        console.log(produto);

        var errors = req.validationErrors();
        if (errors) {
            res.format({
                html: () => {
                    res.status(400).render('produtos/form', { validationErrors: errors, produto: produto });
                },
                json: () => {
                    res.status(400).json(errors);
                }
            });

            return;
        }

        produtoDAO.salva(produto, (err, data) => {

            if (!err) {
                res.format({
                    html: () => {
                        res.redirect('/produtos');
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