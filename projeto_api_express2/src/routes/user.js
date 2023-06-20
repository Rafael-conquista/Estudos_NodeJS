import { Router } from 'express';
import UserController from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', UserController.index);
router.get('/:id', UserController.show);
// esses dois métodos acima não deveriam existir
router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
