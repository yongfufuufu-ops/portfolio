/**
 * @typedef {{
 *   origin: string;
 *   basePath: string;
 *   repositoryName: string | null;
 *   owner: string | null;
 *   isUserSite: boolean;
 *   url: string;
 * }} SiteConfig
 */

/**
 * @param {string | undefined | null} value
 */
function normalizeOrigin(value) {
  if (!value) {
    return "http://localhost:3000";
  }

  return value.replace(/\/+$/, "");
}

/**
 * @param {string | undefined | null} value
 */
function normalizeBasePath(value) {
  if (!value || value === "/") {
    return "";
  }

  const trimmed = value.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
}

/**
 * @param {string | undefined | null} repository
 */
function parseRepository(repository) {
  if (!repository?.includes("/")) {
    return {
      owner: null,
      repositoryName: null,
      isUserSite: false,
    };
  }

  const [owner, repositoryName] = repository.split("/", 2);
  const isUserSite = repositoryName.toLowerCase() === `${owner.toLowerCase()}.github.io`;

  return {
    owner,
    repositoryName,
    isUserSite,
  };
}

/**
 * @returns {SiteConfig}
 */
export function getSiteConfig() {
  const repository = parseRepository(process.env.GITHUB_REPOSITORY);
  const inferredOrigin = repository.owner
    ? `https://${repository.owner}.github.io`
    : "http://localhost:3000";
  const inferredBasePath =
    repository.repositoryName && !repository.isUserSite
      ? `/${repository.repositoryName}`
      : "";

  const origin = normalizeOrigin(
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.PAGES_SITE_URL ?? inferredOrigin
  );
  const basePath = normalizeBasePath(
    process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.PAGES_BASE_PATH ?? inferredBasePath
  );

  return {
    origin,
    basePath,
    repositoryName: repository.repositoryName,
    owner: repository.owner,
    isUserSite: repository.isUserSite,
    url: `${origin}${basePath}`,
  };
}

/**
 * @param {string} path
 */
export function withBasePath(path) {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  const { basePath } = getSiteConfig();

  if (!basePath) {
    return path;
  }

  if (path === "/") {
    return `${basePath}/`;
  }

  if (path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}

/**
 * @param {string} value
 */
export function toAbsoluteUrl(value) {
  if (/^[a-z][a-z\d+\-.]*:/i.test(value) || value.startsWith("//")) {
    return value;
  }

  if (!value.startsWith("/")) {
    return value;
  }

  const { origin } = getSiteConfig();
  return `${origin}${withBasePath(value)}`;
}
