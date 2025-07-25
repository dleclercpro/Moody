import express from 'express';
import cors from 'cors';
import API from './api';
import { SERVER_ORIGIN, SERVER_PORT, CLIENT_ORIGIN, DIR_CLIENT_STATIC } from './config';
import logging from './middleware/logging';
import logger from './utils/logger';
import ErrorRequestHandler from './errors/ErrorRequestHandler';



const app = express();



// Enable CORS for client app
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());
app.use(logging);



// Static files
app.use(express.static(DIR_CLIENT_STATIC));



// Serve bundled client app
// app.get('*', (req, res) => {
//   res.sendFile(FILE_CLIENT);
// });



// API
app.use('/api', API);



// Error-handling
app.use(ErrorRequestHandler);



// Start app
export const server = app.listen(SERVER_PORT, () => {
  logger.info(`Server listening on ${SERVER_ORIGIN}`);
});



export default app;