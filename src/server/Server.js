import express from 'express';
import router from './routes/index.js';

import 'dotenv/config';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static('public'));

server.use('/', router);

export { server };
