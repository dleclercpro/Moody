import express from 'express';
import { DIR_CLIENT_APP_DIST, SERVER_PROTOCOL, SERVER_HOST, SERVER_PORT } from './config';

const app = express();



// Static files
app.use(express.static(DIR_CLIENT_APP_DIST));



// Root route
app.get('/', (req, res) => {
  res.json({
    'status': 'OK',
  });
});

// Server bundled client app
// app.get('*', (req, res) => {
//   res.sendFile(FILE_CLIENT_APP);
// });



// Start app
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`);
});
