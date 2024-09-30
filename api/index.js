const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

const whitelist = ['http://localhost:8080','http://localhost:3000', 'https://myapp.co'];
const options = {
    origin: (origin, callback) => {
        if(whitelist.includes(origin) || !origin){
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}

app.use(cors(options));

app.get('/api', (req, res) => {
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
