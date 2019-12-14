const mysql = require('mysql');

let conexao = mysql.createPool({
    host: 'localhost',
    user: 'user',
    database: 'galeria-video',
    password: '#Operadoryale10'
});

module.exports = conexao;