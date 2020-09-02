const app = require('../ch03/meadowlark');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const tours = [
    { id: 0, name: 'Hood River', price: 99.99 },
    { id: 1, name: 'Oregon Coast', price: 149.95 },
];

//  Endpoint GET retorna JSON, XML ou texto
app.get('/api/tours', (req, res) => {
    const toursXml = '<?xml version="1.0"?><tours>' + tours.map(p =>
        `<tour price="${p.price}" id="${p.id}">${p.name}</tour>`
    ).join('</tours>');

    const toursText = tours.map(p => `${p.id}: ${p.name} (${p.price})
`).join('\n');

    res.format({
        'application/json': () => res.json(tours),
        'application/xml': () => res.type('application/xml').send(toursXml),
        'text/xml': () => res.type('text/xml').send(toursXml),
        'text/plain': () => res.type('text/plain').send(toursXml),
    });
});