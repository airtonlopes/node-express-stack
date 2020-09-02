const app = require('../ch03/meadowlark');

// Passando um contexto para uma view, incluindovalores de querystring, cookie e sessão
app.get('/greeting', (req, res) => {
    res.render('greeting', {
        message: 'Hello esteemed programer!',
        style: req.query.style,
        userid: req.cookies.userid,
        username: req.session.username,
    });
});