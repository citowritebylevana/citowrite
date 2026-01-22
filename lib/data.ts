import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getSectionData(filename: string): Record<string, unknown> | undefined {
  const filePath = path.join(process.cwd(), "contents", `${filename}.md`);

  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data as Record<string, unknown> | undefined;
}
