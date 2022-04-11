const mongoose = require("mongoose");
const express = require('express');

const port = 3000;
const url = 'mongodb+srv://user:user@cluster0.iybbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(require('./routes/students.route'))
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.get('/', (req, res) => {
    res.json('hello world');
})


app.listen(port, () =>{
    console.log('удачное подключение к серверу')
})

