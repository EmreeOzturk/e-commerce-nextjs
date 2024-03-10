import mongoose from 'mongoose';
const DB_URL = process.env.MONGO_URI!;

if (!DB_URL) {
  throw new Error('Please define the DATABASE_URL environment variable inside .env.local');
}

let cachedMongooseObject = global.mongoose;

// check if we have a connection to the database or if it's currently connected
if (!cachedMongooseObject) {
  cachedMongooseObject = { conn: null, promise: null };
  global.mongoose = cachedMongooseObject;
}

export async function connectDB() {
  console.log(`Connecting to DB: ${DB_URL}`);
  if (cachedMongooseObject.conn) {
    console.log('Using cached connection');
    cachedMongooseObject.conn.connection.readyState;
    return cachedMongooseObject.conn;
  }

  if (!cachedMongooseObject.conn) {
    console.log('Creating new connection');
    const opts = {};

    cachedMongooseObject.promise = mongoose.connect(DB_URL, {
      ...opts,
    });
  }
  cachedMongooseObject.conn = await cachedMongooseObject.promise;
  return cachedMongooseObject.conn;
}

// in development mode we don't need to disconnect from DB
// but in production we need to disconnect from DB

async function disconnectDB() {
  if (process.env.NODE_ENV === 'production') {
    if (cachedMongooseObject.conn) {
      await cachedMongooseObject.conn.disconnect();
      console.log('Disconnected from DB');
    }
  }
}
