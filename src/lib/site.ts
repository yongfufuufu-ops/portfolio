import {
  getSiteConfig,
  toAbsoluteUrl,
  withBasePath,
} from "../../site.config.mjs";

export const SITE = getSiteConfig();

export { toAbsoluteUrl, withBasePath };
