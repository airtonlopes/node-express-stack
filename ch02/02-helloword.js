// Servindo recursos estáticos

const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const root = require('path');

function serveStaticFile(res, path, contentType, responseCode = 200) {
    fs.readFile(root.resolve(__dirname, '..', 'public', path), (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Ttpe': 'text/plain charset=utf-8' });
            return res.end('500 - Internal Server Error');
        }
        res.writeHead(responseCode, { 'Content-Type': contentType });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    // Normaliza a url removendo a querystring e a barra final
    // opcional e usando letras minúsculas
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            serveStaticFile(res, 'home.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, 'about.html', 'text/html');
            break;
        case '/img/logo.png':
            serveStaticFile(res, 'img/logo.png', 'image/png');
            break;
        default:
            serveStaticFile(res, '404.html', 'text/html', 404);
            break;
    }
});

server.listen(port, () => console.log(`server started on port ${port}; press Ctrl-C to terminate ...`));