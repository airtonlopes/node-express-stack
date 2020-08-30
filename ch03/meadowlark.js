const express = require('express');
const handlers = require('./lib/handlers');

const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Configura o view engine Handlebars
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

// Home page
app.get('/', handlers.home);

// About page
app.get('/about', handlers.about);

// Página 404 personalizada
app.use(handlers.notFound);

// Página 500 personalizada
app.use(handlers.serverError);

if (require.main === module)
    app.listen(port, () => console.log(`Express started on http://localost:${port};`
        + `press Ctrl - C to terminate.`));
else
    module.exports = app;