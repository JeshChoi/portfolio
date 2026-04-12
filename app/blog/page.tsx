import { redirect } from "next/navigation";
import blogPosts from "@/data/blog";

export default function BlogIndexPage() {
  redirect(`/blog/${blogPosts[0].slug}`);
}
