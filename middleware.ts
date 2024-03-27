import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const {
    state: { isAuthenticated },
  } = request.cookies.get("auth-store")
    ? JSON.parse(request.cookies.get("auth-store")?.value!)
    : {
        state: {
          isAuthenticated: false,
        },
      };

  if (!isAuthenticated && pathname.startsWith("/dashboard")) {
    const response = NextResponse.redirect(new URL(`/`, request.url));
    return response;
  }

  if (
    (isAuthenticated && pathname.startsWith("/login")) ||
    pathname.startsWith("/signup")
  ) {
    const response = NextResponse.redirect(new URL(`/dashboard`, request.url));
    return response;
  }
}
