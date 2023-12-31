import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
import { StatusCode } from '@/utils/status-codes';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (req.nextUrl.pathname.startsWith('/api/') && !user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: StatusCode.UNAUTHORIZED });
  }

  if (req.nextUrl.pathname.startsWith('/projects') && !user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}
