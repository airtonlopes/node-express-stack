const app = require('../ch03/meadowlark');

// esse código deve aparecer APÓS todas as suas rotas
app.use((req, res) => {
    res.status(404).render('404');
});