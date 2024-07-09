import express from 'express';
import avaliadoresRoutes from './avaliadoresRoutes';
import equipesRoutes from './equipesRoutes';
import avaliacoesRoutes from './avaliacoesRoutes';

const router = express.Router();

router.use('/avaliadores', avaliadoresRoutes);
router.use('/equipes', equipesRoutes);
router.use('/avaliacoes', avaliacoesRoutes);

export default router;
