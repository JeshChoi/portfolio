"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import blogPosts from "@/data/blog";

const tagColors: Record<string, string> = {
  poetry: "text-purple-400 bg-purple-400/10",
  engineering: "text-blue-400 bg-blue-400/10",
  life: "text-green-400 bg-green-400/10",
  default: "text-zinc-400 bg-zinc-400/10",
};

export default function BlogSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 flex-shrink-0 border-r border-zinc-800/50 min-h-[calc(100vh-64px)] sticky top-16 self-start hidden md:block">
      <div className="p-6">
        <p className="text-xs text-zinc-500 tracking-widest uppercase font-medium mb-5">
          Posts
        </p>
        <nav className="flex flex-col gap-1">
          {blogPosts.map((post) => {
            const isActive = pathname === `/blog/${post.slug}`;
            const tagClass =
              tagColors[post.tag] ?? tagColors.default;

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group rounded-xl px-3 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-800/70 border border-zinc-700/50"
                    : "hover:bg-zinc-900/60 border border-transparent hover:border-zinc-800/50"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span
                    className={`text-xs font-medium px-1.5 py-0.5 rounded-md ${tagClass}`}
                  >
                    {post.tag}
                  </span>
                  <span className="text-xs text-zinc-600">{post.readTime}</span>
                </div>
                <p
                  className={`text-sm font-medium leading-snug transition-colors ${
                    isActive
                      ? "text-zinc-100"
                      : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                  style={
                    isActive
                      ? { color: "#60A5FA", textShadow: "0 0 8px rgba(96,165,250,0.3)" }
                      : undefined
                  }
                >
                  {post.title}
                </p>
                <p className="text-xs text-zinc-600 mt-1">{post.date}</p>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
