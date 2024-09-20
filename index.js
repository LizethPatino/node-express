const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

let contador = 0;

//app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola este mi server en express :D wiri');
});

routerApi(app);

/* app.get('/users', (req, res) => {
    const { limit, offset } = req.query;
    if ( limit && offset ) {
        res.json({
            limit,
            offset
        });
    } else {
        res.send('No hay parametros :/');
    }
   
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId  } = req.params;
    res.json( { categoryId, productId });
});

app.post('/products', (req, res) => {

    const { name, price } = req.body;

    if ( !name || !price ) {
        return res.status(400).json({ mensaje: 'Faltan datos: nombre y precio son requeridos' });
    }

    const newProduct = {
        id: contador++,
        name,
        price
    };
    
    res.status(201).json({
        message: 'Producto creado exitosamente',
        product: newProduct
    });
});

app.put('/products/:id', (req, res) => {
   const id = req.params.id;
   const { name, price } = req.body; 

   const product = products.find(p => p.id === parseInt(id));

   if (!product) {
       return res.status(404).json({ mensaje: 'Producto no encontrado' });
   }

   if (name) product.name = name;
   if (price) product.price = price;

   res.status(200).json({
       message: 'Producto actualizado exitosamente',
       product
   });
});

app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
   
    const index = products.findIndex(p => p.id === parseInt(id));

    // Verificar si el producto existe
    if (index === -1) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
 
    products.splice(index, 1);
 
    res.status(200).json({
        message: 'Producto eliminado'
    });
 });*/

app.listen(port, () => {
    console.log(`este es el puerto: ${port}`);
});