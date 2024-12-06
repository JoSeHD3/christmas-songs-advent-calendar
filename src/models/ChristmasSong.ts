import mongoose from 'mongoose';

const ChristmasSongSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    youtube: String,
  },
  {
    collection: 'songs',
  }
);

export const ChristmasSong =
  mongoose.models.ChristmasSong ||
  mongoose.model('ChristmasSong', ChristmasSongSchema);
