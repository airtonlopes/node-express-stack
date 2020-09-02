const app = require('../ch03/meadowlark');

// Renderizando saída em texto puro
app.get('/custom', (req, res) => {
    res.type('text/plain');
    res.send('this is a test');
});

