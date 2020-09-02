const app = require('../ch03/meadowlark');

// uso básico
app.get('/about', (req, res) => {
    res.render('about');
});