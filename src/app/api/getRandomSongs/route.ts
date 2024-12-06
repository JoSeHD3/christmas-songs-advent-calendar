import dbConnect from '@/utils/dbConnect';
import { ChristmasSong } from '@/models';

export async function GET() {
  await dbConnect();

  try {
    const songs = await ChristmasSong.aggregate([{ $sample: { size: 24 } }]);
    return new Response(JSON.stringify(songs), { status: 200 });
  } catch (error) {
    console.error('Error fetching songs:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch songs' }), {
      status: 500,
    });
  }
}
