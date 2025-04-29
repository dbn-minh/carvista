import { Router } from 'express';
import * as CarController from '../controllers/carControllers.js';

const router = Router();

router.get('/', CarController.getAllCars);
router.get('/:id', CarController.getCarById);
router.post('/', CarController.createCar);
router.put('/:id', CarController.updateCar);
router.delete('/:id', CarController.deleteCar);

export default router;