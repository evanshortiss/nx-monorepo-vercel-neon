import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export const config = {
  runtime: 'nodejs',
};
 
export default function handler(request: NextRequest) {
  return NextResponse.json({
    DATABASE_HOSTNAME: new URL(process.env.DATABASE_URL).hostname,
  });
}
