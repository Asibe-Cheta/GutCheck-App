import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const entry = {
      level: body.level || 'error',
      message: body.message || 'unknown-error',
      meta: body.meta || null,
      url: body.url || req.headers.get('referer') || null,
      userAgent: req.headers.get('user-agent') || null,
      timestamp: new Date().toISOString(),
    }

    // Log to Vercel function logs
    console.log('[client-log]', JSON.stringify(entry))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[client-log-failed]', (err as Error).message)
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}


