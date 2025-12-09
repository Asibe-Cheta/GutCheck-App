import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  // Basic health information; extend as needed (e.g., upstream checks)
  return NextResponse.json({
    status: 'ok',
    region: process.env.VERCEL_REGION || 'unknown',
    timestamp: new Date().toISOString(),
  })
}


