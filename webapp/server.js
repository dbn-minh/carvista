import express from 'express';
import dotenv from 'dotenv';
import { sequelize, models } from './src/config/sequelize.js';
import rootRoutes from './src/routes/rootRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

// Middleware to inject models
app.use((req, res, next) => {
  req.models = models;
  next();
});

// Root Routes
app.use('/api', rootRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));