import { createClient } from "@/prismicio";
import Link from "next/link";
import { FaRocket, FaUsers, FaChartLine } from "react-icons/fa";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import BlogCard from "@/app/ui/components/blog/BlogCard";

export async function generateMetadata() {
  return {
    title: "Blog - AI Insights & Automation Guides | TruBot AI",
    description:
      "Discover the latest insights on AI automation, chatbot technology, and business transformation. Expert guides, tutorials, and industry trends from TruBot AI.",
    keywords: [
      "AI Blog",
      "Chatbot Technology",
      "Automation Insights",
      "AI Guides",
      "Business Automation",
      "TruBot AI Blog",
    ],
    openGraph: {
      title: "Blog - AI Insights & Automation Guides | TruBot AI",
      description:
        "Discover the latest insights on AI automation, chatbot technology, and business transformation. Expert guides, tutorials, and industry trends from TruBot AI.",
      url: "https://trubotai.com/blog",
      siteName: "TruBot AI",
      type: "website",
      images: [
        {
          url: "/images/blog-listing.png",
          width: 1200,
          height: 630,
          alt: "TruBot AI Blog Overview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog - AI Insights & Automation Guides | TruBot AI",
      description:
        "Discover the latest insights on AI automation, chatbot technology, and business transformation. Expert guides, tutorials, and industry trends from TruBot AI.",
    },
  };
}

export default async function BlogPage() {
  const client = createClient();
  const posts = await client.getAllByType("blog_post", {
    orderings: [{ field: "my.blog_post.publish_date", direction: "desc" }],
  });

  return (
    <PageLayout id="blog">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-heading font-extrabold text-navy mb-6 fade-in slide-in-up">
          TruBot AI Blog
        </h1>
        <p className="text-xl text-navy/70 max-w-3xl mx-auto font-body mb-8 fade-in slide-in-up animation-delay-200">
          Discover insights, tutorials, and the latest trends in AI automation,
          chatbot technology, and business transformation.
        </p>
      </div>

      {/* Latest Posts Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-navy">Latest Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.uid} post={post} />
          ))}
        </div>
      </section>

      {/* Premium Explore More Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <SectionHeader
            title="Ready to Transform Your Business?"
            subtitle="Explore our comprehensive AI solutions and discover how TruBot AI can revolutionize your customer interactions and business processes."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/solutions" className="group">
            <div className="bg-gradient-to-br from-electric/5 to-teal/5 border border-electric/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center group-hover:border-electric/40">
              <div className="w-16 h-16 bg-gradient-to-br from-electric to-teal rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-electric transition-colors">
                AI Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover industry-specific AI solutions designed to streamline
                your operations and enhance customer experiences across every
                touchpoint.
              </p>
              <div className="flex items-center justify-center text-electric font-semibold group-hover:translate-x-1 transition-transform duration-200">
                Explore Solutions
                <FaRocket className="ml-2" />
              </div>
            </div>
          </Link>

          <Link href="/products" className="group">
            <div className="bg-gradient-to-br from-teal/5 to-electric/5 border border-teal/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center group-hover:border-teal/40">
              <div className="w-16 h-16 bg-gradient-to-br from-teal to-electric rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-electric transition-colors">
                Our Products
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore our suite of AI-powered tools including chatbots,
                voicebots, and automation platforms built for modern businesses.
              </p>
              <div className="flex items-center justify-center text-electric font-semibold group-hover:translate-x-1 transition-transform duration-200">
                View Products
                <FaUsers className="ml-2" />
              </div>
            </div>
          </Link>

          <Link href="/demo" className="group">
            <div className="bg-gradient-to-br from-coral/5 to-electric/5 border border-coral/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center group-hover:border-coral/40">
              <div className="w-16 h-16 bg-gradient-to-br from-coral to-electric rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-electric transition-colors">
                Request Demo
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                See TruBot AI in action with a personalized demonstration
                tailored to your business needs and use cases.
              </p>
              <div className="flex items-center justify-center text-electric font-semibold group-hover:translate-x-1 transition-transform duration-200">
                Get Demo
                <FaChartLine className="ml-2" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
