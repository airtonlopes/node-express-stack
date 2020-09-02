const app = require("../ch03/meadowlark");

const app = require('../ch03/meadowlark');

// esse código deve aparecer APÒS todas as suas rotas mesmo
// se você não precisar de "next", ele deve ser incluído
// para o Express reconhecer que esse é um manipulador de erro
app.use((err, req, res, next) => {
    console.log(`** SERVER ERROR ${err.message}`);
    res.status(500).render('08-error', { message: "you shouldn't have clicked that!" });
});