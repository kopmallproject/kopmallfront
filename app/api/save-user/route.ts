// app/api/save-user/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { id, email, name, picture } = await req.json();

    // Handle the received data (e.g., save it to the database)
    console.log({ id, email, name, picture });

    // Return a successful response
    return NextResponse.json({ message: 'User data saved successfully' });
  } catch (error) {
    console.error('Error saving user data:', error);
    return NextResponse.json(
      { message: 'Failed to save user data' },
      { status: 500 }
    );
  }
}
