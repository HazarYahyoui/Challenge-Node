const express = require('express');
const router = express.Router();

// Challenge3
const { getAllUsers, createUser, getUser, updateUser, deleteUser, affecteUser, supprimeUser  } = require('../controllers/CrudUser');

router.get('/', getAllUsers);
router.post('/createUser', createUser);
router.get('/:Id', getUser);
router.put('/updateUser/:Id', updateUser);
router.delete('/deleteUser/:Id', deleteUser);
router.put('/affecte/:IdUser/:IdToDo', affecteUser);
router.put('/supprime/:IdUser/:IdToDo', supprimeUser )

module.exports = router;