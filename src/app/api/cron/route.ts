import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || ''
    const url = baseUrl
      ? (baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`)
      : ''

    const target = url ? `${url}/api/health` : `${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/health`

    const res = await fetch(target, { cache: 'no-store' })
    const ok = res.ok
    const data = ok ? await res.json() : null

    console.log('[cron-health]', { ok, url: target, data })

    return NextResponse.json({ ok, target, data })
  } catch (err) {
    console.error('[cron-health-failed]', (err as Error).message)
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 })
  }
}


