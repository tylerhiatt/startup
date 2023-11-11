const express = require('express');
const bcrypt = require('bcrypt');
const app = express();


// Service port and other initial configurations
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing and static content hosting
app.use(express.json());
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// MongoDB Placeholder functions:
// use async and promises to mimic database operations
const mongoDB = {
    getProducts: async () => {
        // placeholder for fetching products from MongoDB
        return [];
    },

    placeOrder: async (order) => {
        // placeholder for saving an order to MongoDB
        return order;
    },
    
    getOrders: async () => {
        // placehodler for fetching orders from MongoDB
        return [];
    },

    findUser: async (username) => {
        // placeholder for fetching a user by username in MongoDB
        // should return user data including a hashed password in dictionary form
        return null;
    }
};

// Endpoint to list all products
apiRouter.get('/products', async (_req, res) => {
  try {
    const products = await mongoDB.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send('Error fetching products');
  }

});

// Endpoint to place an order
apiRouter.post('/order', async (req, res) => {
  try {
    const newOrder = req.body; // todo: need to validate the data
    const savedOrder = await mongoDB.placeOrder(newOrder);
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).send('Error placing order');
  }
});

// Endpoint to view all orders
apiRouter.get('/orders', async (_req, res) => {
  try {
    const orders = await mongoDB.getOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).send('Error fetching orders')
  }
});

// Login Endpoint
apiRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await mongoDB.findUser(username);

        if (user && await bcrypt.compare(password, user.passwordHash)) {
            // successful login
            res.json({ message: "Login successful", username });
        } else {
            // authentication failed
            res.status(401).json({ message: "Invalid credentials"});
        }
    } catch (error) {
        res.status(500).send('Error during login');
    }
});


// Additional user management endpoints i want to add later
// ...

app.use((_req, res) => {
    res.sendFile('index.html', { root : 'public '});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
