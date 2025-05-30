// Importa il modulo Express per creare un router
const express = require("express");

// Crea un router (è come un mini-server per gestire rotte specifiche)
const router = express.Router();

// Route per ottenere l'elenco di tutti i post
router.get('/', (req, res) => {
    console.log("Elenco post");       // Stampa in console quando qualcuno chiama questa rotta
    res.send("Elenco dei post");      // Risponde al client con un testo semplice (da sostituire con dati reali)
});

// Route per ottenere il dettaglio di un singolo post, passando l'id come parametro nella URL
router.get('/:id', (req, res) => {
    const postId = req.params.id;     // Prende l'id dalla URL
    console.log(`Post con ID: ${postId}`);  // Logga l'id del post richiesto
    res.send(`Dettaglio del post con ID: ${postId}`);  // Risponde con un testo che indica l'id richiesto
});

// Esporta il router così può essere usato nel file principale
module.exports = router;
