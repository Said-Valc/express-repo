const {Router} = require('express');

const router = Router();

router.post('/students', (req, res) =>{
    res.json('post')
})

router.delete('/students/:id', (req, res) =>{
    res.json('delete')
})

router.patch('/students/:id', (req, res) => {
    res.json('path');
})