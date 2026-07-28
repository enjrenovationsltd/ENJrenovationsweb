import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const IMAGES_DIR = path.join(process.cwd(), "public", "images");

export function getGalleryImages(): string[] {
  let entries: string[] = [];
  try {
    entries = fs.readdirSync(IMAGES_DIR);
  } catch {
    return [];
  }

  return entries
    .filter((entry) => IMAGE_EXTENSIONS.has(path.extname(entry).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((entry) => `/images/${entry}`);
}
