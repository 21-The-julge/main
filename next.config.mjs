/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bootcamp-project-api.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /.svg$/i,
      issuer: /.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // next js에서 global.scss 사용하는법
  // 이거 안하면 typeScript 때문에 안되는듯?
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@import "src/styles/globals.scss";`,
  },
};

export default nextConfig;
