const app = require('../ch03/meadowlark');

// Código de resposta diferente de 200
app.get('/error', (req, res) => {
    res.status(500);
    res.render('error');
});

// ou em uma única linha

app.get('/error', (req, res) => res.status(500).render('error'));