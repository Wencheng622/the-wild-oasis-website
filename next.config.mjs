/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ownrrjguvkzqbtmltlyn.supabase.co",

        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "dclaevazetcjjkrzczpc.supabase.co",

        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
