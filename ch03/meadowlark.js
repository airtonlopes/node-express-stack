const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// Página 404 personalizada
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});


// Página 500 personalizada
app.use((err, req, res, next) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(port, () => console.log(`Express started on http://localost:${port};`
    + `press Ctrl - C to terminate.`));