/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard', // Matched parameters can be used in the destination
          permanent: true,
        },
      ]
    },
  };
  
  export default nextConfig;
  