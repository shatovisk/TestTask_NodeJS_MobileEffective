const express = require('express');
const UserController = require('../controllers/personController');
const router = express.Router();

router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.get('/', UserController.getUsers);

module.exports = router;
