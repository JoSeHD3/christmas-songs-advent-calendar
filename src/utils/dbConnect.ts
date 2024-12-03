import mongoose from 'mongoose';

const MONGODB_URI = process.env.DB_URI;

if (!MONGODB_URI) throw new Error('MONGODB_URI not found.');

const dbConnect = async () => {
  const opts = {
    bufferCommands: false,
  };

  try {
    const connection = await mongoose.connect(MONGODB_URI, opts);
    return connection;
  } catch (e) {
    console.error('Failed to connect to db: ', e);
    throw new Error('database connetion error');
  }
};

export default dbConnect;
