const express = require('express');
const ProductsService = require('./../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.use(express.json());


router.get('/', (req, res) => {
    const products = service.find();
    res.status(200).json(products);
});

router.get('/filter', (req, res) => {
    res.send('yo soy un filter');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id);
    res.json( product );
});

router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json({
        message: 'Producto creado exitosamente',
        product: newProduct
    });
});

router.put('/:id', (req, res) => {
   const id = req.params.id;
   const body = req.body; 
   const updateProduct = service.update(id, body);
   if (!updateProduct) {
       return res.status(404).json({ mensaje: 'Producto no encontrado' });
   }
   res.status(200).json({
       message: 'Producto actualizado exitosamente',
       updateProduct
   });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const deletedProduct = service.delete(id);
    if (deletedProduct === -1) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(deletedProduct);
 });

module.exports = router;
