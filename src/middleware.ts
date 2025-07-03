import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { PUBLIC_ROUTES, ROUTES_PATH, TOKENS } from './constants';

export function middleware(request: NextRequest) {
  const currentUrl = `${request.nextUrl.pathname}${request.nextUrl.search}`;

  const isPublicRoute = PUBLIC_ROUTES.includes(request.nextUrl.pathname);

  const hasAccessToken = request.cookies.has(TOKENS.ACCESS_TOKEN);

  if (isPublicRoute) {
    if (hasAccessToken) {
      const redirectTo = ROUTES_PATH.DASHBOARD;
      return NextResponse.redirect(new URL(redirectTo, request.url));
    }

    if (currentUrl === ROUTES_PATH.ROOT) {
      const redirectTo = ROUTES_PATH.LOGIN;
      return NextResponse.redirect(new URL(redirectTo, request.url));
    }
  }

  if (!isPublicRoute) {
    if (!hasAccessToken) {
      const redirectTo = ROUTES_PATH.LOGIN;
      return NextResponse.redirect(new URL(redirectTo, request.url));
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon/favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
