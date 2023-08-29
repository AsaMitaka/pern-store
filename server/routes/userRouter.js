const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', authMiddleware, UserController.check);

module.exports = router;
