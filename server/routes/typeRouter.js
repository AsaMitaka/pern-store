const express = require('express');
const router = express.Router();
const TypeController = require('../controllers/type.controller');
const checkRole = require('../middleware/checkRole.middleware');

router.post('/', checkRole('ADMIN'), TypeController.create);
router.get('/', TypeController.getAll);

module.exports = router;
