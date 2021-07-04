const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user_controller.js');

router.post('/register', UserController.signup);
router.post('/login', UserController.login);
router.get('/verify/:id', UserController.verify);

module.exports = router;