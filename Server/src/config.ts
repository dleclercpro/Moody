import path from 'path';
import { getDirName } from './utils/path';



// Apps
export const SERVER_PROTOCOL = 'http';
export const SERVER_HOST = 'localhost';
export const SERVER_PORT = process.env.PORT || 8000;

export const CLIENT_PROTOCOL = 'http';
export const CLIENT_HOST = 'localhost';
export const CLIENT_PORT = 5173;
export const CLIENT_ORIGIN = `${CLIENT_PROTOCOL}://${CLIENT_HOST}:${CLIENT_PORT}`;

export const REDIS_PROTOCOL = 'redis';
export const REDIS_HOST = 'localhost';
export const REDIS_PORT = 6379;



// Paths
export const DIR_CLIENT_ROOT = path.join(getDirName(), '../../Client');
export const DIR_CLIENT_STATIC = path.join(DIR_CLIENT_ROOT, 'static');
export const DIR_CLIENT_DIST = path.join(DIR_CLIENT_ROOT, 'dist');

export const FILE_CLIENT = path.join(DIR_CLIENT_DIST, 'index.html');