export default function FinancialServicesPage() {
  return (
    <main className="bg-[#0F172A] min-h-screen text-white">

      {/* ================= HERO SECTION ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block px-5 py-2 rounded-full border border-gray-600 text-sm mb-8">
              Financial Services
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              AI That Speaks
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                The Language of Finance
              </span>
            </h1>

            <p className="text-gray-300 text-xl mt-8 leading-9 max-w-2xl">
              From client onboarding to invoice automation and fraud detection,
              TruBot AI helps financial services firms cut costs, reduce risk,
              and serve clients faster.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold">
                Book a Demo
              </button>

              <button className="border border-gray-500 px-8 py-4 rounded-xl hover:bg-white/10">
                Explore Products
              </button>

            </div>

            <div className="mt-12 space-y-5">

              <div className="flex items-center gap-4">
                <span>✅</span>
                <p className="text-gray-300">Bank-Grade Security</p>
              </div>

              <div className="flex items-center gap-4">
                <span>✅</span>
                <p className="text-gray-300">Compliant Workflows</p>
              </div>

              <div className="flex items-center gap-4">
                <span>✅</span>
                <p className="text-gray-300">24/7 Client Support</p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <img
              src="/images/products/financial-ai.jpeg"
              alt="Financial Hero"
              className="rounded-3xl shadow-2xl w-full"
            />

          </div>

        </div>

      </section>

      {/* ================= CHALLENGE SECTION ================= */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-blue-600 uppercase tracking-[4px] font-semibold text-center">
            THE CHALLENGE
          </p>

          <h2 className="text-5xl font-bold text-center text-slate-900 mt-4">
            Legacy processes are
            <br />
            holding you back
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            <div className="rounded-3xl border p-10 shadow-sm">

              <div className="text-4xl">📄</div>

              <h3 className="text-3xl font-bold mt-8 text-slate-900">
                Client onboarding is slow and paper-heavy
              </h3>

              <p className="text-gray-600 mt-6 leading-8">
                Manual document collection and verification creates
                bottlenecks that frustrate clients and delay revenue.
              </p>

            </div>

            <div className="rounded-3xl border p-10 shadow-sm">

              <div className="text-4xl">📞</div>

              <h3 className="text-3xl font-bold mt-8 text-slate-900">
                Repetitive queries drain your advisors' time
              </h3>

              <p className="text-gray-600 mt-6 leading-8">
                Your best people spend hours answering balance,
                status and policy questions every day.
              </p>

            </div>

            <div className="rounded-3xl border p-10 shadow-sm">

              <div className="text-4xl">🧾</div>

              <h3 className="text-3xl font-bold mt-8 text-slate-900">
                Invoice processing is manual and error-prone
              </h3>

              <p className="text-gray-600 mt-6 leading-8">
                Spreadsheets, email chains and manual review
                leave you vulnerable to delays and costly mistakes.
              </p>

            </div>

          </div>

        </div>
        </section>

        {/* ================= OUR SOLUTIONS ================= */}

<section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="text-blue-600 uppercase tracking-[4px] font-semibold">
        OUR SOLUTIONS
      </p>

      <h2 className="text-5xl font-bold text-slate-900 mt-4">
        Purpose-built AI for every
        <br />
        financial workflow
      </h2>

      <p className="text-gray-500 text-xl mt-6 max-w-3xl mx-auto">
        Three powerful products that work together to transform your operations.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-20 items-center mt-24">

      {/* LEFT */}

      <div>

        <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
          TRUAGENT
        </span>

        <h2 className="text-5xl font-bold text-slate-900 mt-8 leading-tight">
          Intelligent Client
          <br />
          Onboarding
        </h2>

        <p className="text-gray-500 text-xl leading-9 mt-8">
          Collect KYC documents, verify identity steps, and guide
          clients through onboarding automatically.
        </p>

        <div className="space-y-5 mt-10">

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">✅</div>
            <p className="text-lg text-gray-700">
              Automate document collection
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">✅</div>
            <p className="text-lg text-gray-700">
              Trigger compliance checklists
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">✅</div>
            <p className="text-lg text-gray-700">
              Reduce onboarding time by 70%
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div>

        <img
          src="/images/products/truagent-finance.jpeg"
          alt="TruAgent"
          className="rounded-3xl shadow-2xl w-full"
        />

      </div>

    </div>

  </div>

</section>

{/* ================= TRUCHAT ================= */}

<section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT IMAGE */}

      <div>

        <img
          src="/images/products/truchat-finance.jpeg"
          alt="TruChat"
          className="rounded-3xl shadow-2xl w-full"
        />

      </div>

      {/* RIGHT */}

      <div>

        <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
          TRUCHAT
        </span>

        <h2 className="text-5xl font-bold text-slate-900 mt-8 leading-tight">
          24/7 Client
          <br />
          Query Bot
        </h2>

        <p className="text-gray-500 text-xl leading-9 mt-8">
          Answer account balance questions, loan status, policy FAQs,
          and routine banking queries without advisor involvement.
        </p>

        <div className="space-y-5 mt-10">

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              ✅
            </div>
            <p className="text-lg text-gray-700">
              Works on Web, WhatsApp & Mobile App
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              ✅
            </div>
            <p className="text-lg text-gray-700">
              Escalates complex cases to human advisors
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              ✅
            </div>
            <p className="text-lg text-gray-700">
              Multilingual support
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= TRUFINANCE ================= */}

<section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <div>

        <span className="inline-block px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
          TRUFINANCE
        </span>

        <h2 className="text-5xl font-bold text-slate-900 mt-8 leading-tight">
          Smart Invoice
          <br />
          Processing
        </h2>

        <p className="text-gray-500 text-xl leading-9 mt-8">
          Auto-generate, send, chase, and reconcile invoices with AI-powered fraud detection and intelligent automation.
        </p>

        <div className="space-y-5 mt-10">

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              ✅
            </div>
            <p className="text-lg text-gray-700">
              Integrates with your accounting stack
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              ✅
            </div>
            <p className="text-lg text-gray-700">
              Flags anomalies in real time
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              ✅
            </div>
            <p className="text-lg text-gray-700">
              Reduces invoice processing time by 80%
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div>

        <img
          src="/images/products/trufinance-finance.jpeg"
          alt="TruFinance"
          className="rounded-3xl shadow-2xl w-full"
        />

      </div>

    </div>

  </div>

</section>

{/* ================= STATS ================= */}

<section className="bg-[#0F3B35] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

      <div>
        <h2 className="text-6xl font-bold text-white">70%</h2>
        <p className="text-gray-300 mt-4 text-lg">
          Faster Client Onboarding
        </p>
      </div>

      <div>
        <h2 className="text-6xl font-bold text-white">80%</h2>
        <p className="text-gray-300 mt-4 text-lg">
          Reduction in Invoice Processing Time
        </p>
      </div>

      <div>
        <h2 className="text-6xl font-bold text-white">95%</h2>
        <p className="text-gray-300 mt-4 text-lg">
          Query Automation Rate
        </p>
      </div>

      <div>
        <h2 className="text-6xl font-bold text-white">$2.1M</h2>
        <p className="text-gray-300 mt-4 text-lg">
          Average Annual Ops Savings
        </p>
      </div>

    </div>

  </div>

</section>

{/* ================= COMPLIANCE & SECURITY ================= */}

<section className="bg-[#F7FAFC] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}

      <div>
        <img
          src="/images/products/security-financial.jpeg"
          alt="Security"
          className="w-full rounded-3xl shadow-xl"
        />
      </div>

      {/* RIGHT CONTENT */}

      <div>

        <p className="text-[#14B8A6] uppercase tracking-[6px] text-sm font-semibold mb-6">
          Compliance & Security
        </p>

        <h2 className="text-5xl font-bold text-[#12372A] leading-tight mb-8">
          Built for Regulated
          <br />
          Environments
        </h2>

        <p className="text-gray-500 text-xl leading-9 mb-12">
          TruBot AI is designed with financial compliance in mind.
          Every conversation is logged, every action is auditable,
          and your client data never leaves your control.
        </p>

        <div className="space-y-8">

          <div className="flex gap-5">

            <div className="w-16 h-16 rounded-2xl bg-[#E6FAF5] flex items-center justify-center text-3xl">
              🔒
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#12372A]">
                Data Encryption
              </h3>

              <p className="text-gray-500 mt-2 text-lg">
                AES-256 encryption at rest and in transit
              </p>
            </div>

          </div>

          <div className="flex gap-5">

            <div className="w-16 h-16 rounded-2xl bg-[#E6FAF5] flex items-center justify-center text-3xl">
              📄
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#12372A]">
                Audit Trails
              </h3>

              <p className="text-gray-500 mt-2 text-lg">
                Complete, timestamped activity logging
              </p>
            </div>

          </div>

          <div className="flex gap-5">

            <div className="w-16 h-16 rounded-2xl bg-[#E6FAF5] flex items-center justify-center text-3xl">
              🛡️
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#12372A]">
                Role-Based Access Control
              </h3>

              <p className="text-gray-500 mt-2 text-lg">
                Granular permissions for every user
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= INDUSTRY SOLUTIONS ================= */}

<section className="bg-[#F8FAFC] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-center uppercase tracking-[8px] text-blue-600 text-sm mb-6">
      Industry Solutions
    </p>

    <h2 className="text-4xl md:text-6xl font-bold text-center text-[#0B2E2F] mb-20">
      Tailored for every corner
      <br />
      of finance
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-3xl border border-blue-100 p-10 shadow-sm hover:shadow-xl transition">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-8">
          🏦
        </div>

        <h3 className="text-3xl font-bold text-[#0B2E2F] mb-4">
          Banks & Credit Unions
        </h3>

        <p className="text-gray-500 text-lg leading-8">
          Automate retail banking FAQs and loan application queries.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl border border-green-100 p-10 shadow-sm hover:shadow-xl transition">
        <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-3xl mb-8">
          🛡️
        </div>

        <h3 className="text-3xl font-bold text-[#0B2E2F] mb-4">
          Insurance Firms
        </h3>

        <p className="text-gray-500 text-lg leading-8">
          Handle claims status, policy renewals, and document requests.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl border border-purple-100 p-10 shadow-sm hover:shadow-xl transition">
        <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl mb-8">
          🧾
        </div>

        <h3 className="text-3xl font-bold text-[#0B2E2F] mb-4">
          Accounting & Bookkeeping
        </h3>

        <p className="text-gray-500 text-lg leading-8">
          Automate invoice chasing and financial report generation.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-3xl border border-yellow-100 p-10 shadow-sm hover:shadow-xl transition">
        <div className="w-16 h-16 rounded-2xl bg-yellow-50 flex items-center justify-center text-3xl mb-8">
          📈
        </div>

        <h3 className="text-3xl font-bold text-[#0B2E2F] mb-4">
          Wealth Management
        </h3>

        <p className="text-gray-500 text-lg leading-8">
          Schedule advisor calls and deliver portfolio updates via bot.
        </p>
      </div>

    </div>

  </div>
</section>

{/* ================= GETTING STARTED ================= */}

<section className="bg-[#F8FAFC] py-24 relative overflow-hidden">

  <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbe3ef_1px,transparent_1px),linear-gradient(to_bottom,#dbe3ef_1px,transparent_1px)] bg-[size:120px_120px] opacity-60"></div>

  <div className="relative max-w-6xl mx-auto px-6">

    <p className="text-center uppercase tracking-[8px] text-blue-600 text-sm mb-5">
      Getting Started
    </p>

    <h2 className="text-4xl md:text-6xl font-bold text-center text-[#0B2E2F] mb-20">
      Up and running in three
      <br />
      steps
    </h2>

    <div className="space-y-20">

      {/* STEP 1 */}

      <div className="text-center max-w-3xl mx-auto">

        <div className="relative inline-block">

          <div className="w-28 h-28 rounded-3xl bg-white shadow-lg border flex items-center justify-center text-5xl">
            🔌
          </div>

          <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            01
          </div>

        </div>

        <h3 className="text-4xl font-bold mt-10 text-[#0B2E2F]">
          Connect your CRM or core banking system
        </h3>

        <p className="mt-6 text-xl text-gray-500 leading-9">
          Seamlessly integrate with your existing infrastructure —
          no custom engineering required.
        </p>

      </div>

      {/* STEP 2 */}

      <div className="text-center max-w-3xl mx-auto">

        <div className="relative inline-block">

          <div className="w-28 h-28 rounded-3xl bg-white shadow-lg border flex items-center justify-center text-5xl">
            🔗
          </div>

          <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            02
          </div>

        </div>

        <h3 className="text-4xl font-bold mt-10 text-[#0B2E2F]">
          Set up automated workflows (no code)
        </h3>

        <p className="mt-6 text-xl text-gray-500 leading-9">
          Use our visual builder to design onboarding flows,
          query routing, and invoice pipelines.
        </p>

      </div>

      {/* STEP 3 */}

      <div className="text-center max-w-3xl mx-auto">

        <div className="relative inline-block">

          <div className="w-28 h-28 rounded-3xl bg-white shadow-lg border flex items-center justify-center text-5xl">
            🚀
          </div>

          <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            03
          </div>

        </div>

        <h3 className="text-4xl font-bold mt-10 text-[#0B2E2F]">
          Deploy across client touchpoints in minutes
        </h3>

        <p className="mt-6 text-xl text-gray-500 leading-9">
          Go live on web, mobile, WhatsApp, and email —
          all from a single dashboard.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= TESTIMONIAL ================= */}

<section className="bg-white py-24">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-5xl text-blue-600 mx-auto mb-10">
      ❝
    </div>

    <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E2F] leading-tight">
      "We cut our client onboarding
      time from 5 days to under
      6 hours with TruBot.
      The compliance team finally
      sleeps at night."
    </h2>

    <div className="mt-16 flex items-center justify-center gap-5">

      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-[#0B2E2F]">
        JM
      </div>

      <div className="text-left">
        <h3 className="font-bold text-2xl text-[#0B2E2F]">
          James Mitchell
        </h3>

        <p className="text-gray-500 text-lg">
          Head of Operations, Regional Bank
        </p>
      </div>

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="py-28 bg-[#052F2E]">

  <div className="max-w-5xl mx-auto px-6">

    <div className="rounded-[40px] bg-gradient-to-br from-[#083A39] to-[#052F2E] p-14 text-center border border-white/10">

      <h2 className="text-5xl font-bold text-white leading-tight">
        Modernise Your Financial
        <br />
        Operations with AI
      </h2>

      <p className="text-gray-300 text-xl mt-8 max-w-3xl mx-auto leading-9">
        Join the leading financial institutions already
        transforming their workflows with TruBot AI.
      </p>

      <button className="mt-12 bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-2xl text-white text-xl font-semibold shadow-xl">
        Book a Free Demo →
      </button>

    </div>

  </div>

</section>

{/* ================= FOOTER ================= */}

<footer className="bg-[#052F2E] text-gray-300 pt-24 pb-12 border-t border-white/10">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-5 gap-12">

<div>
<h2 className="text-4xl font-bold text-white">
TruBot <span className="text-green-400">AI</span>
</h2>

<p className="mt-6 leading-8">
Enterprise AI solutions for the modern financial workspace.
</p>

<div className="flex gap-4 mt-8">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">in</div>
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">𝕏</div>
</div>

</div>

<div>
<h3 className="text-white font-semibold mb-6">Products</h3>
<ul className="space-y-4">
<li>TruAgent</li>
<li>TruChat</li>
<li>TruFinance</li>
<li>Integrations</li>
</ul>
</div>

<div>
<h3 className="text-white font-semibold mb-6">Solutions</h3>
<ul className="space-y-4">
<li>Financial Services</li>
<li>Healthcare</li>
<li>Retail</li>
<li>Logistics</li>
</ul>
</div>

<div>
<h3 className="text-white font-semibold mb-6">Company</h3>
<ul className="space-y-4">
<li>About</li>
<li>Careers</li>
<li>Blog</li>
<li>Contact</li>
</ul>
</div>

<div>
<h3 className="text-white font-semibold mb-6">Resources</h3>
<ul className="space-y-4">
<li>Documentation</li>
<li>API Reference</li>
<li>Security</li>
<li>Status</li>
</ul>
</div>

</div>

<div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
© 2026 TruBot AI. All rights reserved.
</div>

</div>

</footer>
    
    </main>
  );
}

      

   


    