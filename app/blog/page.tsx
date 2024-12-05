import type { Metadata } from "next";
import { formatDate, getBlogPosts } from "@/lib/converter";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {
  const allBlogs = getBlogPosts();
  return (
    <section className="h-screen w-full">
      <div className="flex flex-col gap-3 justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
        <h2 className="mb-5 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
          Articles
        </h2>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedDate) >
              new Date(b.metadata.publishedDate)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <BlogCard
              key={post.slug}
              link={`/blog/${post.slug}`}
              title={post.metadata.title}
              date={post.metadata.publishedDate}
              description={post.metadata.summary}
              tags={post.metadata.tags ?? [""]}
            />
          ))}
      </div>
    </section>
  );
}
