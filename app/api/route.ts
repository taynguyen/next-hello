import { sleep } from "../lib/sleep"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const nStr = searchParams.get('n')
  const n = nStr ? parseInt(nStr) : 0

  // Sleep n secs
  if (n > 0) {
    await sleep(n)
  }

  return Response.json({
    searchParams: Object.fromEntries(searchParams),
  })
}
