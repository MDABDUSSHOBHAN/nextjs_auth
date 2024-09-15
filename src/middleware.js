import { cookies } from "next/headers";
import { NextResponse } from "next/server";





export function middleware(request){

    const path = request.nextUrl.pathname;
    console.log(path);
    const checkPublicPath = path === "/sign-up" || path === "sign-in";

    const getCookies = cookies();
    const token = getCookies.get("token")?.value || "";
    if(checkPublicPath && token !== ""){

        return NextResponse.redirect(new URL('/',request.nextUrl))
    }
    
    if(!checkPublicPath && token !== ""){

        return NextResponse.redirect(new URL('/sign-in',request.nextUrl))

    }
}

export const config = {
    matcher: ['/sign-in','/sign-up']
}