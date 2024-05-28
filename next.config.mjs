/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  // basePath: "/portfolio-cv",
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./src/utils/ImageLoader.js",
    // unoptimized: true,
  },
};

export default nextConfig;
