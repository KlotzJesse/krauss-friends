import { NextRequest, NextResponse } from 'next/server'
import { getBucket } from '../lib/ab-testing'
import { HOME_BUCKETS } from '../lib/buckets'

const COOKIE_NAME = 'bucket'

export function middleware(req: NextRequest) {
  // Get the bucket cookie
  const bucket = req.cookies[COOKIE_NAME] || getBucket(HOME_BUCKETS)
  const url = req.nextUrl;
  if(!url.search.includes("utm_term=Var")) {
    url.searchParams.set("utm_term", "Var " + bucket);
    const res = NextResponse.redirect(url);
  
    // Add the bucket to cookies if it's not there
    if (!req.cookies[COOKIE_NAME]) {
      res.cookie(COOKIE_NAME, bucket)
    }
    return res
  }
  

  return NextResponse.next()
}