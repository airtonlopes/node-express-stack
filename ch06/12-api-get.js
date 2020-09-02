const app = require('../ch03/meadowlark');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const tours = [
    { id: 0, name: 'Hood River', price: 99.99 },
    {id:1, name: 'Oregon Coast', price: 149.95},
];

// Endpoint GET simples retornando apenas JSN
app.get('/api/tours', (req, res) => res.json(tours));
