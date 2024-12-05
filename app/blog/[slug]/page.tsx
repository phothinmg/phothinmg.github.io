/*
 In Next 15, Dynamic APIs have been made asynchronous. 
 - The `params` and `searchParams` props that get provided to pages, layouts, metadata APIs, and route handlers.
 - `cookies()`, `draftMode()`, and `headers()` from `next/headers`
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/converter";
import MarkdownComponent from "@/components/Markdown";
import siteConfig from "@/site-config";

/**
 * Asynchronously retrieves static parameters for generating static paths.
 *
 * This function fetches all blog posts and maps their slugs into an array of objects
 * with a single property `slug`. The resulting array is used by Next.js to generate
 * static paths for each blog post during the build process.
 *
 * @returns A promise that resolves to an array of objects, each containing a `slug` string.
 */
export const getStaticParams = async (): Promise<
  {
    slug: string;
  }[]
> => getBlogPosts().map(({ slug }) => ({ slug }));

/**
 * Generates metadata for a blog post based on the post's slug.
 *
 * Metadata includes: title, description, open graph metadata, and Twitter card metadata.
 *
 * If the post is not found, the function returns `undefined`.
 *
 * @param {Object} params - An object containing the slug of the blog post.
 * @param {Promise<{ slug: string }>} params.params - A promise that resolves to an object with a `slug` property.
 * @returns {Promise<Metadata | undefined>} A promise that resolves to metadata for the blog post, or `undefined` if the post is not found.
 */
export async function generateMetadata({
  params,
}: {
  // Params must be promise
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  // asynchronous access of `params.slug`.
  const slug = (await params).slug;
  const post = getBlogPosts().find((p) => p.slug === slug);
  if (!post) return;

  const { title, publishedDate, summary, image } = post.metadata;
  const ogImage =
    image ||
    `${siteConfig.metadata.baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: publishedDate,
      url: `${siteConfig.metadata.baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  // Params must be promise
  params: Promise<{ slug: string }>;
}) {
  // asynchronous access of `params.slug`.
  const slug = (await params).slug;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }
  return (
    <MarkdownComponent
      metadata={post.metadata}
      converteredMd={post.converteredMd}
    />
  );
}
