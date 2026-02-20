# Aaraa Gift Shop API Documentation

Base URL: `http://localhost:5000`

## Authentication
- **Register**: `POST /api/users` (Body: {name, email, password})
- **Login**: `POST /api/users/login` (Body: {email, password})
- **Profile**: `GET /api/users/profile` (Auth: Bearer Token)

## Products
- **List All**: `GET /api/products` (Query: `keyword`, `category`)
- **Get One**: `GET /api/products/:id`
- **Create**: `POST /api/products` (Auth: Admin Token, Body: {name, price, image, category, countInStock, description})

## Orders
- **Create**: `POST /api/orders` (Auth: Bearer Token, Body: {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice})
- **Get One**: `GET /api/orders/:id` (Auth: Bearer Token)

---

## Getting Started
1. Run `npm install`
2. Configure `.env` with your MongoDB URI
3. Run `node src/server.js` or `npm run dev` (if scripts are added)
