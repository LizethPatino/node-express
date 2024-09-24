const express = require('express');
const ProductsService = require('./../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.use(express.json());


router.get('/', async (req, res) => {
    const products = await service.find();
    res.status(200).json(products);
});

router.get('/filter', (req, res) => {
    res.send('yo soy un filter');
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json( product );
});

router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({
        message: 'Producto creado exitosamente',
        product: newProduct
    });
});

router.put('/:id', async (req, res) => {
   const id = req.params.id;
   const body = req.body; 
   const updateProduct = await service.update(id, body);
   if (!updateProduct) {
       return res.status(404).json({ mensaje: 'Producto no encontrado' });
   }
   res.status(200).json({
       message: 'Producto actualizado exitosamente',
       updateProduct
   });
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const deletedProduct = await service.delete(id);
    if (deletedProduct === -1) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(deletedProduct);
 });

module.exports = router;
