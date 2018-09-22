 import http from 'http';
 import bodyParser from 'body-parser';
 import dotenv from 'dotenv';
 import express from 'express';
 import { dbConnect } from './config/db';
 import path from 'path';

 if (process.env.NODE_ENV !== 'production') dotenv.load();

 const app = express();
 const server = http.createServer(app);
 const PORT = process.env.PORT;
 dbConnect();

app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({
   extended: true
 }))
 app.use(express.static(path.join(__dirname, 'public')));


 app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Credentials", "true");
   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
   res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
   next();
 });

server.listen(PORT, () => {
   console.log("Express server listening on port " + PORT);
 });