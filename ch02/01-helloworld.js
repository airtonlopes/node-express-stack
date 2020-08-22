// Roteamento

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Normaliza a url removendo a queryString e a barra final
    // Opcional e usando letras minúsculas
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Homepage');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('About');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Not Found');
            break;
    }
});

server.listen(port, () => console.log(`Server started on port ${port}; press Ctrl-C to terminate...`));