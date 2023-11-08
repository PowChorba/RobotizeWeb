import { NextRequest, NextResponse } from "next/server";
export {default} from 'next-auth/middleware'

// export 

// export async function middleware(request: NextRequest) {

//   const config = {
//     matcher: ['/admin/:path*', '/admin']
//   }

//   const requestHeader = new Headers(request.headers);
//   requestHeader.set("Noticias-Robotize", "Welcome");

//   if(request.nextUrl.pathname.endsWith('/zodiaco')){
//     return NextResponse.redirect(new URL("/horoscopo", request.url));
//   }

//   const response = NextResponse.next();
//   response.headers.set("Noticias-Robotize", "Welcome");
//   return response;

// //   return response;
// }

export const config = {
  matcher: ['/admin/:path*', '/admin']
}

// export async function middleware(request: NextRequest) {

//     if(request.nextUrl.pathname.endsWith('/zodiaco')){
//     return NextResponse.redirect(new URL("/horoscopo", request.url));
//   }
// }
