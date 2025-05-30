// Funzione che risponde con l'elenco dei post
const index = (req, res) => {
    console.log("Elenco post");         // Logga in console quando la rotta viene chiamata
    res.send("Elenco dei post");        // Risponde al client con un testo semplice (poi metterai la lista reale dal DB)
};

// Funzione che risponde con il dettaglio di un singolo post tramite id
const show = (req, res) => {
    const postId = req.params.id;       // Prende l'id dalla URL (esempio: /posts/5 => id = 5)
    console.log(`Post con ID: ${postId}`);  // Logga l'id richiesto
    res.send(`Dettaglio del post con ID: ${postId}`);  // Risponde con testo semplice, da sostituire con dati reali
};

// Esporta le funzioni per poterle usare nel router
module.exports = { index, show };
