const express = require('express');
const router = express.Router();

// Challeng1
const { getMessage } = require('../controllers/message');
router.get('/', getMessage);




module.exports = router;

