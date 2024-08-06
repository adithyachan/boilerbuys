import { getFirebaseAuth } from "./auth";

import { NextResponse, NextRequest } from "next/server";

export function handleRequest(request: NextRequest) {
  const auth = getFirebaseAuth();
  const user = auth.currentUser;

  if (
    !user &&
    !(request.nextUrl.pathname == "/") &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/auth")
  ) {
    // no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.rewrite(request.nextUrl);
}
