import express from 'express';
import { createEquipeController, getAllEquipesController, deleteEquipeController } from '../controllers/equipesController';

const router = express.Router();

router.post('/', createEquipeController);
router.get('/', getAllEquipesController);
router.delete('/:id', deleteEquipeController);

export default router;
