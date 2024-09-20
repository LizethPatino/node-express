const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

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
    res.json(products);
});

router.get('/filter', (req, res) => {
    res.send('yo soy un filter');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json( { id, name: 'Ipad', price: 2500 });
});

module.exports = router;
