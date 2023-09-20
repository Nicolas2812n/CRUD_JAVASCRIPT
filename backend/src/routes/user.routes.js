const { Router } = require('express');

const { 
    createUser,
    readUser, 
    updateUser,
    deleteUser,
    } = require('../controllers/user.controllers');

const router = Router();

router.get('/:id', readUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/', deleteUser);


module.exports = router;