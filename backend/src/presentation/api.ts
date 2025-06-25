import { Router } from 'express';
import { UserService } from '../usecases/userService';
import { UserRepository } from '../infrastructure/repositories';

const router = Router();
const service = new UserService(new UserRepository());

router.get('/users', (_req, res) => {
  res.json(service.listUsers());
});

router.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: 'name required' });
    return;
  }
  const user = service.createUser(String(name));
  res.status(201).json(user);
});

export default router;
