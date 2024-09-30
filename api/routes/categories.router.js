const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
    const categories= [];
    for (let index = 0; index < 4; index++) {
        categories.push(
            {
                name: faker.color.human(),
                description:faker.animal.dog()
            }
        );  
        
    }  
    res.json(categories); 
});

module.exports = router;