const express = require('express');
const app = express();
const posts = require('./data')
const port = 3000;

//Rotta che ritorna un testo semplice
app.get('/', (raq,res) =>{
    res.send('Server del mio blog');
});

//Rotta che restituisce i post in formato JSON
app.get('/bacheca', (req,res) =>{
    res.json({
        posts:posts,
        count:postMessage.length
    });
});

//Avvio del server
app.listen(port, () =>{
    console.log(`Server in esecuzione su http://localhost:${port}`);
});