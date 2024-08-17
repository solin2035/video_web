/** @type {import('next').NextConfig} */
import path from "path";
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table",
    "xgplayer",
    "react-infinite-scroll-component",
  ],
  sassOptions: {
    includePaths: [path.join("./", "src/assets/styles")],
  },
  // 增加下面这项配置——关闭image自动优化
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
