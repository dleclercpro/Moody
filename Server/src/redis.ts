import { createClient } from 'redis';
import { REDIS_HOST, REDIS_PORT, REDIS_PROTOCOL } from './config';

const redis = createClient({
    url: `${REDIS_PROTOCOL}://${REDIS_HOST}:${REDIS_PORT}`,
});



// Error handling
redis.on('error', (err) => {
    console.log(`Redis error: ${err}`);
});



// Start database
await redis.connect();



export default redis;