const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv/config");

app.get('/', (req, res) => {
  return res.json('Hi there server is initialized');
})
// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth.routes');
app.use("/auth", authRoutes);

// Authentication Middleware
const authenticate = require('./middleware/authenticate');
app.use(authenticate);

const userRoutes = require('./routes/user.routes');
app.use("/api/users", userRoutes);

const productRouter = require('./routes/product.routes');
app.use("/api/products", productRouter);

const adminProductRouter = require('./routes/product.admin.routes');
app.use("/api/admin/products", adminProductRouter);

const cartRouter = require('./routes/cart.routes');
app.use("/api/cart", cartRouter);

const cartItemRouter = require('./routes/cartItem.routes');
app.use("/api/cart_items", cartItemRouter);

const orderRouter = require('./routes/order.routes');
app.use("/api/orders", orderRouter);

const adminOrderRouter = require('./routes/adminOrder.routes');
app.use("/api/admin/orders", adminOrderRouter);

const reviewRouter = require('./routes/review.routes');
app.use("/api/reviews", reviewRouter);

const ratingRouter = require('./routes/rating.routes');
app.use("/api/ratings", ratingRouter);

const paymentRouter = require("./routes/payment.routes.js");
app.use('/api/payments', paymentRouter)
// Database Connection
mongoose.connect(process.env.DB_STRING)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Enable CORS for all routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

