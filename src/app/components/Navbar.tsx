import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-gray-900">
            Projects
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}