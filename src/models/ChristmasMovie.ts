import mongoose from 'mongoose';

const ChristmasMovieSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    youtube: String,
  },
  {
    collection: 'movies',
  }
);

export const ChristmasMovie =
  mongoose.models.ChristmasMovie ||
  mongoose.model('ChristmasMovie', ChristmasMovieSchema);
