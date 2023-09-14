import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {

  const requestHeader = new Headers(request.headers);
  requestHeader.set("Noticias-Robotize", "Welcome");

  const response = NextResponse.next({
    request: {
      headers: requestHeader,
    },
  });

  // if (request.nextUrl.pathname.endsWith("/horoscopo") && request.nextUrl.pathname.includes("/horoscopo")) {
  //   return NextResponse.redirect(new URL("/home", request.url));
  // }
  if(request.nextUrl.pathname.endsWith('/zodiaco')){
    return NextResponse.redirect(new URL("/horoscopo", request.url));
  }

//   return response;
}
