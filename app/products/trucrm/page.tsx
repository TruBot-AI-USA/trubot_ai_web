import Image from "next/image";
import {
  CheckCircle2,
  TrendingUp,
  Clock,
  Phone,
  Video,
  ClipboardList,
  Send,
  Download,
  FileText,
} from "lucide-react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import CTASection from "@/app/ui/components/shared/CTASection";
import StatCard from "@/app/ui/components/shared/StatCard";
import {
  heroSection,
  coreFeaturesList,
  detailedFeatures,
  activitySection,
  quotesSection,
  analyticsSection,
  faqList,
  ctaSection,
} from "@/app/ui/libs/constants/individual-product/trucrm";

export const metadata = {
  title: "TruCRM – AI-Powered Customer Relationship Management | TruBot AI",
  description:
    "Streamline your sales pipelines, manage leads, and enhance customer relationships with AI. TruCRM provides intelligent automation, analytics, and comprehensive CRM tools for modern businesses.",
  keywords: [
    "CRM Software",
    "Customer Relationship Management",
    "AI-Powered CRM",
    "Sales Pipeline Management",
    "Lead Management System",
    "Sales Automation",
    "Customer Management Platform",
    "Sales Analytics",
    "Opportunity Management",
    "CRM for SMEs",
    "Sales CRM",
    "Contact Management",
    "Sales Tracking",
    "TruCRM",
    "TruBot AI CRM",
  ],
};

const Page = () => {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="[background:radial-gradient(50%_50%_at_50%_40%,rgba(60,130,246,1)_0%,rgba(43,92,175,1)_69%)] text-white overflow-hidden relative">
        <PageLayout className="flex flex-col items-center gap-12 mx-auto md:flex-row py-12 lg:pt-5 lg:pb-20">
          {/* Left: Text Content */}
          <div className="flex-1 w-full text-center md:text-left z-10">
            <span className="inline-block px-4 py-1 mb-6 font-semibold text-white/90 rounded-full bg-white/10 border border-white/20">
              🚀 {heroSection.badge}
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl leading-tight">
              {heroSection.title.main}
              <br />
              <span className="text-blue-200">
                {heroSection.title.highlight}
              </span>
            </h1>
            <h2 className="mb-8 text-xl text-blue-100 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {heroSection.subtitle}
            </h2>

            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button
                href={heroSection.buttons.primary.href}
                label={heroSection.buttons.primary.label}
                className="h-[50px] px-8 rounded-full !bg-white !text-[#1034A6] hover:!bg-blue-50 border-none flex items-center justify-center font-semibold whitespace-nowrap min-w-max"
              />
              <Button
                href={heroSection.buttons.secondary.href}
                label={heroSection.buttons.secondary.label}
                className="h-[50px] px-8 rounded-full !bg-white !text-[#1034A6] hover:!bg-blue-50 border-none flex items-center justify-center font-semibold whitespace-nowrap min-w-max"
              />
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              {heroSection.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl text-white font-bold">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image & Floating Card */}
          <div className="relative flex-1 w-full max-w-lg mt-12 md:mt-0 z-10">
            {/* 1. Image Container  */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src={heroSection.image.src}
                alt={heroSection.image.alt}
                width={heroSection.image.width}
                height={heroSection.image.height}
                priority
                className="w-full h-auto object-cover"
              />
            </div>

            {/* 2. Floating Sales Card */}
            <div className="absolute bottom-8 -left-4 md:-left-12 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in fade-in slide-in-from-bottom-6 hidden md:block max-w-[240px] z-20">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mb-2">
                Sales This Month
              </p>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                $124,500
              </div>
              <div className="text-green-600 text-sm font-bold flex items-center gap-1 bg-green-50 px-2 py-1 rounded w-fit">
                <TrendingUp size={16} /> 23% increase
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </PageLayout>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[50%] transform scale-150 translate-y-8"></div>
      </div>

      {/* --- 8-GRID CORE FEATURES --- */}
      <div id="features" className="bg-gray-soft">
        <PageLayout className="mx-auto">
          <SectionHeader
            title="Everything You Need to Close More Deals"
            subtitle="TruCRM provides all the tools your sales team needs to succeed."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {coreFeaturesList.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.iconColor}`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1034A6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </PageLayout>
      </div>

      {/* --- ZIG-ZAG DETAILED SECTIONS --- */}
      <div className="space-y-0">
        {/* 1. EMAIL MANAGEMENT */}
        <PageLayout>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text */}
            <div className="flex-1 space-y-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                Email Management
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                {detailedFeatures[0].title}
              </h2>
              <p className="text-lg text-gray-600">
                {detailedFeatures[0].description}
              </p>
              <div className="space-y-4 pt-4">
                {detailedFeatures[0].features.map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600">
                      <feat.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold">{feat.title}</h4>
                      <p className="text-sm text-gray-600">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image & Cards */}
            <div className="flex-1 w-full relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src={detailedFeatures[0].imageSrc}
                  alt={detailedFeatures[0].imageAlt}
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
              {/* Floating Card 1: Sync Status */}
              <div className="absolute -bottom-10 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-56 hidden md:block">
                <div className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-800">
                  <div className="text-blue-500">
                    <CheckCircle2 size={16} />
                  </div>{" "}
                  Email Sync Status
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2 pt-2 border-t">
                  <div>
                    <div className="font-bold text-gray-900 text-lg">247</div>
                    Sent Today
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">68%</div>
                    Response
                  </div>
                </div>
              </div>
              {/* Floating Card 2: Avg Response */}
              <div className="absolute top-10 -right-8 hidden md:block">
                <StatCard
                  label="Avg Response Time"
                  value="2.3 hours"
                  icon={Clock}
                  iconBgColor="bg-blue-50"
                  iconColor="text-blue-600"
                  size="sm"
                  className="w-48"
                />
              </div>
            </div>
          </div>
        </PageLayout>

        {/* 2. LEAD GENERATION (Code-based Card) */}
        <div className="bg-gray-soft">
          <PageLayout>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              {/* Text */}
              <div className="flex-1 space-y-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
                  Lead Generation
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy">
                  {detailedFeatures[1].title}
                </h2>
                <p className="text-lg text-gray-600">
                  {detailedFeatures[1].description}
                </p>
                <div className="space-y-4 pt-4">
                  {detailedFeatures[1].features.map((feat, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-50 text-purple-600">
                        <feat.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold">{feat.title}</h4>
                        <p className="text-sm text-gray-600">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button label="Start Managing Leads" variant="primary" />
                </div>
              </div>
              {/* Component */}
              <div className="flex-1 w-full">
                <div className="bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 w-full max-w-md mx-auto relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      Lead Pipeline
                    </h3>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                      Real-time
                    </span>
                  </div>

                  <div className="space-y-5">
                    {/* New Leads */}
                    <div>
                      <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
                        <span className="border-l-4 border-blue-600 pl-2">
                          New Leads
                        </span>
                        <span className="text-blue-600 font-bold">145</span>
                      </div>
                      <div className="h-2 bg-blue-50 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-[70%] rounded-full"></div>
                      </div>
                    </div>

                    {/* Contacted */}
                    <div>
                      <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
                        <span className="border-l-4 border-purple-500 pl-2">
                          Contacted
                        </span>
                        <span className="text-purple-500 font-bold">98</span>
                      </div>
                      <div className="h-2 bg-purple-50 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[55%] rounded-full"></div>
                      </div>
                    </div>

                    {/* Qualified */}
                    <div>
                      <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
                        <span className="border-l-4 border-orange-500 pl-2">
                          Qualified
                        </span>
                        <span className="text-orange-500 font-bold">67</span>
                      </div>
                      <div className="h-2 bg-orange-50 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 w-[40%] rounded-full"></div>
                      </div>
                    </div>

                    {/* Converted */}
                    <div>
                      <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
                        <span className="border-l-4 border-green-500 pl-2">
                          Converted
                        </span>
                        <span className="text-green-500 font-bold">42</span>
                      </div>
                      <div className="h-2 bg-green-50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[25%] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">
                        Conversion Rate
                      </div>
                      <div className="text-xl font-bold text-green-600">
                        28.9%
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 mb-1">
                        Avg. Lead Score
                      </div>
                      <div className="text-xl font-bold text-blue-600">
                        72/100
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageLayout>
        </div>

        {/* 3. OPPORTUNITY MANAGEMENT */}
        <PageLayout>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text */}
            <div className="flex-1 space-y-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-pink-600 bg-pink-100 rounded-full">
                Opportunity Management
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                {detailedFeatures[2].title}
              </h2>
              <p className="text-lg text-gray-600">
                {detailedFeatures[2].description}
              </p>
              <div className="space-y-4 pt-4">
                {detailedFeatures[2].features.map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-pink-50 text-pink-600">
                      <feat.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold">{feat.title}</h4>
                      <p className="text-sm text-gray-600">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image */}
            <div className="flex-1 w-full relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src={detailedFeatures[2].imageSrc}
                  alt={detailedFeatures[2].imageAlt}
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
              {/* Floating Card: Active Opps */}
              <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                <p className="text-xs text-gray-500 mb-3 font-semibold">
                  Active Opportunities
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 text-green-600 p-1.5 rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500">
                      Won This Month
                    </div>
                    <div className="font-bold text-gray-900">$485K</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1.5 rounded-full">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500">In Pipeline</div>
                    <div className="font-bold text-gray-900">$1.2M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>

        {/* 4. CUSTOMER MANAGEMENT */}
        <div className="bg-gray-soft">
          <PageLayout>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              {/* Text */}
              <div className="flex-1 space-y-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full">
                  Customer Management
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy">
                  {detailedFeatures[3].title}
                </h2>
                <p className="text-lg text-gray-600">
                  {detailedFeatures[3].description}
                </p>
                <div className="space-y-4 pt-4">
                  {detailedFeatures[3].features.map((feat, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-50 text-teal-600">
                        <feat.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold">{feat.title}</h4>
                        <p className="text-sm text-gray-600">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Image */}
              <div className="flex-1 w-full relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src={detailedFeatures[3].imageSrc}
                    alt={detailedFeatures[3].imageAlt}
                    width={600}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
                {/* Floating Card: Profile */}
                <div className="absolute top-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-64 hidden md:block">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      JD
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">John Davis</div>
                      <div className="text-xs text-gray-500">
                        Premium Customer
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-yellow-400 text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex justify-between">
                      <span>Lifetime Value:</span>{" "}
                      <span className="font-bold text-gray-900">$12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Contact:</span> <span>2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageLayout>
        </div>
      </div>

      {/* --- ACTIVITY MANAGEMENT (Unique Layout) --- */}
      <PageLayout>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full mb-4">
            {activitySection.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {activitySection.title}
          </h2>
          <p className="text-gray-600 text-lg">{activitySection.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activitySection.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${card.color}`}
              >
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">{card.description}</p>
              <ul className="space-y-3">
                {card.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700 font-medium"
                  >
                    <CheckCircle2 size={16} className="text-green-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Activity Dashboard Component */}
        <div className="mt-16 bg-[#0f172a] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Todays Activity Dashboard
              </h3>
              <p className="text-gray-400 mb-6">
                See what needs to be done today. Prioritize activities and
                manage your time effectively.
              </p>
              <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                View My Activities
              </button>
            </div>

            <div className="space-y-4">
              {/* Calls Card */}
              <div className="bg-[#1e293b] p-4 rounded-xl flex items-center justify-between border border-white/5 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-bold">Calls Scheduled</div>
                    <div className="text-xs text-gray-400">Next: 10:30 AM</div>
                  </div>
                </div>
                <div className="text-2xl font-bold">8</div>
              </div>

              {/* Meetings Card */}
              <div className="bg-[#1e293b] p-4 rounded-xl flex items-center justify-between border border-white/5 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg text-purple-400">
                    <Video size={20} />
                  </div>
                  <div>
                    <div className="font-bold">Meetings Today</div>
                    <div className="text-xs text-gray-400">Next: 2:00 PM</div>
                  </div>
                </div>
                <div className="text-2xl font-bold">3</div>
              </div>

              {/* Tasks Card */}
              <div className="bg-[#1e293b] p-4 rounded-xl flex items-center justify-between border border-white/5 hover:border-orange-500/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-600/20 p-3 rounded-lg text-orange-400">
                    <ClipboardList size={20} />
                  </div>
                  <div>
                    <div className="font-bold">Tasks Due</div>
                    <div className="text-xs text-blue-400">5 high priority</div>
                  </div>
                </div>
                <div className="text-2xl font-bold">12</div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>

      {/* --- QUOTATIONS SECTION (Green Theme) --- */}
      <div className="bg-gray-soft">
        <PageLayout>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full text-sm">
                {quotesSection.badge}
              </span>
              <h2 className="text-4xl font-bold text-navy">
                {quotesSection.title}
              </h2>
              <p className="text-lg text-gray-600">
                {quotesSection.description}
              </p>

              <div className="space-y-6">
                {quotesSection.features.map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className={`p-2 rounded-lg bg-white shadow-sm h-fit ${feat.color}`}
                    >
                      <feat.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{feat.title}</h4>
                      <p className="text-sm text-gray-600">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-md mx-auto rotate-1 hover:rotate-0 transition-all duration-500">
                <div className="p-6 border-b border-gray-50">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded text-green-600">
                        <FileText size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          Quotation #Q-2024-1247
                        </div>
                        <div className="text-xs text-gray-500">
                          Acme Corporation
                        </div>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-0.5 rounded">
                      Pending
                    </span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Product License (x5)
                      </span>
                      <span className="font-medium">$2,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Implementation</span>
                      <span className="font-medium">$1,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Training</span>
                      <span className="font-medium">$800</span>
                    </div>
                    <div className="flex justify-between text-red-500">
                      <span>Discount (10%)</span>
                      <span>-$450</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 flex justify-between items-center">
                  <div className="font-bold text-gray-900">Total Amount</div>
                  <div className="font-bold text-xl text-green-600">$4,050</div>
                </div>
                <div className="p-4 flex gap-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 rounded flex items-center justify-center gap-1">
                    <Send size={12} /> Send Quote
                  </button>
                  <button className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-600 text-xs font-bold py-2 rounded flex items-center justify-center gap-1">
                    <Download size={12} /> Download PDF
                  </button>
                </div>
              </div>

              {/* Floating Performance Card */}
              <div className="absolute top-1/2 -right-4 translate-y-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden lg:block w-48">
                <p className="text-xs font-bold text-gray-500 mb-2">
                  Quote Performance
                </p>
                <div className="flex justify-between items-end">
                  <div className="text-center">
                    <div className="text-green-600 font-bold text-xl">156</div>
                    <div className="text-[10px] text-gray-400">Sent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-600 font-bold text-xl">89</div>
                    <div className="text-[10px] text-gray-400">Accepted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-600 font-bold text-xl">57%</div>
                    <div className="text-[10px] text-gray-400">Win Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </div>

      {/* --- ANALYTICS SECTION --- */}
      <PageLayout>
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full text-sm">
            {analyticsSection.badge}
          </span>
          <h2 className="text-4xl font-bold text-navy mt-4 mb-4">
            {analyticsSection.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {analyticsSection.subtitle}
          </p>
        </div>

        {/* 3 Colored Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {analyticsSection.cards.map((card, idx) => (
            <div
              key={idx}
              className={`${card.color} rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="relative z-10">
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                  <card.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-8">{card.title}</h3>
                <div className="space-y-4">
                  {card.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-white/20 pb-2"
                    >
                      <span className="text-white/80 text-sm">{m.label}</span>
                      <span className="font-bold text-lg">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Comprehensive Suite Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="flex-1 w-full relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src={analyticsSection.imageSrc}
                alt="Analytics Dashboard"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
              Comprehensive Analytics Suite
            </h3>
            <div className="space-y-6">
              {analyticsSection.features.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-fit text-blue-600">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <Button label="View Sample Dashboard" variant="primary" />
              <Button label="Create Custom Report" variant="outline" />
            </div>
          </div>
        </div>
      </PageLayout>

      {/* --- FAQ SECTION --- */}
      <div className="bg-gray-soft">
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers."
          faqList={faqList}
        />
      </div>

      {/* --- CTA SECTION --- */}
      <CTASection
        title={ctaSection.title}
        subtitle={ctaSection.subtitle}
        primaryCTA={ctaSection.primaryCTA}
      />
    </>
  );
};

export default Page;
