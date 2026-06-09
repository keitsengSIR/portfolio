// Vercel deployment update
/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // In modern Next.js, this is a top-level configuration option
  allowedDevOrigins: ['10.245.210.83'],
};

export default nextConfig; // Or module.exports = nextConfig; if using .cjs