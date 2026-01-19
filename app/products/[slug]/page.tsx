import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import CTASection from "@/app/ui/components/shared/CTASection";
import { productPagesMap } from "@/app/ui/libs/constants/individual-product";
import { ProductPageDataType } from "@/app/ui/libs/types/productPage";

export async function generateStaticParams() {
  return Object.keys(productPagesMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = productPagesMap[slug] as ProductPageDataType;

  if (!data) return {};

  return {
    title: `${data?.title} – TruBot AI`,
    description: data?.description,
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = productPagesMap[slug] as ProductPageDataType;

  if (!data) return notFound();

  const { title, description, platforms, steps, industries } = data;

  return (
    <>
      {/* Overview Section */}
      <PageLayout id="overview">
        <SectionHeader title={title} subtitle={description} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className={`fade-in slide-in-up animation-delay-${
                (index + 1) * 100
              }`}
            >
              <div className="bg-light border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md hover-scale transition-all">
                {platform.icon && (
                  <div
                    className="text-4xl mb-4 text-electric"
                    aria-hidden="true"
                  >
                    {platform.icon}
                  </div>
                )}
                <h4 className="text-lg font-heading font-semibold text-navy mb-1">
                  {platform.name}
                </h4>
                <p className="text-sm text-navy/70 font-body">
                  {platform.feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>

      {/* How It Works Section */}
      <div className="bg-gray-soft">
        <PageLayout id="how-it-works">
          <SectionHeader
            title="How It Works"
            subtitle="Launch AI-powered experiences in just a few easy steps."
          />

          <div className="mb-20 text-center mx-auto max-w-2xl">
            <ul className="list-decimal pl-6 space-y-6 text-navy/80 font-body text-base leading-relaxed">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className={`fade-in slide-in-up animation-delay-${
                    (index + 1) * 100
                  } hover:translate-x-1 transition-transform duration-300`}
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </PageLayout>
      </div>

      {/* Industries Section */}
      <PageLayout id="industry">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Flexible and scalable across diverse industries."
        />

        <div className="mb-20 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className={`group relative overflow-hidden rounded-xl p-6 bg-light border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md fade-in slide-in-up animation-delay-${
                  (index + 1) * 100
                }`}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <p className="text-sm font-semibold text-navy font-heading">
                    {industry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>

      {/* CTA Section */}
      <CTASection
        title="See It in Action"
        subtitle="Talk to our team and discover what TruBot AI can do for your business."
        primaryCTA={{ label: "Request Demo", href: "/contact" }}
      />
    </>
  );
};

export default Page;
