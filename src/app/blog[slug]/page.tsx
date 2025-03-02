import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");
  const files = fs.readdirSync(BLOG_DIR);
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");
  const filePath = path.join(BLOG_DIR, `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-900">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-gray-500">{data.date}</p>
      <article className="prose mt-6">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}