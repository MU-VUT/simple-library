/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

export default withPlaiceholder(nextConfig);
