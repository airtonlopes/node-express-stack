const app = require('../ch03/meadowlark');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const tours = [
    { id: 0, name: 'Hood River', price: 99.99 },
    { id: 1, name: 'Oregon Coast', price: 149.95 },
];

// Endpoint DELETE para exclusão
app.delete('/api/tour/:id', (req, res) => {
    const idx = tours.findIndex(tour => tour.id === parseInt(req.params.id));
    if (idx < 0) return res.json({ error: 'No such tour exists' });
    tours.splice(idx, 1);
    res.json({ success: true });
})