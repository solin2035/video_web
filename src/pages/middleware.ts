import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import isMobile from "is-mobile";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const url = request.nextUrl.clone();
    const ua = request.headers.get("user-agent") || "";
    const isMobileDevice = isMobile({ ua, tablet: false });
    const isTabletDevice = !isMobileDevice && isMobile({ ua, tablet: true });
    console.log(`页面重定向`,123)
    url.pathname = "/pc";
    if (isMobileDevice) {
        url.pathname = "/mobile";
    } else if (isTabletDevice) {
        url.pathname = "/tablet";
    }
    if (isMobileDevice && !url.pathname.startsWith("/mobile")) {
        return NextResponse.redirect(url);
    } else if (isTabletDevice && !url.pathname.startsWith("/tablet")) {
        return NextResponse.redirect(url);
    } else if (
        !isMobileDevice &&
        !isTabletDevice &&
        !url.pathname.startsWith("/pc")
    ) {
        return NextResponse.redirect(url);
    }
    return response;
}

// 监听指定的一级路由（也可以监听所有/*）
export const config = {
    matcher: ["/", "/pc", "/mobile", "/tablet"],
};