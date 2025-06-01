// Importa mysql2 per connettersi al database
const mysql = require('mysql2');

// Crea una connessione al database
const db = mysql.createConnection({
    host: 'localhost',      // Host del DB
    user: 'root',           // Utente (modifica se usi altro)
    password: '',           // Password (se impostata)
    database: 'blog'        // Nome del database importato
});

// Prova a connettersi e logga il risultato
db.connect((err) => {
    if (err) {
        console.error('Errore di connessione al DB:', err);
        return;
    }
    console.log('Connesso al database MySQL!');
});

// Esporta la connessione per usarla in altri file
module.exports = db;
