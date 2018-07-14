module.exports = (app) => {
    app.get('/',(req, res) => {
        res.render('home/index');
        console.log('Home da Casa do Código');
        
    });
}