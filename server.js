const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 5500;
const db = new sqlite3.Database('database.db');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuração para servir arquivos estáticos da pasta src
app.use(express.static(path.join(__dirname, 'src')));

// Rota para cadastrar um novo usuário
app.post('/cadastro', (req, res) => {
    const { nome, data_nascimento, email, senha, telefone } = req.body;

    db.run('INSERT INTO users (nome, data_nascimento, email, senha, telefone) VALUES (?, ?, ?, ?, ?)', [nome, data_nascimento, email, senha, telefone], (err) => {
        if (err) {
            console.error('Erro ao cadastrar usuário:', err);
            res.status(500).send('Erro ao cadastrar usuário.');
        } else {
            console.log('Usuário cadastrado com sucesso.');
            res.redirect('/login.html');
        }
    });
});

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
