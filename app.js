// Importa Express per creare il server
const express = require('express');

// Crea l'app Express, cioè il server
const app = express();

// Definisci la porta su cui il server ascolta (3000)
const port = 3000;

// Importa il router che gestisce le rotte /posts
// Assicurati che la cartella si chiami "routers" e il file "posts.js"
const postRouter = require('./routers/posts');

// Middleware per servire file statici dalla cartella "public"
// Se qualcuno chiede un file statico, Express lo serve senza passare alle rotte
app.use(express.static('public'));

// Middleware per leggere dati JSON dal corpo delle richieste
// Serve per gestire API REST con dati JSON inviati dal client
app.use(express.json());

// Usa il router per tutte le richieste che iniziano con /posts
// Es: GET /posts o GET /posts/1 saranno gestite dentro routers/posts.js
app.use('/posts', postRouter);

// Rotta per la homepage
app.get("/", (req, res) => {
    console.log("Server del mio blog");  // Logga in console ogni volta che qualcuno visita la home
    res.send("Benvenuto nel mio blog");  // Risponde con un messaggio semplice
});

// Avvia il server sulla porta definita e stampa un messaggio in console
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
