/** @type {import('next').NextConfig} */

const basePath = "portfolio-cv";

const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  // images: {
  //   loader: "custom",
  //   loaderFile: "./src/utils/ImageLoader.js",
  //   unoptimized: true,
  //   path: `${basePath}/_next/image`,
  // },
};

export default nextConfig;
