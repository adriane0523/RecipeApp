
const express = require('express')

const Ctrl = require('../controllers/controller')

const router = express.Router()

router.post('/item', Ctrl.createItem)
router.get('/item', Ctrl.getItems)

module.exports = router