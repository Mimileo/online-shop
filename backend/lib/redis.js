import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
    retryStrategy(times) {
        // Reconnect after a delay based on retry attempt count
        const delay = Math.min(times * 50, 2000);
        return delay;
    },
    reconnectOnError(err) {
        // Attempt to reconnect only for specific errors
        if (err.message.includes("READONLY")) {
            return true;
        }
    },
});

redis.on('connect', () => {
    console.log('Redis connected');
});

redis.on('error', (err) => {
    console.error('Redis connection error:', err);
});
