const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require("./peerProxy.js");

const authCookieName = 'token';

// Service port and other initial configurations
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing and static content hosting
app.use(express.json());
app.use(express.static('public'));

// Initialize database
DB.initializeDB().catch(console.error);

// use cookie parser middleware
app.use(cookieParser());

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});


// DB functions
const mongoDB = {
  getProducts: DB.getProducts,
  placeOrder: DB.placeOrder,
  getOrders: DB.getOrders
  // findUser: DB.findUser
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

// Endpoint to place an order (make sure it's secured)
secureApiRouter.post('/order', async (req, res) => {
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

// // Login Endpoint
// apiRouter.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await mongoDB.findUser(username);

//         if (user && await bcrypt.compare(password, user.passwordHash)) {
//             // successful login
//             res.json({ message: "Login successful", username });
//         } else {
//             // authentication failed
//             res.status(401).json({ message: "Invalid credentials"});
//         }
//     } catch (error) {
//         res.status(500).send('Error during login');
//     }
// });

// Additional user management endpoints i might want to add later
// ...

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.use((_req, res) => {
    res.sendFile('index.html', { root : 'public '});
});

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
