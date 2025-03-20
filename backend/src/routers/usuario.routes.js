import Routers from 'express';
import { authRequired } from '../middlewares/validateToken.js'
import { validaterSchema } from '../middlewares/validateToken.js'
import { registerSchema, loginSchema } from '../schemas/authSechema.js'

const router = Routers();

router.post('/register', authRequired, validaterSchema(registerSchema));

router.post('/login', authRequired, validaterSchema(loginSchema));

router.get('/logout', authRequired);

router.get('/profile', authRequired);


export default router;