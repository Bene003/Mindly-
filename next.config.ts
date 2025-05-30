/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow cross-origin requests from your development IP
  allowedDevOrigins: [
    'http://192.168.2.12:3000',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  ],
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Since you're using Turbopack, optimize for it
  experimental: {
    // Turbopack is already enabled via --turbopack flag in your dev script
  },
  
  // Image optimization settings (add domains as needed)
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig