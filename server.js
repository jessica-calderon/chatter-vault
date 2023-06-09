const express = require('express');
const mongoose = require('mongoose');
const chatRoutes = require('./routes/chats');
const authRoutes = require('./routes/authRoutes');
const cors = require("cors");

// Enable CORS
app.use(cors());


const app = express();
const port = 3000;

// Set up middleware
app.use(express.json());

// Connect to the MongoDB database
mongoose.connect('MONGODB_CONNECTION_URI', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Use the chat routes
app.use('/chats', chatRoutes);

app.use('/api/auth', authRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port} 🚀`);
});
