// create simple route to check connection for nextjs 14

import { connectDB } from '../../../lib/db';

export async function GET() {
  try {
    await connectDB();
    return new Response('Connected to DB', { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
