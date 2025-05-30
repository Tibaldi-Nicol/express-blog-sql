// Importa Express per creare il server
const express = require('express');

// Crea un'istanza dell'app Express (il server)
const app = express();

// Definisce la porta su cui il server sarà in ascolto
const port = 3000;

// Importa il router creato per gestire le rotte /posts
const postRouter = require('./router/posts');  // Assicurati che la cartella si chiami "router" e il file "posts.js"

// Middleware per servire file statici dalla cartella "public"
// Se qualcuno richiede un file che esiste in "public", Express lo invia direttamente
app.use(express.static('public'));

// Middleware integrato di Express che permette di leggere dati JSON dal corpo delle richieste
// Utile per gestire API REST con dati inviati in formato JSON
app.use(express.json());

// Dice all'app di usare il router 'postRouter' per tutte le richieste che iniziano con /posts
// Esempio: GET /posts o GET /posts/5 saranno gestiti dentro router/posts.js
app.use('/posts', postRouter);

// Route per la homepage: quando si accede a "/", risponde con un messaggio
app.get("/", (req, res) => {
    console.log("Server del mio blog"); // Logga in console ogni volta che qualcuno visita la home
    res.send("Benvenuto nel mio blog"); // Risponde al browser/client con un messaggio semplice
});

// Avvia il server sulla porta specificata e stampa un messaggio in console
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
