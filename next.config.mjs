/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  // basePath: "/portfolio-cv",
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
