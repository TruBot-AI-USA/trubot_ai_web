"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Users, Database, Rocket, ArrowRight, Sparkles, Package, Home, FileText, Building2 } from "lucide-react";

const categories = [
  { name: "Finance Templates", icon: Calculator, price: "199", href: "/digitalAssets/finance-templates", bg: "bg-blue-100", iconColor: "text-blue-600", 
    description: "Professional financial planning templates built for founders, operators, and growing teams. One-time purchase. Unlimited use." },
  { name: "Investor", icon: Users, price: "299", href: "/digitalAssets/investor-database", bg: "bg-purple-100", iconColor: "text-purple-600", 
    description: "A curated investor database designed to help you reach the right VCs, angels, and funds — faster. Think of it as your starting pipeline — not just a list, but a fundraising accelerator." },
  { name: "Grant", icon: Database, price: "199", href: "/digitalAssets/grant-database", bg: "bg-green-100", iconColor: "text-green-600", 
    description: "A curated database of grants, accelerators, and funding programs — so you don’t miss opportunities that don’t cost you equity. This database saves 40+ hours of research — and helps you find opportunities you didn’t even know existed." },
  { name: "Accelerator", icon: Rocket, price: "49", href: "/digitalAssets/accelerator-database", bg: "bg-orange-100", iconColor: "text-orange-600", 
    description: "A curated list of top startup accelerators with intake cycles, focus areas, and application details — all in one place. This database helps you stay ahead — plan, apply, and increase your chances of getting into the right program." },
  { name: "Leads (1M)", icon: Users, price: "49", href: "/digitalAssets/1m-leads", bg: "bg-pink-100", iconColor: "text-pink-600", 
    description: "Instant access to a massive outreach-ready lead dataset — no subscriptions, no tools, just pure data. This removes the bottleneck — so you can focus on messaging, testing, and closing." },
  { name: "AI LinkedIn Prompts Pack", icon: Sparkles, price: "49", href: "/digitalAssets/ai-linkedin-prompts-pack", bg: "bg-yellow-100", iconColor: "text-yellow-600", 
    description: "A curated collection of AI prompts engineered to help you write data-driven, insight-led LinkedIn content that positions you as a thought leader — not just another poster. Use it to build a consistent presence, Generate post ideas, hooks, and full drafts in minutes, Create content series that position you around a specific expertise, and respond to trends and news with credible, structured takes. One-time purchase. Use it forever."},
  { name: "Architecture PRD", icon: Building2, price: "49", href: "/digitalAssets/architecture-prd", bg: "bg-teal-100", iconColor: "text-teal-600", 
    description: "Professional architecture blueprints and system design documents for teams that need clarity, alignment, and a solid technical foundation. Instead of building from scattered notes, you start with a structured technical framework that your team can actually use." },
  { name: "Product PRDs", icon: FileText, price: "49", href: "/digitalAssets/product-prds", bg: "bg-cyan-100", iconColor: "text-cyan-600", 
    description: "Professional, industry-standard Product Requirements Document templates that help founders, product managers, and consultants move from idea to execution faster. Instead of spending days figuring out structure, you start with a proven framework and focus on the actual product." },
  { name: "All Assets", icon: Package, price: "999", href: "/digitalAssets/all-assets", bg: "bg-teal-100", iconColor: "text-teal-600", 
    description: "Access to all digital assets in a single, comprehensive package." },
  { name: "Real Estate", icon: Home, price: "49", href: "/digitalAssets/real-estate-database", bg: "bg-red-100", iconColor: "text-red-600", 
    description: "", comingSoon: true,},
];


export default function DigitalAssetsPage() {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#18352b] leading-tight">
              Digital Assets{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Marketplace</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover premium digital assets to accelerate your business growth — from investor databases and B2B leads to financial templates and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="group relative h-full bg-white border border-gray-200 rounded-2xl p-6 md:p-7 transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/8 hover:-translate-y-1.5">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center shadow-sm group-hover:shadow-md transition-all`}>
                      <cat.icon size={28} className={`${cat.iconColor} transition-colors`} />
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-[#18352b] mb-3 group-hover:text-blue-700 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 min-h-[48px]">
                        {cat.description}
                      </p>
                      {/*<div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">${cat.price}</span>
                        <button
                          type="button"
                          onClick={async (e) => {
                            e.stopPropagation();
                            setLoadingIndex(index);
                            try {
                              const amount = Math.round(Number(cat.price) * 100);
                              const res = await fetch('/api/checkout', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ product: cat.href.split('/').pop(), amount, name: cat.name })
                              });
                              const data = await res.json().catch(() => null);
                              if (res.ok && data?.url) {
                                window.location.href = data.url;
                              } else {
                                const errorMessage = data?.error || `Checkout failed (${res.status})`;
                                alert(errorMessage);
                              }
                            } catch (err) {
                              console.error(err);
                              alert('Checkout error');
                            } finally {
                              setLoadingIndex(null);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
                          aria-label={`Buy ${cat.name}`}
                        >
                          {loadingIndex === index ? 'Processing...' : 'Buy Now'}
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>*/}
                      <div className="flex items-center justify-between">
                        {cat.comingSoon ? (
                          <>
                            <span className="text-lg font-bold text-orange-600">
                              🚀 Coming Soon
                            </span>

                            <span className="text-sm font-medium text-gray-400 cursor-not-allowed">
                              Buy Now
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-2xl font-bold text-blue-600">
                              ${cat.price}
                            </span>

                            <button
                              type="button"
                              onClick={async (e) => {
                                e.stopPropagation();
                                setLoadingIndex(index);
                                try {
                                  const amount = Math.round(Number(cat.price) * 100);
                                  const res = await fetch('/api/checkout', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                      product: cat.href.split('/').pop(),
                                      amount,
                                      name: cat.name
                                    })
                                  });
                                  const data = await res.json().catch(() => null);
                                  if (res.ok && data?.url) {
                                    window.location.href = data.url;
                                  } else {
                                    alert(data?.error || `Checkout failed (${res.status})`);
                                  }
                                } catch (err) {
                                  console.error(err);
                                  alert('Checkout error');
                                } finally {
                                  setLoadingIndex(null);
                                }
                              }}
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
                            >
                              {loadingIndex === index ? 'Processing...' : 'Buy Now'}
                              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover accent bar */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
