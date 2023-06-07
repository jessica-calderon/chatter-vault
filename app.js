const { MongoClient } = require('mongodb');
require('dotenv').config();

// Replace the connection string with your actual MongoDB Atlas connection string
const uri = process.env.MONGODB_CONNECTION_URI;

const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('<database>');
    const collection = database.collection('<collection>');

    // Perform database operations here

  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

async function disconnect() {
  try {
    await client.close();
    console.log('Disconnected from MongoDB Atlas');
  } catch (error) {
    console.error('Error disconnecting from MongoDB Atlas:', error);
  }
}

connect()
  .then(() => {
    // Call your desired function here to perform database operations
    // Once the operations are done, call disconnect() to close the connection
    // Example:
    // performDatabaseOperations()
    //   .then(() => disconnect())
    //   .catch((error) => console.error('Error performing database operations:', error));
  })
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));
