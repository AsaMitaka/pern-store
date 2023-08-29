const express = require('express');
const router = express.Router();
const DeviceController = require('../controllers/device.controller');
const checkRole = require('../middleware/checkRole.middleware');

router.post('/', checkRole('admin'), DeviceController.create);
router.get('/', DeviceController.getAll);
router.get('/:id', DeviceController.getById);

module.exports = router;
