const express = require('express');
const { generateHashtags } =  require('../controllers/hashtags');
const router = express.Router();

router.post('/generate', generateHashtags);

module.exports = router;