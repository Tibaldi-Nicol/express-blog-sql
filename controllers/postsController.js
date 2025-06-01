// Importa la connessione al database
const db = require('../config/db');

// INDEX – restituisce tutti i post
const index = (req, res) => {
    const sql = 'SELECT * FROM posts';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Errore nel recupero dei post:', err);
            return res.status(500).json({ error: 'Errore del server' });
        }
        res.json(results);
    });
};

// SHOW – restituisce un post per ID (Milestone 4)
const show = (req, res) => {
    const postId = req.params.id;
    res.send(`Dettaglio del post con ID: ${postId}`);
};

// DESTROY – elimina un post per ID
const destroy = (req, res) => {
    const postId = req.params.id;
    const sql = 'DELETE FROM posts WHERE id = ?';

    db.query(sql, [postId], (err, result) => {
        if (err) {
            console.error('Errore durante l\'eliminazione:', err);
            return res.status(500).json({ error: 'Errore del server' });
        }

        if (result.affectedRows === 0) {
            // Nessun post trovato con quell'id
            return res.status(404).json({ error: 'Post non trovato' });
        }

        // 204 = No Content = OK ma nessun contenuto nella risposta
        res.status(204).send();
    });
};

// Esporta tutte le funzioni
module.exports = { index, show, destroy };
