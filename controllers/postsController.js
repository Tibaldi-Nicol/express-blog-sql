// Importa la connessione al database MySQL configurata in ../config/db.js
const db = require('../config/db');

// Funzione che restituisce l'elenco di tutti i post dal DB
const index = (req, res) => {
    const sql = 'SELECT * FROM posts';            // Query SQL per prendere tutti i post
    db.query(sql, (err, results) => {             // Esegue la query sul DB
        if (err) {
            console.error('Errore nel recupero dei post:', err);
            return res.status(500).json({ error: 'Errore del server' });  // Risposta in caso di errore DB
        }
        res.json(results);                         // Invia la lista dei post in formato JSON al client
    });
};

// Funzione che restituisce un singolo post dato l'id (SHOW)
const show = (req, res) => {
    const postId = req.params.id;                  // Prende l'id dalla URL (es. /posts/5 -> id=5)
    const sql = 'SELECT * FROM posts WHERE id = ?'; // Query per trovare il post con quell'id
    db.query(sql, [postId], (err, results) => {   // Esegue la query con id come parametro per evitare SQL injection
        if (err) {
            console.error('Errore nel recupero del post:', err);
            return res.status(500).json({ error: 'Errore del server' }); // Errore server
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Post non trovato' }); // Se post non trovato
        }
        res.json(results[0]);                       // Invia il singolo post trovato in formato JSON
    });
};

// Funzione per eliminare un post dal DB dato l'id (DESTROY)
const destroy = (req, res) => {
    const postId = req.params.id;                  // Prende l'id dalla URL (es. /posts/5 -> id=5)
    const sql = 'DELETE FROM posts WHERE id = ?'; // Query per eliminare il post con quell'id
    db.query(sql, [postId], (err, result) => {    // Esegue la query con id
        if (err) {
            console.error('Errore nell\'eliminazione del post:', err);
            return res.status(500).json({ error: 'Errore del server' }); // Errore server
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Post non trovato' }); // Se nessun post eliminato, id non esiste
        }
        res.status(204).send();                     // Risposta 204 No Content se eliminato con successo
    });
};

// Esporta le funzioni per essere usate nel router
module.exports = { index, show, destroy };
