
const express = require('express')

const Ctrl = require('../controllers/controller')

const router = express.Router()

router.post('/item', Ctrl.createItem)
router.put('/item/:id', Ctrl.updateItem)
router.delete('/item/:id', Ctrl.deleteItem)
router.get('/item/:id', Ctrl.getItemById)
router.get('/item', Ctrl.getItems)

module.exports = router