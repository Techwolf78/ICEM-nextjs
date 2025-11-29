/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.youtube.com"],
  },

  // 🔥 Modern Browsers Only — Do NOT transpile for IE/Old Android
  experimental: {
    legacyBrowsers: false,
  },

  // 🔥 Ensure modern minification
  swcMinify: true,
};

export default nextConfig;
