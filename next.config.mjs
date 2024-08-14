/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 增加下面这项配置——关闭image自动优化
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
