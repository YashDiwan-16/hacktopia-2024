const linkedinService = require('../services/linkedinService');
const Token = require('../models/tokenModel');

// Exchange code for access token
exports.getAccessToken = async (req, res) => {
  const { code } = req.body;
  try {
    const accessToken = await linkedinService.getAccessToken(code);
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch posts
exports.getLinkedInPosts = async (req, res) => {
  const { accessToken } = req.query;
  try {
    const posts = await linkedinService.fetchPosts(accessToken);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
