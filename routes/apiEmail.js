const express = require('express');
const router = express.Router();
const { emailText, emailHtml, emailFichier, emailAttachment  } = require('../controllers/Email');

router.post('/text', emailText);
router.post('/html', emailHtml);
router.post('/fichierhtml', emailFichier);
router.post('/attachment', emailAttachment)
module.exports = router;