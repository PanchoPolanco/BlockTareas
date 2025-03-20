import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validater.middleware.js'
import { registerSchema, loginSchema } from '../schemas/authSechema.js'
import { login, logout, profile, register } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', authRequired, validateSchema(registerSchema), register);

router.post('/login', authRequired, validateSchema(loginSchema), login);

router.get('/logout', authRequired, logout);

router.get('/profile', authRequired, profile);


export default router;