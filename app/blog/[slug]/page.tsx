import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import blogPosts, { BlogBlock } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const tagColors: Record<string, string> = {
  poetry: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  engineering: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  life: "text-green-400 bg-green-400/10 border-green-400/20",
  default: "text-zinc-400 bg-zinc-400/10 border-zinc-400/20",
};

function renderBlock(block: BlogBlock, i: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={i}
          className="text-xl font-bold text-zinc-100 mt-10 mb-3 tracking-tight"
        >
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={i} className="text-zinc-400 leading-relaxed text-base">
          {block.text}
        </p>
      );
    case "stanza":
      return (
        <div key={i} className="space-y-1">
          {block.lines.map((line, j) => (
            <p key={j} className="text-zinc-200 leading-relaxed text-base italic">
              {line}
            </p>
          ))}
        </div>
      );
    case "divider":
      return (
        <div key={i} className="flex items-center justify-center gap-3 py-2">
          <div className="h-px w-8 bg-zinc-700" />
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#FF8C3A", opacity: 0.6 }}
          />
          <div className="h-px w-8 bg-zinc-700" />
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const tagClass = tagColors[post.tag] ?? tagColors.default;

  return (
    <article className="max-w-2xl mx-auto px-8 py-16">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-10 group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        Back to portfolio
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-md border ${tagClass}`}
          >
            {post.tag}
          </span>
          <span className="text-xs text-zinc-600">{post.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight leading-tight mb-4">
          {post.title}
        </h1>

        <p className="text-zinc-400 text-base leading-relaxed mb-4">
          {post.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-zinc-600">
          <time>{post.date}</time>
        </div>

        <div
          className="mt-8 h-px"
          style={{
            background:
              "linear-gradient(to right, rgba(255,140,58,0.3), transparent)",
          }}
        />
      </header>

      {/* Content */}
      <div className="flex flex-col gap-6">{post.content.map(renderBlock)}</div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-zinc-800/50">
        <p className="text-xs text-zinc-600 text-center">
          Written by Joshua Choi · {post.date}
        </p>
      </div>
    </article>
  );
}
