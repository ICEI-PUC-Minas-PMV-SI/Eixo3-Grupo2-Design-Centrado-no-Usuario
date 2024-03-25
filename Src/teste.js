const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(() => {
    db.all("SELECT * FROM sqlite_master WHERE type='table'", (err, rows) => {
        if (err) {
            console.error('Erro ao acessar o banco de dados:', err);
        } else {
            console.log('Conexão com o banco de dados SQLite estabelecida com sucesso.');
        }
    });
});

db.close();
