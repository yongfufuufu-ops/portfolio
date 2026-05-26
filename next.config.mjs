import { withContentCollections } from "@content-collections/next";
import { getSiteConfig } from "./site.config.mjs";

/** @type {import('next').NextConfig} */
const { basePath } = getSiteConfig();
const isStaticExport = process.env.BUILD_STATIC === "true";

const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
  output: isStaticExport ? "export" : undefined,
  trailingSlash: isStaticExport,
  images: isStaticExport
    ? {
        unoptimized: true,
      }
    : undefined,
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                {
                  key: "X-Content-Type-Options",
                  value: "nosniff",
                },
                {
                  key: "X-Frame-Options",
                  value: "DENY",
                },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=()",
                },
              ],
            },
          ];
        },
      }),
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
