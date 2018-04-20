const express = require('express');
const app = express();

app.get('/usuario', function(req, res) {
    res.json({
        usuario: 'GetUsuario'
    });
});

app.post('/usuario', function(req, res) {
    let body = req.body;
    res.json({
        person: body
    });
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        UserDeleted: id
    });
});

module.exports = app;