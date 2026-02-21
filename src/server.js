require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Root route to serve frontend index.html
app.get('*', (req, res) => {
    // If request is not an API call, serve index.html
    if (!req.url.startsWith('/api/')) {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    }
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

module.exports = app;

