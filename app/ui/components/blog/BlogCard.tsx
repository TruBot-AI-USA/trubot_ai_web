import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import type { BlogPostDocument } from "@/prismicio-types";
import { FaClock, FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  post: BlogPostDocument;
  variant?: "default" | "featured";
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  post,
  variant = "default",
  className = "",
}) => {
  const readTime = post.data.estimated_read_time || 5;
  const publishDate = post.data.publish_date
    ? new Date(post.data.publish_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "No publish date";

  if (variant === "featured") {
    return (
      <Link href={`/blog/${post.uid}`} className={`group ${className}`}>
        <article className="bg-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
          <div className="relative h-64 overflow-hidden">
            {post.data.cover_image?.url ? (
              <PrismicNextImage
                field={post.data.cover_image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-electric to-teal opacity-80"></div>
            )}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-electric text-white px-3 py-1 rounded-full text-xs font-medium">
                {post.data.tags || "AI Automation"}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-navy group-hover:text-electric transition-colors line-clamp-2">
              {post.data.title}
            </h3>
            {post.data.excerpt && (
              <p className="text-navy/70 text-sm mb-4 line-clamp-3">
                {post.data.excerpt}
              </p>
            )}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <FaClock className="mr-1" />
                <span>{readTime} min read</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{publishDate}</span>
              <FaArrowRight className="text-electric group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.uid}`} className={`group ${className}`}>
      <article className="bg-light rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-raise">
        {post.data.cover_image?.url && (
          <div className="relative h-48 w-full overflow-hidden">
            <PrismicNextImage
              field={post.data.cover_image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-electric text-white px-3 py-1 rounded-full text-xs font-medium">
                {post.data.tags || "AI Automation"}
              </span>
            </div>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-heading font-semibold mb-3 text-navy group-hover:text-electric transition-colors duration-300 line-clamp-2">
            {post.data.title}
          </h3>

          {post.data.excerpt && (
            <p className="text-navy/70 text-sm mb-4 font-body line-clamp-3">
              {post.data.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <FaClock className="mr-1" />
              <span>{readTime} min read</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{publishDate}</span>
            <FaArrowRight className="text-electric group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
