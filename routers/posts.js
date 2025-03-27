const express = require('express');
const router = express.Router();
const posts = require('../data/posts');

// INDEX
router.get('/', (req, res) => {
    // res.send('Lista post');
    res.json(posts);
});

// SHOW
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send('Dettagli post ' + id);
});

// STORE
router.post('/', (req, res) => {
    res.send('Creazione post');
});

// UPDATE
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send('Modifica integrale post ' + id);
});

// MODIFY
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.send('Modifica parziale post ' + id);
});

// DESTROY
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send('Eliminazione post ' + id);
});

module.exports = router;