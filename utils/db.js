// mongoose connection
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  await client.connect();

  const db = await client.db(process.env.DB_NAME);

  cachedDb = db;

  return db;
}