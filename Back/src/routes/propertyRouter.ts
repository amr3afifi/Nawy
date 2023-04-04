const express = require('express')
const propertyController = require('../controllers/propertyController')
const router = new express.Router()

router.get('/properties', propertyController.getAllProperties);
router.get('/property/:id', propertyController.getProperty);
router.delete('/property/:id', propertyController.deleteProperty);
router.post('/property', propertyController.addProperty);
router.put('/property/:id', propertyController.editProperty);

module.exports=router
