const express = require('express');

const app = express();



app.get('/:id', (req, res)=>{
    const { id } = req.params
    res.send('Peticion Get');
});

app.post('/', (req, res)=>{
    res.send('Peticion POST');
});

app.delete('/', (req, res)=>{
    res.send('Peticion DELETE');
});

app.put('/', (req, res)=>{
    res.send('Peticion PUT');
});


app.listen(3000, ()=>{
    console.log('servidor encendido');
});