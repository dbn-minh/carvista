import { Router } from 'express';
import userRoutes from './userRoutes.js';
import carRoutes from './carRoutes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/cars', carRoutes);

export default router;