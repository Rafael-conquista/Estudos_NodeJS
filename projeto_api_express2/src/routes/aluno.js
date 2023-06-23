import { Router } from 'express';
import alunoController from '../controllers/Aluno';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', alunoController.store);
router.put('/:id', alunoController.update);
router.delete('/:id', alunoController.delete);
router.get('/:id', alunoController.show);

export default router;
