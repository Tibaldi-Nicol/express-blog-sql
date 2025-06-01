// Importa Express per creare un router
const express = require("express");

// Crea un router, che gestisce rotte specifiche per i post
const router = express.Router();

// Importa le funzioni dal controller che contengono la logica delle risposte
const { index, show } = require('../controllers/postsController');

// Rotta per ottenere la lista di tutti i post
// Quando arriva una richiesta GET su '/posts', esegue la funzione index
router.get('/', index);

// Rotta per ottenere il dettaglio di un post specifico tramite id
// Quando arriva una richiesta GET su '/posts/:id', esegue la funzione show
router.get('/:id', show);

// Esporta il router per poterlo usare nel file principale (app.js)
module.exports = router;
