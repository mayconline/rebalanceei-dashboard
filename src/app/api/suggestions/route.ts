import { NextResponse } from 'next/server';
import { suggestionsAPI } from '@/services/suggestions';

export async function POST(request: Request) {
  try {
    const { ticket } = await request.json();
    if (!ticket || typeof ticket !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid ticket parameter' },
        { status: 400 }
      );
    }
    const response = await suggestionsAPI.get('/search?', {
      params: { q: ticket },
    });
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      {
        error:
          error.response?.data?.errors?.[0]?.message ||
          'Failed to fetch suggestions',
      },
      { status: error.response?.status || 500 }
    );
  }
}
