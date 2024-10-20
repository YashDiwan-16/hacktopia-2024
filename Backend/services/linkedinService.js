const axios = require('axios');
const Token = require('../models/tokenModel');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require('../config/env');

// Exchange authorization code for access token
async function getAccessToken(code) {
  try {
    const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
      params: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      },
    });

    const { access_token, expires_in } = response.data;

    // Store the token in MongoDB
    const token = new Token({
      accessToken: access_token,
      expiresIn: expires_in,
    });
    await token.save();

    return access_token;
  } catch (error) {
    throw new Error('Failed to get access token');
  }
}

// Fetch LinkedIn posts using access token
async function fetchPosts(accessToken) {
  try {
    const response = await axios.get('https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(urn:li:person:123-abc)', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
}

module.exports = {
  getAccessToken,
  fetchPosts,
};
