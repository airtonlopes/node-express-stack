const app = require('../ch03/meadowlark');

// o layout a seguir não tem um arquivo, logo,
// views/no-layout.handlebars deve incluir todo html necessário
app.get('/no-layout', (req, res) => {
    res.render('no-layout', { layout: null });
});