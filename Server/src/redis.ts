import { createClient } from 'redis';
import { REDIS_HOST, REDIS_PORT, REDIS_PROTOCOL } from './config';
import logger from './utils/logger';

const redis = createClient({
    url: `${REDIS_PROTOCOL}://${REDIS_HOST}:${REDIS_PORT}`,
});



// Error handling
redis.on('error', (err) => {
    console.log(`Redis error: ${err}`);
});



// Start database
try {
    redis.connect();
} catch (err: any) {
    logger.error(`Redis error: could not connect!`);
}



export default redis;