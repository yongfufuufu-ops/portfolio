import { readFile } from "node:fs/promises";

let fontDataPromise:
  | Promise<{
      cabinetGrotesk: Buffer;
      clashDisplay: Buffer;
    } | null>
  | null = null;
let avatarDataUrlPromise: Promise<string | null> | null = null;

async function loadFontData() {
  try {
    const [cabinetGrotesk, clashDisplay] = await Promise.all([
      readFile(new URL("../../public/fonts/CabinetGrotesk-Medium.ttf", import.meta.url)),
      readFile(new URL("../../public/fonts/ClashDisplay-Semibold.ttf", import.meta.url)),
    ]);

    return { cabinetGrotesk, clashDisplay };
  } catch (error) {
    console.error("Failed to load fonts:", error);
    return null;
  }
}

async function loadAvatarDataUrl() {
  try {
    const avatar = await readFile(
      new URL("../../public/avatar-yongfu.jpg", import.meta.url)
    );

    return `data:image/jpeg;base64,${avatar.toString("base64")}`;
  } catch (error) {
    console.error("Failed to load avatar for Open Graph image:", error);
    return null;
  }
}

export function getOgFontData() {
  fontDataPromise ??= loadFontData();
  return fontDataPromise;
}

export function getOgAvatarDataUrl() {
  avatarDataUrlPromise ??= loadAvatarDataUrl();
  return avatarDataUrlPromise;
}
