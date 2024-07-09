import express from 'express';
import { createAvaliacaoController, getAllAvaliacoesController, getAvaliacoesByEquipeController, getAvaliacoesByAvaliadorController } from '../controllers/avaliacoesController';

const router = express.Router();

router.post('/', createAvaliacaoController);
router.get('/', getAllAvaliacoesController);
router.get('/equipe/:id', getAvaliacoesByEquipeController);
router.get('/avaliador/:id', getAvaliacoesByAvaliadorController);

export default router;
