const app = require('../ch03/meadowlark');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Processamento de formulário robusto
app.post('/process-contact', (req, res) => {
    try {
        // é aqui que tentaríamos salvar o contato no banco de dados ou em outro
        // mecanismo de persistência...por enquanto, apenas simularemos um erro
        if (req.body.simulateError) throw new Error('erro saving contact!');
        console.log(`contact from ${req.body.name} <${req.body.email}>`);
        res.format({
            'text/html': () => res.redirect(303, '/thank-you'),
            'application/json': () => res.json({ success: true }),
        });
    } catch (err) {
        // aqui manipulariamos qualquer falha na persistência
        console.log(`error processing contact from ${req.body.name} <${req.body.email}>`);
        res.format({
            'text/html': () => res.redirect(303, '/contact-error'),
            'application/json': () => res.status(500).json({
                error: 'error saving contact information'
            })
        });
    }
});