import { readFile } from "fs/promises";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export async function getWorkContent(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(contentDir, "work", `${slug}.mdx`);
    const raw = await readFile(filePath, "utf-8");
    return raw;
  } catch {
    return null;
  }
}

export async function getInsightContent(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(contentDir, "insights", `${slug}.mdx`);
    const raw = await readFile(filePath, "utf-8");
    return raw;
  } catch {
    return null;
  }
}

export async function listInsightSlugs(): Promise<string[]> {
  try {
    const { readdir } = await import("fs/promises");
    const dir = path.join(contentDir, "insights");
    const files = await readdir(dir);
    return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}
