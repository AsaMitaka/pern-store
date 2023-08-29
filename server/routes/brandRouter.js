const express = require('express');
const router = express.Router();
const BrandController = require('../controllers/brand.controller');
const checkRole = require('../middleware/checkRole.middleware');

router.post('/', checkRole('admin'), BrandController.create);
router.get('/', BrandController.getAll);

module.exports = router;
