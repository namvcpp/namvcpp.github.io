import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}