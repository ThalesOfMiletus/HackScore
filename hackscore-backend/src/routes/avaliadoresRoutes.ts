import express from 'express';
import { createAvaliadorController, getAllAvaliadoresController, deleteAvaliadorController } from '../controllers/avaliadoresController';

const router = express.Router();

router.post('/', createAvaliadorController);
router.get('/', getAllAvaliadoresController);
router.delete('/:id', deleteAvaliadorController);

export default router;
