const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const linkedinRoutes = require('./routes/linkedinRoutes');
const { MONGODB_URI } = require('./config/env');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Routes
app.use('/api/linkedin', linkedinRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
