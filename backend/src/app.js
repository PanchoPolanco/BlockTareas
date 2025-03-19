import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import routersAuth from './routers/usuario.routes.js';

const app = express();  

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api', routersAuth);

export default app;
