import mongoose from 'mongoose';

const ChristmasSongSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    youtube: String,
  },
  {
    collection: 'test.songs',
  }
);

const ChristmasSong =
  mongoose.models.ChristmasSong ||
  mongoose.model('ChristmasSong', ChristmasSongSchema);

export default ChristmasSong;
