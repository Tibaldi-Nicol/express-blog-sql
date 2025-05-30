// Importa il modulo Express
const express = require('express');

// Crea un'istanza dell'app Express
const app = express();

// Definisce la porta su cui il server sarà in ascolto
const port = 3000;

/**
 * Middleware per servire file statici dalla cartella "public".
 * Express verifica se il file richiesto esiste nella cartella "public"
 * e lo restituisce senza passare il controllo ai successivi middleware o route.
 */
app.use(express.static('public'));

/**
 * Middleware integrato di Express che analizza i payload JSON.
 * Questo permette di ricevere e elaborare dati JSON dal body della richiesta,
 * utile quando il client invia dati per API REST.
 */
app.use(express.json());


/**
 * Definisce una route per la homepage
 * Quando un client fa una richiesta GET a "/", il server risponde con un messaggio
 */
app.get("/", (req, res) => {
    console.log("Server del mio blog"); // Log nella console ogni volta che questa route viene richiesta
    res.send("Benvenuto nel mio blog"); // Risponde al client
});

/**
 * Avvia il server e lo mette in ascolto sulla porta specificata.
 * La funzione di callback stampa un messaggio nella console
 */
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
