const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
require('dotenv').config();

// Replace the connection string with your actual MongoDB Atlas connection string
const uri = process.env.MONGODB_CONNECTION_URI;

const client = new MongoClient(uri);

// Connect to MongoDB Atlas
client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');

    // Set up routes
    const chatRoutes = require('./routes/chatRoutes');
    const authRoutes = require('./routes/authRoutes');

    app.use('/api/chats', chatRoutes);
    app.use('/api/auth', authRoutes);

    // Other middleware and configurations

    // Start the server
    app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Handle disconnecting from MongoDB Atlas
process.on('SIGINT', () => {
  client.close()
    .then(() => {
      console.log('Disconnected from MongoDB Atlas');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Error disconnecting from MongoDB Atlas:', error);
      process.exit(1);
    });
});
