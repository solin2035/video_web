import "@/assets/styles/globals.css";
import "@/assets/styles/common.scss";
import App, { AppProps, AppContext } from "next/app";
import Router from "next/router";
import { NextPageContext } from "next/dist/shared/lib/utils";
import isMobile from "is-mobile";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

function redirect(ctx: NextPageContext, location: string) {
  if (ctx.req) {
    ctx.res?.writeHead(308, { Location: location });
    ctx.res?.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async (context: AppContext) => {
  const { ctx } = context;
  // 是否为移动端（平板电脑不算做移动端）
  const isMobileDevice = isMobile({ ua: ctx.req, tablet: false });
  // 是否为平板电脑终端
  const isTabletDevice =
    !isMobileDevice && isMobile({ ua: ctx.req, tablet: true });
  console.log(`跳转路由的地址`, ctx.pathname);
  if (isMobileDevice && !ctx.pathname.startsWith("/mobile")) {
    redirect(ctx, "/mobile");
  } else if (isTabletDevice && !ctx.pathname.startsWith("/tablet")) {
    redirect(ctx, "/tablet");
  } else if (
    !isMobileDevice &&
    !isTabletDevice &&
    !ctx.pathname.startsWith("/pc")
  ) {
    redirect(ctx, "/pc");
  }
  return {
    ...(await App.getInitialProps(context)), // 必须加上这个，表示透传_app.tsx默认的值
  };
};
