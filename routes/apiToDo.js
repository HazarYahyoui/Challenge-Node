const express = require('express');
const router = express.Router();

// Challenge2
const { getAllPosts, createPost, getPost, updatePost, deletePost } = require('../controllers/CrudToDo');

router.get('/', getAllPosts);
router.post('/create', createPost);
router.get('/:Id', getPost);
router.put('/update/:Id', updatePost);
router.delete('/delete/:Id', deletePost);


module.exports = router;