import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Define public routes that don't require authentication
const publicRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/api/auth",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow all auth-related routes to pass through
  if (pathname.startsWith("/api/auth/")) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Allow public routes
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    // If user is authenticated and tries to access public routes,
    // redirect to dashboard
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  // For API routes, return 401 if not authenticated
  if (pathname.startsWith("/api/") && !token) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "Authentication required" }),
      {
        status: 401,
        headers: { "content-type": "application/json" },
      }
    );
  }

  // Check for invalid or expired token
  if (!token) {
    // Store the original URL to redirect back after login
    const loginUrl = new URL("/login", request.url);
    if (!publicRoutes.includes(pathname)) {
      loginUrl.searchParams.set("callbackUrl", pathname);
    }

    // Clear any existing authentication cookies
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("next-auth.session-token");
    response.cookies.delete("next-auth.csrf-token");
    response.cookies.delete("next-auth.callback-url");

    return response;
  }

  // User is authenticated, allow access
  return NextResponse.next();
}

// Configure which routes to protect
export const config = {
  matcher: [
    // Match all routes except static files and api routes that handle their own auth
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
