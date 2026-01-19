import { FaGem } from "react-icons/fa";

import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import VerticalTimeline from "@/app/ui/components/shared/VerticalTimeline";
import CTASection from "@/app/ui/components/shared/CTASection";
import SavingsChart from "../../ui/components/IconComponents/SavingsChart";
import PipelineSlider from "../../ui/components/IconComponents/PipelineSlider";
import ProgressBar from "../../ui/components/IconComponents/Progressbar";
import {
  stepList,
  benefitList,
  categoryList,
  heroSection,
  enterpriseSection,
  softwareSection,
  ctaSection,
} from "@/app/ui/libs/constants/individual-product/software-aggregator";

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Enterprise Buyer */}
      <div className="bg-gray-soft">
        <PageLayout id="buyers">
          <SectionHeader
            title="For Enterprise Buyers"
            subtitle="Slash Your SaaS Costs by 20–50%"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-6">
            <div className="space-y-6">
              {/* Floating Badge */}
              <div className="flex items-center gap-2 float">
                <span className="bg-coral text-light text-xs font-bold px-3 py-1 rounded-full shadow">
                  ₹100K+/month
                </span>

                <span className="text-navy/70 font-body text-sm">
                  qualified spend
                </span>
              </div>

              <BenefitCard {...enterpriseSection} />
            </div>

            {/* Animated Savings Chart */}
            <SavingsChart />
          </div>
        </PageLayout>
      </div>

      {/* Software Vendors */}
      <PageLayout id="vendors">
        <SectionHeader
          title="For Software Vendors"
          subtitle="10x Your Enterprise Pipeline—Without Extra Sales Overhead"
          align="right"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Revenue Slider */}
          <PipelineSlider />

          {/* Right: Vendor Benefits */}
          <div className="slide-in-right animation-delay-200 hover-glow transition-shadow duration-300">
            <BenefitCard {...softwareSection} />
          </div>
        </div>
      </PageLayout>

      {/* Aggregation Engine */}
      <div className="bg-gray-soft">
        <PageLayout id="engine">
          <SectionHeader
            title="The Aggregation Engine"
            subtitle="AI-Powered, Demand-Driven, Deal-Matching System"
          />

          <div className="max-w-4xl mx-auto">
            <VerticalTimeline
              title="How It Works"
              steps={stepList}
              animationOffset={200}
            />
            <ProgressBar />
          </div>
        </PageLayout>
      </div>

      {/* Elite */}
      <PageLayout id="elite">
        <SectionHeader
          title="Built Exclusively for the Top 0.1%"
          subtitle="We serve the high-stakes, high-volume segment:"
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Message and Badge */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-electric to-teal p-3 rounded-full text-white shadow float">
                <FaGem className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-navy font-heading font-semibold text-lg">
                  Platinum-Tier Access
                </p>
                <div className="flex gap-2 mt-1">
                  <span className="bg-coral text-white text-xs font-bold px-3 py-1 rounded-full">
                    Elite Buyer
                  </span>
                  <span className="bg-electric text-white text-xs font-bold px-3 py-1 rounded-full">
                    Top Seller
                  </span>
                </div>
              </div>
            </div>

            <ul className="list-disc list-inside text-navy/80 font-body mt-6 space-y-2">
              <li>Enterprises spending ₹100K+/month</li>
              <li>Vendors generating ₹1M+/month</li>
            </ul>
          </div>

          {/* RIGHT: Heatmap */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 fade-in slide-in-up animation-delay-200">
            {categoryList.map((cat, index) => (
              <div
                key={index}
                className="p-4 bg-light rounded-xl shadow-md hover-scale hover-glow transition-all pulse-slow text-center font-body text-navy font-medium"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </PageLayout>

      {/* Why TruBot AI */}
      <div className="bg-gray-soft">
        <PageLayout id="why">
          <SectionHeader
            title="Why TruBot AI?"
            subtitle="Built to unlock deep value for modern enterprises."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefitList.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl shadow-md bg-light transition-all hover-glow hover-raise fade-in slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-electric/10 text-electric p-3 rounded-full">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading text-lg text-navy font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-navy/80 text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </PageLayout>
      </div>

      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
