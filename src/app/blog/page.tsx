import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";
import { motion } from "framer-motion";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 border rounded hover:bg-gray-100"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p>{post.description}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
