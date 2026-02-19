import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/products.js';
import authRoutes from './routes/auth.js';
import orderRoutes from './routes/orders.js';

const app = express();
const PORT = 3001;
const MONGODB_URI = 'mongodb+srv://makss:fKmkpiKDz06d80oy@cluster0.ne5oyfn.mongodb.net/?appName=Cluster0';

// Connect DB
connectDB(MONGODB_URI);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send('ZooMarket API is running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
