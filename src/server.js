require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

const staticPath = path.join(__dirname, '../frontend/dist');
console.log('Checking for frontend dist at:', staticPath);

// API Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Debug route to verify deployment
app.get('/api/debug-version', (req, res) => {
    res.json({
        status: 'Aaraa Gift Shop API is running (FIXED v1.0.2)',
        timestamp: new Date()
    });
});

app.get('/api', (req, res) => {
    res.json({ message: 'Aaraa Gift Shop API is operational' });
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

module.exports = app;

