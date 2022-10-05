import express from 'express';
// import 'express-async-errors';
// import httpErrorMiddleware from './middlewares/http.error.middleware';
// import routers from './routers';

const app = express();

app.use(express.json());

export default app;