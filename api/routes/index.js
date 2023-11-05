
module.exports = (app) => {
    app.use('/users', require('../modules/users/presenter/routes'));
    app.use('/cursos', require('../modules/cursos/presenter/routes'));
    app.use('/periodos', require('../modules/periodos/presenter/routes'));
    app.use('/menu', require('../modules/menu/presenter/routes'));
    app.use('/qrcode', require('../modules/qrcode/presenter/routes'));
    app.use('/eventos', require('../modules/eventos/presenter/routes'));
    // app.use('/socket', (req, res) => {
    //     //const socket = io('http://localhost:3001');
    //     //deve redirecionar para o socket e abrir a conexão
    //     res.redirect('http://localhost:3001');
         
    // });

}