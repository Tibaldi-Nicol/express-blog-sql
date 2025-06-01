// Importa la connessione al database
const db = require('../config/db');

// Funzione che restituisce tutti i post dal database
const index = (req, res) => {
    const sql = 'SELECT * FROM posts';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Errore nel recupero dei post:', err);
            return res.status(500).json({ error: 'Errore del server' });
        }

        res.json(results); // Invia la lista dei post come JSON
    });
};

// Funzione che restituisce un singolo post per ID (questa la useremo dopo nella milestone 4)
const show = (req, res) => {
    const postId = req.params.id;
    console.log(`Post con ID: ${postId}`);
    res.send(`Dettaglio del post con ID: ${postId}`);
};

module.exports = { index, show };
