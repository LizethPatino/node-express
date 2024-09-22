const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.use(express.json());

let contador = 0;

const productsFake = [{"id":3,"name":"Handmade Granite Pizza","price":258,"image":"https://loremflickr.com/901/3665?lock=852744387624490"},{ id:4, "name":"Awesome Wooden Chips","price":21,"image":"https://loremflickr.com/3789/2094?lock=6257640137895280"},{"name":"Oriental Soft Sausages","price":386,"image":"https://picsum.photos/seed/sw6ryhO8o/1855/1714"},{"name":"Ergonomic Fresh Shirt","price":157,"image":"https://loremflickr.com/3580/2857?lock=7308079344348695"},{"name":"Licensed Fresh Ball","price":479,"image":"https://loremflickr.com/3867/194?lock=8030333667705211"}];

router.get('/', (req, res) => {
    const products= [];
    const { size } = req.query;
    const limit = size || 5;
    for (let index = 0; index < limit; index++) {
        products.push(
            {
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price()),
                image: faker.image.url(),
            }
        )
        
    }
    res.status(200).json(products);
});

router.get('/filter', (req, res) => {
    res.send('yo soy un filter');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json( { id, name: 'Ipad', price: 2500 });
});

router.post('/', (req, res) => {

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

router.put('/:id', (req, res) => {
   const id = req.params.id;
   const { name, price } = req.body; 

   const product = productsFake.find(p => p.id === parseInt(id));

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

router.delete('/:id', (req, res) => {
    const id = req.params.id;
   
    const index = productsFake.findIndex(p => p.id === parseInt(id));

    // Verificar si el producto existe
    if (index === -1) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
 
    productsFake.splice(index, 1);
 
    res.status(200).json({
        message: 'Producto eliminado'
    });
 });

module.exports = router;
