const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
    {
        name: 'LED Temperature Flask',
        image: '/src/assets/products/flask.png',
        description: 'Premium stainless steel flask with digital temperature display on the lid. Perfect for office and travel.',
        category: 'Utilities',
        price: 999,
        countInStock: 50,
    },
    {
        name: 'Premium Pen & Keychain Set',
        image: '/src/assets/products/pen_set_1.jpg',
        description: 'Elegant black pen and matching keychain set in a luxury gift box. Ideal for corporate gifting.',
        category: 'Corporate Gifts',
        price: 499,
        countInStock: 100,
    },
    {
        name: 'Corporate Gift Notebook Set',
        image: '/src/assets/products/notebook_set.png',
        description: 'Collection of premium notebooks in pastel colors with high-quality paper. Comes with a matching pen.',
        category: 'Organisers',
        price: 1249,
        countInStock: 30,
    },
    {
        name: 'Customized Pen Holder Set',
        image: '/src/assets/products/pen_set_2.png',
        description: 'Sleek pen and keychain set with customizable engraving options. Perfect for personalized return gifts.',
        category: 'Personalized',
        price: 699,
        countInStock: 25,
    },
    {
        name: 'Brass Ganesha Idol',
        image: 'https://www.wedtree.com/cdn/shop/products/brass-ganesha-on-lotus-9-inch-wl5670_large.jpg', // Placeholder for now
        description: 'Traditional handcrafted brass Ganesha idol on a lotus base. Brings prosperity and good luck.',
        category: 'Brass',
        price: 2450,
        countInStock: 15,
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB Atlas...');

        await Product.deleteMany();
        console.log('Old products cleared.');

        await Product.insertMany(products);
        console.log('Sample products seeded successfully!');

        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
