const express = require('express');
const ProductsService = require('./../services/products.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

const router = express.Router();
const service = new ProductsService();

router.use(express.json());


router.get('/', async (req, res, next) => {
    try {
        const products = await service.find();
        res.status(200).json(products);  
    } catch (error) {
        next(error);
    }
});

router.get('/filter', (req, res) => {
    res.send('yo soy un filter');
});

router.get('/:id', 
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await service.findOne(id);
        if (!product) {
           return res.status(404).json( 'Product not found' );  
        }
        res.status(200).json( product ); 
    } catch (error) {
        next(error);
    }
});

router.post('/', 
    validatorHandler(createProductSchema, 'body'),
    async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({
        message: 'Producto creado exitosamente',
        product: newProduct
    });
});

router.put('/:id', 
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next) => {
   const id = req.params.id;
   const body = req.body; 
   try {
    const updateProduct = await service.update(id, body);
    if (!updateProduct) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json({
        message: 'Producto actualizado exitosamente',
        updateProduct
    });
   } catch (error) {
    next(error);
   } 
});

router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
     const deletedProduct = await service.delete(id);
    if (deletedProduct === -1) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(deletedProduct);
    } catch (error) {
      next(error); 
    }    
 });

module.exports = router;
