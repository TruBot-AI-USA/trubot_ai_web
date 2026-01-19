import type { Metadata } from "next";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import BlogPostHeader from "@/app/ui/components/blog/BlogPostHeader";
import ReadingProgress from "@/app/ui/components/blog/ReadingProgress";
import TableOfContents from "@/app/ui/components/blog/TableOfContents";
import BackToTop from "@/app/ui/components/blog/BackToTop";
import ShareLinks from "@/app/ui/components/blog/ShareLinks";

export async function generateStaticParams() {
  const client = createClient();
  const posts = await client.getAllByType("blog_post");
  return posts.map((post) => ({ uid: post.uid }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ uid: string }>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const post = await client.getByUID("blog_post", uid);

  if (!post) return {};

  const title = post.data.meta_title || post.data.title || "Blog Post";
  const description =
    post.data.meta_description ||
    post.data.excerpt ||
    "Explore this blog post.";
  const imageUrl =
    post.data.meta_image?.url ||
    post.data.cover_image?.url ||
    "/images/default-og.png";
  const imageAlt =
    post.data.meta_image?.alt ||
    post.data.cover_image?.alt ||
    "Blog Post Image";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const Page = async ({ params }: { params: Promise<{ uid: string }> }) => {
  const { uid } = await params;
  const client = createClient();
  const post = await client.getByUID("blog_post", uid);

  if (!post) notFound();

  const currentUrl = `https://trubotai.com/blog/${uid}`;

  return (
    <>
      <ReadingProgress />
      <PageLayout id="blog-post">
        <article className="max-w-5xl mx-auto">
          {/* Blog Post Header */}
          <BlogPostHeader
            title={post.data.title || ""}
            excerpt={post.data.excerpt || ""}
            publishDate={post.data.publish_date || new Date().toISOString()}
            readTime={post.data.estimated_read_time || 5}
            tags={post.data.tags || "AI Automation"}
            coverImage={post.data.cover_image}
            url={currentUrl}
          />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <PrismicRichText
                  field={post.data.content}
                  components={{
                    heading1: ({ children }) => (
                      <h1 className="text-4xl font-heading font-bold text-navy mb-6">
                        {children}
                      </h1>
                    ),
                    heading2: ({ children }) => (
                      <h2 className="text-3xl font-heading font-semibold text-navy mt-10 mb-4">
                        {children}
                      </h2>
                    ),
                    heading3: ({ children }) => (
                      <h3 className="text-2xl font-heading font-semibold text-navy mt-8 mb-3">
                        {children}
                      </h3>
                    ),
                    heading4: ({ children }) => (
                      <h4 className="text-xl font-heading font-semibold text-navy mt-6 mb-2">
                        {children}
                      </h4>
                    ),
                    paragraph: ({ children }) => (
                      <p className="text-base text-navy/80 font-body leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    list: ({ children }) => (
                      <ul className="list-disc list-inside text-navy/80 mb-4 space-y-2">
                        {children}
                      </ul>
                    ),
                    oList: ({ children }) => (
                      <ol className="list-decimal list-inside text-navy/80 mb-4 space-y-2">
                        {children}
                      </ol>
                    ),
                    listItem: ({ children }) => (
                      <li className="list-disc list-inside text-navy/70 font-body">
                        {children}
                      </li>
                    ),
                    oListItem: ({ children }) => (
                      <li className="list-decimal list-inside text-navy/70 font-body">
                        {children}
                      </li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-navy">
                        {children}
                      </strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-navy/70">{children}</em>
                    ),
                    hyperlink: ({ node, children }) => (
                      <a
                        href={node.data?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-electric underline hover:text-teal"
                      >
                        {children}
                      </a>
                    ),
                    image: ({ node }) => (
                      <div className="my-8">
                        <PrismicNextImage
                          field={node}
                          className="w-full rounded-lg shadow-md"
                          alt=""
                        />
                      </div>
                    ),
                    preformatted: ({ children }) => (
                      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                        {children}
                      </pre>
                    ),
                  }}
                />
              </div>

              {/* Table of Contents - Mobile */}
              <div className="lg:hidden mt-8">
                <TableOfContents />
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-sm text-gray-500">
                <p>
                  Published on{" "}
                  {new Date(
                    post.data.publish_date || new Date()
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Share this article:
                </span>
                <ShareLinks
                  url={currentUrl}
                  title={post.data.title || "Blog Post"}
                />
              </div>
            </div>
          </footer>
        </article>
      </PageLayout>
      <BackToTop />
    </>
  );
};

export const revalidate = 60;

export default Page;
