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
        res.render('produtos/form', { errosValidacao: {}, produto: {} });
    });

    app.post('/produtos', (req, res) => {

        var produto = req.body;
        console.log(produto);


        req.assert('Nome do livro', 'Titulo é obrigatório').notEmpty();
        req.assert('Descrição do livro', 'Descrição é obrigatória').notEmpty();

        var erros = req.validationErrors();
        if (erros) {
            res.format({
                html: () => {
                    res.status(400).render('produtos/form', { errosValidacao: erros, produto: produto });
                },
                json: () => {
                    res.status(400).json(erros);
                }
            });

            return;
        }

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