const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Bem vindo a primeira página do meu servidor')
});

app.get('/sobre', (req, res)=> {
    res.get('essa é a segunda pagina do nosso servidor')
});

app.listen(3000, ()=>{
    console.log('bunda3000')
})