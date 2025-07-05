const express = require('express');
const cors = require('cors');
const { connectTodb, getDb } = require('./Database.js');

const app = express();
app.use(cors());
app.use(express.json());

let db;

// Connect to MongoDB
connectTodb((err) => {
    if (!err) {
        db = getDb();
        console.log('Connected to database');
    } else {
        console.error('Database connection failed:', err);
    }
});

// Add to cart endpoint
app.post('/api/cartitems', async (req, res) => {
    try {
        if (!db) throw new Error('Database not connected');
        
        const { all_products, cartItems } = req.body;
        
        // Validate input
        if (!all_products || !cartItems) {
            return res.status(400).json({ error: 'Missing required data' });
        }

        // Prepare cart items for insertion
        const itemsToInsert = all_products
            .filter(product => cartItems[product.id] > 0)
            .map(product => ({
                productId: product.id,
                name: product.name,
                image: product.image,
                price: product.new_price,
                quantity: cartItems[product.id],
                total: product.new_price * cartItems[product.id],
                createdAt: new Date()
            }));

        // Insert all cart items
        const result = await db.collection('cartitems').insertMany(itemsToInsert);

        res.status(201).json({
            success: true,
            insertedCount: result.insertedCount
        });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'Failed to add items to cart' });
    }
});

app.listen(2002, () => {
    console.log('Server running on http://localhost:2000');
});