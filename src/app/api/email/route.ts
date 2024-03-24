import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request, name: string, email: string, message: string, date: string) {

  try {
    const info = await request.json();

      await sql`INSERT INTO contact (Name, Email, Message, Date) VALUES (${info.name}, ${info.email}, ${info.message}, ${info.date})`;
    return NextResponse.json({ info }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}