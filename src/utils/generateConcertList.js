import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "../../public/portfolio/concert");

// Makes strings readable, e.g. "MotherMother" → "Mother Mother"
const humanize = (str = "") =>
  str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .trim();

// Parse filename into artist + venue
const parseFilename = (filename) => {
  const base = filename.replace(/\.[^.]+$/, ""); // remove extension
  const cleaned = base.replace(/[-_]\d+$/, ""); // remove trailing -01, _02, etc.
  const [artist, venue = ""] = cleaned.split("_");

  return {
    src: `/portfolio/concert/${filename}`,
    artist: humanize(artist),
    venue: humanize(venue),
  };
};

// Generate parsed file list
const files = fs
  .readdirSync(dir)
  .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
  .map(parseFilename);

fs.writeFileSync(
  "../data/concertList.json",
  JSON.stringify(files, null, 2),
  "utf-8"
);
