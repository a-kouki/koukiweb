import type { NextConfig } from "next";
//import bundleAnalyzer from "@next/bundle-analyzer";

/*
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
*/

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:true,
  reactCompiler: true,
  compiler:{
    removeConsole:true,
  },
  async rewrites() {
    return [
      {
        source: '/template_2',
        destination: 'https://model-2-orpin.vercel.app/',
      },
      {
        source: '/template_2/:path*',
        destination: 'https://model-2-orpin.vercel.app/:path*',
      },
    ]
  },

};

//export default withBundleAnalyzer(nextConfig);
export default nextConfig;
