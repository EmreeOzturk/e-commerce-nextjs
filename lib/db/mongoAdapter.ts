import { MongoClient } from 'mongodb';

if (!process.env.MONGO_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri: string = process.env.MONGO_URI;
let mongoClient: MongoClient;
let mongoClientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).

  let globalWithMongoClientPromise = global.mongoClientPromise;

  if (!globalWithMongoClientPromise._mongoClientPromise) {
    mongoClient = new MongoClient(uri);
    globalWithMongoClientPromise._mongoClientPromise = mongoClient.connect();
  }

  mongoClientPromise = globalWithMongoClientPromise._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  mongoClient = new MongoClient(uri);
  mongoClientPromise = mongoClient.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default mongoClientPromise;
