import path from 'path';

export const SERVER_PROTOCOL = 'http';
export const SERVER_HOST = 'localhost';
export const SERVER_PORT = process.env.PORT || 8000;

export const DIR_CLIENT_APP_ROOT = path.join(__dirname, '../../Client');
export const DIR_CLIENT_APP_DIST = path.join(DIR_CLIENT_APP_ROOT, 'dist');

export const FILE_CLIENT_APP = path.join(DIR_CLIENT_APP_DIST, 'index.html');