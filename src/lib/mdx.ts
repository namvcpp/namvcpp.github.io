import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export function getBlogPosts() {
  const files = fs.readdirSync(BLOG_DIR);
  return files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(".mdx", ""),
      ...data,
    };
  });
}