module.exports = {
    server: {
        port: process.env.PORT || 8080,
        host: process.env.HOST || 'localhost'
    },
    jwt: {
        secret: 'jAl!±@£!@ghj1702',
        expiresIn: '24h'
    },
    saltRounds: 10
}