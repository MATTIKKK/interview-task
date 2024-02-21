import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoDatabase } from './db';
import getPriceTags from './routers';

const app = express();
const router = express.Router();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());

app.use(router);

getPriceTags(router);

const server = http.createServer(app);

MongoDatabase.initMainDataBaseConnection()
server.listen(8080, () => {
  console.log('Server running on port http://localhost:8080/');
});

