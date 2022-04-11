const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.json('hello world');
})

app.post('/students', (req, res) =>{
    res.json('post')
})

app.delete('/students/:id', (req, res) =>{
    res.json('delete')
})

app.patch('/students/:id', (req, res) => {
    res.json('path');
})
app.listen(port, () =>{
    console.log('удачное подключение к серверу')
})

