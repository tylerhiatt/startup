const express = require('express');
const app = express();

// Service port and other initial configurations
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing and static content hosting
app.use(express.json());
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Endpoint to list all products
apiRouter.get('/products', (_req, res) => {
  // Implement logic to return all products
});

// Endpoint to place an order
apiRouter.post('/order', (req, res) => {
  // Implement logic to process an order
  // You may also want to update product inventory here
});

// Endpoint to view all orders
apiRouter.get('/orders', (_req, res) => {
  // Implement logic to return all orders
});

// Additional user management endpoints i want to add later
// ...


// Define your product and order handling functions
// ...

app.use((_req, res) => {
    res.sendFile('index.html', { root : 'public '});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
