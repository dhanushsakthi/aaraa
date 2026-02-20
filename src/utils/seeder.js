require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Product = require('../models/Product');
const connectDB = require('../config/db');

connectDB();

const seedData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();

        const adminUser = await User.create({
            name: 'Admin User',
            email: 'admin@aaraa.com',
            password: 'password123',
            isAdmin: true,
        });

        const products = [
            {
                name: 'Elegant Brass Diya',
                image: '/images/brass-diya.jpg',
                description: 'Traditional handcrafted brass diya for wedding return gifts.',
                category: 'Wedding Returns',
                price: 450,
                countInStock: 50,
            },
            {
                name: 'Premium Jute Return Gift Bag',
                image: '/images/jute-bag.jpg',
                description: 'Eco-friendly premium jute bags with elegant prints.',
                category: 'Bags',
                price: 120,
                countInStock: 200,
            },
            {
                name: 'Gilded Ladoo Box',
                image: '/images/ladoo-box.jpg',
                description: 'Luxury gold-colored box for sweets and sweets.',
                category: 'Boxes',
                price: 85,
                countInStock: 500,
            },
            {
                name: 'Silver Plated Kumkum Holder',
                image: '/images/kumkum-holder.jpg',
                description: 'Elegant silver-plated holder for traditional ceremonies.',
                category: 'Occasions',
                price: 250,
                countInStock: 100,
            }
        ];

        await Product.insertMany(products);

        console.log('Data Seeded Successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error with seeding: ${error.message}`);
        process.exit(1);
    }
};

seedData();
