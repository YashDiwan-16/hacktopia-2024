const express = require('express');
const linkedinController = require('../controllers/linkedinController');

const router = express.Router();

// Route to get access token
router.post('/getAccessToken', linkedinController.getAccessToken);

// Route to fetch posts
router.get('/getLinkedInPosts', linkedinController.getLinkedInPosts);

module.exports = router;

