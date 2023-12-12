const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
let db;

// This will asynchronously test the connection and exit the process if it fails
// (async function testConnection() {
//   await client.connect();
//   await db.command({ ping: 1 });
// })().catch((ex) => {
//   console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//   process.exit(1);
// });

// initialize and connect to MongoDB
async function initializeDB() {
    try {
        await client.connect();
        db = client.db('startup'); // name of database
        console.log("Connected to MongoDB");

        // Perform a simple operation to confirm the connection
        await db.command({ ping: 1 });
        console.log("MongoDB ping successful");

        // set up initial collections, indexes, etc.
        await initializeProducts();
    } catch (ex) {
        console.log(`Unable to connect to database with ${url} because ${ex.message}`);
        process.exit(1);
    }
    
};

// function to initialize products
async function initializeProducts() {
    const products = [
      { name: "Paddleboard", price: 399.99, description: "High-quality paddleboard for all skill levels." },
      { name: "Backpack", price: 69.99, description: "Durable backpack suitable for hiking and travel." }
    ];
  
    const collection = db.collection('products');
  
    // Check if products are already initialized
    const existingProducts = await collection.countDocuments();
    if (existingProducts === 0) {
      await collection.insertMany(products);
      console.log("Products initialized in the database.");
    }
}

// User Authentication Functions
function getUser(email) {
    const userCollection = db.collection('users');
    return userCollection.findOne({ email: email });
  }
  
  function getUserByToken(token) {
    const userCollection = db.collection('users');
    return userCollection.findOne({ token: token });
  }
  
  async function createUser(email, password) {
    const userCollection = db.collection('users');
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
    return user;
}
  

// function to get product names
async function getProducts() {
    const collection = db.collection('products');
    return collection.find({}).toArray();
}

// function to place an order
async function placeOrder(order) {
    const collection = db.collection('orders');
    const result = await collection.insertOne(order);
    return result.ops[0];
}

// Function to get orders
async function getOrders() {
    const collection = db.collection('orders');
    return collection.find({}).toArray();
}

// Function to find user
// async function findUser(username) {
//     const collection = db.collection('users');
//     return collection.findOne({ username });
// }

module.exports = {
    initializeDB,
    getProducts,
    placeOrder,
    getOrders,
    // findUser,
    getUser,
    getUserByToken,
    createUser
};