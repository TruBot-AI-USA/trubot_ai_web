import { CheckCircle } from "lucide-react";

import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import BlueprintSection from "./components/BluePrintTimeLine";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
import CheckList from "@/app/ui/components/shared/CheckList";
import SolutionCard from "@/app/ui/components/shared/SolutionCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  criteriaList,
  hackList,
  heroSection,
  metricsList,
  outcomeList,
  reasonList,
  ctaSection,
} from "@/app/ui/libs/constants/partners/startup-program";

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Program Overview */}
      <div className="bg-gray-soft">
        <PageLayout background="gray" id="program-overview">
          <SectionHeader
            title="Built for Visionaries. Powered by TruBot."
            subtitle="This isn’t just another startup accelerator. It’s a precision-optimized, AI-automated launch engine built to help founders like you dominate your category."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {outcomeList.map((outcome, index) => (
              <FeatureCard
                key={index}
                icon={CheckCircle}
                title={outcome}
                description=""
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* 12 Week BluePrint */}
      <BlueprintSection />

      {/* Growth Hacks */}
      <div className="bg-gray-soft">
        <PageLayout id="growth-hacks">
          <SectionHeader
            title="AI Growth Hacks Inside the Program"
            subtitle="High-leverage strategies baked into your 12-week runway."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {hackList.map((hack, index) => (
              <UseCaseCard
                key={index}
                icon={hack.icon}
                title={hack.title}
                subtitle={hack.subtitle}
                description={hack.description}
                results={hack.results}
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Success Metrics */}
      <PageLayout id="success-metrics">
        <SectionHeader
          title="Success Metrics That Matter"
          subtitle="We don’t just promise growth — we measure it."
        />

        <div className="overflow-x-auto mt-10">
          <table className="w-full max-w-3xl mx-auto text-left text-sm text-navy font-body fade-in slide-in-up shadow rounded-xl overflow-hidden">
            <thead className="bg-electric text-light font-heading text-base">
              <tr>
                <th className="px-6 py-3">Metric</th>
                <th className="px-6 py-3">Goal</th>
              </tr>
            </thead>
            <tbody className="bg-light divide-y divide-gray-200">
              {metricsList.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-electric/5 transition duration-300"
                >
                  <td className="px-6 py-4 font-medium">{item.metric}</td>
                  <td className="px-6 py-4 text-electric font-semibold">
                    {item.goal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageLayout>

      {/* Who Should Apply */}
      <div className="bg-gray-soft">
        <PageLayout id="who-should-apply">
          <SectionHeader
            title="Who Should Apply?"
            subtitle="This program is for execution-obsessed founders — not armchair strategists."
          />

          <CheckList
            items={criteriaList}
            columns={2}
            className="mt-10 text-light"
          />

          <p className="mt-8 text-center text-navy/70 font-body italic fade-in slide-in-up animation-delay-500">
            Not just theory — this is execution, at scale.
          </p>
        </PageLayout>
      </div>

      {/* Why It Works */}
      <PageLayout id="why-it-works">
        <SectionHeader
          title="Why It Works"
          subtitle="Our architecture combines automation, insights, and scale — by design."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {reasonList.map((item, index) => (
            <SolutionCard key={index} {...item} bgColor="bg-gray-soft" />
          ))}
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
