/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qfnoovceiouhuswnsrax.supabase.co",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
