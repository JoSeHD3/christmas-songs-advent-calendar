import dbConnect from '@/utils/dbConnect';
import { ChristmasMovie } from '@/models';

export async function GET() {
  await dbConnect();

  try {
    const movies = await ChristmasMovie.aggregate([{ $sample: { size: 24 } }]);
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    console.error('Error fetching movies:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch movies' }), {
      status: 500,
    });
  }
}
