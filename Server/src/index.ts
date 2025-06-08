import express from 'express';
import cors from 'cors';
import API from './api';
import { SERVER_PROTOCOL, SERVER_HOST, SERVER_PORT, CLIENT_ORIGIN, DIR_CLIENT_STATIC } from './config';

const app = express();



// Enable CORS for client app
app.use(cors({
  origin: CLIENT_ORIGIN,
}));



// Log requests
app.use((req, res, next) => {
    console.log(req.url);

    next();
});



// Root route
app.get('/', (req, res) => {
  res.json({
    'status': 'OK',
  });
});



// Static files
app.use(express.static(DIR_CLIENT_STATIC));



// Serve bundled client app
// app.get('*', (req, res) => {
//   res.sendFile(FILE_CLIENT);
// });



// API
app.use('/api', API);



// Start app
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`);
});
