import Link from "next/link";
import { FaCalendar, FaClock, FaTag } from "react-icons/fa";
import type * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import ShareLinks from "@/app/ui/components/blog/ShareLinks";

interface BlogPostHeaderProps {
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: number;
  tags: string;
  coverImage?: prismic.ImageField<never>;
  url: string;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({
  title,
  excerpt,
  publishDate,
  readTime,
  tags,
  coverImage,
  url,
}) => {
  return (
    <header className="mb-12">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link
              href="/blog"
              className="hover:text-electric transition-colors"
            >
              Blog
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="text-navy">{tags}</span>
          </li>
        </ol>
      </nav>

      {/* Cover Image */}
      {coverImage?.url && (
        <div className="mb-8 rounded-xl overflow-hidden">
          <PrismicNextImage
            field={coverImage}
            alt=""
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6 leading-tight">
        {title}
      </h1>

      {/* Excerpt */}
      {excerpt && (
        <p className="text-xl text-navy/70 mb-8 leading-relaxed max-w-4xl">
          {excerpt}
        </p>
      )}

      {/* Meta Information */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center">
            <FaCalendar className="mr-2 text-electric" />
            <span>
              {new Date(publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-2 text-electric" />
            <span>{readTime} min read</span>
          </div>
          <div className="flex items-center">
            <FaTag className="mr-2 text-electric" />
            <span className="bg-electric/10 text-electric px-3 py-1 rounded-full text-xs font-medium">
              {tags}
            </span>
          </div>
        </div>

        {/* Social Sharing */}
        <ShareLinks url={url} title={title} />
      </div>
    </header>
  );
};

export default BlogPostHeader;
