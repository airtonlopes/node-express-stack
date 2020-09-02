const app = require('../ch03/meadowlark');

// o arquivo layout views/layouts/custom.handlebars será usado
app.get('/no-layout', (req, res) => {
    res.render('custom-layout', { layout: 'custom' });
});