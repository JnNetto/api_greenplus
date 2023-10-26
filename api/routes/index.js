
module.exports = (app) => {
    app.use('/users', require('../modules/users/presenter/routes'));
    // app.use('/socket', (req, res) => {
    //     //const socket = io('http://localhost:3001');
    //     //deve redirecionar para o socket e abrir a conexão
    //     res.redirect('http://localhost:3001');
         
    // });

}