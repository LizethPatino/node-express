const express = require('express');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola este mi server en express :D wiri');
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
/* 

app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId  } = req.params;
    res.json( { categoryId, productId });
});
*/

app.listen(port, () => {
    console.log(`este es el puerto: ${port}`);
});