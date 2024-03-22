import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request, name: string, email: string, message: string, date: string) {
  try {
    const result =
      await sql`INSERT INTO contact (Name, Email, Message, Date) VALUES (${name}, ${email}, ${message}, ${date}`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}