"use client";

import Image from "next/image";
import Link from "next/link";

export default function ManufacturingPage() {
  return (
    <main>


    <section className="relative bg-[#062B2D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#FF6A00] rounded-full"></div>

              <span className="uppercase tracking-[5px] text-[#FF6A00] text-sm font-semibold">
                AI-Powered Manufacturing
              </span>
            </div>

            <h1 className="text-white font-bold leading-tight text-5xl lg:text-7xl">
              Automate the{" "}
              <span className="text-[#FF6A00]">
                Factory Floor
              </span>{" "}
              and the{" "}
              <span className="text-gray-300">
                Back Office
              </span>
            </h1>

            <p className="text-gray-300 text-xl mt-8 leading-9 max-w-xl">
              TruBot AI helps manufacturers reduce downtime,
              streamline procurement, automate supplier
              communication and keep operations running 24/7
              using intelligent AI agents.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/contact"
                className="bg-[#FF6A00] hover:bg-orange-600 transition px-8 py-4 rounded-xl text-white font-semibold"
              >
                Book a Demo →
              </Link>

              <Link
                href="#use-cases"
                className="border border-gray-500 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
              >
                Explore Use Cases
              </Link>

            </div>

            <div className="grid grid-cols-2 gap-6 mt-14 text-gray-300">

              <div className="flex items-center gap-2">
                📡
                <span>ERP Integration</span>
              </div>

              <div className="flex items-center gap-2">
                🔔
                <span>Real-time Alerts</span>
              </div>

              <div className="flex items-center gap-2">
                ⚡
                <span>Zero Downtime Bots</span>
              </div>

            </div>

          </div>
          

          {/* RIGHT */}

          <div className="relative">

            <div className="rounded-3xl overflow-hidden border border-[#23494B]">

              <Image
                src="/images/products/hero-manufacturing.jpeg"
                alt="Manufacturing AI"
                width={700}
                height={550}
                className="w-full h-auto object-cover"
                priority
              />

            </div>

            <div className="absolute bottom-6 left-6 bg-[#031F20]/80 backdrop-blur rounded-xl px-6 py-3 border border-[#23494B]">

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <span className="text-gray-200">
                  SYSTEMS ONLINE
                </span>

                <span className="text-white font-semibold">
                  | 99.9% Uptime
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );


{/* ================= CHALLENGES ================= */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-[6px] text-[#FF6A00] text-sm font-semibold">
        THE CHALLENGE
      </p>

      <h2 className="mt-5 text-5xl md:text-6xl font-bold text-[#062B2D] leading-tight">
        Manufacturing operations
        <br />
        shouldn't feel this difficult
      </h2>

      <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto leading-9">
        Manufacturers struggle with disconnected systems,
        manual procurement workflows and unexpected equipment
        downtime that slows production.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-10 mt-20">

      {/* CARD 1 */}

      <div className="rounded-[32px] overflow-hidden border border-gray-200 shadow-lg bg-white">

        <img
          src="/images/products/challenge-supply.jpeg"
          alt="Supply Chain"
          className="w-full h-60 object-cover"
        />

        <div className="p-8">

          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
            🔗
          </div>

          <h3 className="text-3xl font-bold mt-7 text-[#062B2D]">
            Supply chain delays
          </h3>

          <p className="mt-5 text-gray-500 leading-8">
            Vendor updates, shipment tracking and inventory
            coordination are often handled manually.
          </p>

        </div>

      </div>

      {/* CARD 2 */}

      <div className="rounded-[32px] overflow-hidden border border-gray-200 shadow-lg bg-white">

        <img
          src="/images/products/challenge-procurement.jpeg"
          alt="Procurement"
          className="w-full h-60 object-cover"
        />

        <div className="p-8">

          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
            📄
          </div>

          <h3 className="text-3xl font-bold mt-7 text-[#062B2D]">
            Manual procurement
          </h3>

          <p className="mt-5 text-gray-500 leading-8">
            Purchase orders, invoices and approvals
            consume valuable production time.
          </p>

        </div>

      </div>

      {/* CARD 3 */}

      <div className="rounded-[32px] overflow-hidden border border-gray-200 shadow-lg bg-white">

        <img
          src="/images/products/challenge-maintenance.jpeg"
          alt="Maintenance"
          className="w-full h-60 object-cover"
        />

        <div className="p-8">

          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
            🔧
          </div>

          <h3 className="text-3xl font-bold mt-7 text-[#062B2D]">
            Unplanned downtime
          </h3>

          <p className="mt-5 text-gray-500 leading-8">
            Equipment failures and delayed maintenance
            reduce productivity and increase costs.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= OUR SOLUTIONS ================= */}

<section className="bg-[#F7FAFC] py-28">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-[6px] text-[#FF6A00] font-semibold">
        OUR SOLUTIONS
      </p>

      <h2 className="mt-5 text-5xl md:text-6xl font-bold text-[#062B2D] leading-tight">
        Purpose-built AI for
        <br />
        manufacturing
      </h2>

      <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto leading-9">
        Three AI products working together to automate
        operations, suppliers and production workflows.
      </p>

    </div>

  </div>

</section>

{/* ================= TRUAGENT ================= */}

<section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <div>

        <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm">
          TRUAGENT
        </span>

        <h2 className="text-5xl font-bold text-[#062B2D] mt-8 leading-tight">
          Intelligent
          <br />
          Production Assistant
        </h2>

        <p className="text-gray-500 text-xl leading-9 mt-8">
          Automate production workflows, work orders,
          machine monitoring and maintenance notifications
          from one intelligent AI assistant.
        </p>

        <div className="space-y-6 mt-10">

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
              ✅
            </div>
            <p className="text-lg text-gray-700">
              Production workflow automation
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
              ✅
            </div>
            <p className="text-lg text-gray-700">
              Predictive maintenance alerts
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
              ✅
            </div>
            <p className="text-lg text-gray-700">
              Live machine monitoring
            </p>
          </div>

        </div>

        <button className="mt-12 bg-[#FF6A00] hover:bg-orange-600 px-8 py-4 rounded-xl text-white font-semibold">
          Learn More →
        </button>

      </div>

      {/* RIGHT */}

      <div>

        <img
          src="/images/products/truagent.jpeg"
          alt="TruAgent Manufacturing"
          className="rounded-[32px] shadow-2xl w-full"
        />

      </div>

    </div>

  </div>

</section>

{/* ================= TRUFINANCE ================= */}

<section className="bg-[#F8FAFC] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT IMAGE */}

      <div>

        <img
          src="/images/products/trufinance.jpeg"
          alt="TruFinance Manufacturing"
          className="w-full rounded-[32px] shadow-2xl"
        />

      </div>

      {/* RIGHT */}

      <div>

        <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
          TRUFINANCE
        </span>

        <h2 className="text-5xl font-bold text-[#062B2D] mt-8 leading-tight">
          Procurement &
          <br />
          Finance Automation
        </h2>

        <p className="text-xl text-gray-500 leading-9 mt-8">
          Automate procurement workflows,
          invoice approvals, purchase orders
          and supplier payments with AI.
        </p>

        <div className="space-y-6 mt-10">

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
              ✅
            </div>

            <p className="text-lg text-gray-700">
              Purchase Order Automation
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
              ✅
            </div>

            <p className="text-lg text-gray-700">
              Invoice Approval Workflow
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
              ✅
            </div>

            <p className="text-lg text-gray-700">
              Vendor Payment Tracking
            </p>
          </div>

        </div>

        <button className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">
          Learn More →
        </button>

      </div>

    </div>

  </div>

</section>

{/* ================= TRUCHAT ================= */}

<section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <div>

        <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
          TRUCHAT
        </span>

        <h2 className="text-5xl font-bold text-[#062B2D] mt-8 leading-tight">
          AI Supplier &
          <br />
          Workforce Assistant
        </h2>

        <p className="text-gray-500 text-xl leading-9 mt-8">
          Answer supplier questions, inventory requests,
          employee enquiries and production updates
          instantly using TruChat AI.
        </p>

        <div className="space-y-6 mt-10">

          <div className="flex items-center gap-4">

            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
              ✅
            </div>

            <p className="text-lg text-gray-700">
              Supplier Communication
            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
              ✅
            </div>

            <p className="text-lg text-gray-700">
              Inventory Status Updates
            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
              ✅
            </div>

            <p className="text-lg text-gray-700">
              24×7 Employee Support
            </p>

          </div>

        </div>

        <button className="mt-12 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-white font-semibold">
          Learn More →
        </button>

      </div>

      {/* RIGHT */}

      <div>

        <img
          src="/images/products/truchat.jpeg"
          alt="TruChat Manufacturing"
          className="w-full rounded-[32px] shadow-2xl"
        />

      </div>

    </div>

  </div>

</section>

{/* ================= STATS ================= */}

<section className="bg-[#062B2D] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[6px] text-[#FF6A00] font-semibold">
        RESULTS
      </p>

      <h2 className="text-5xl md:text-6xl font-bold text-white mt-5">
        Real impact for
        <br />
        manufacturers
      </h2>

      <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-9">
        Manufacturers using TruBot AI streamline operations,
        reduce costs and improve production efficiency.
      </p>

    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

        <h3 className="text-6xl font-bold text-[#FF6A00]">
          80%
        </h3>

        <p className="text-gray-300 mt-5 text-lg leading-8">
          Faster Procurement
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

        <h3 className="text-6xl font-bold text-[#FF6A00]">
          65%
        </h3>

        <p className="text-gray-300 mt-5 text-lg leading-8">
          Less Manual Work
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

        <h3 className="text-6xl font-bold text-[#FF6A00]">
          40%
        </h3>

        <p className="text-gray-300 mt-5 text-lg leading-8">
          Lower Downtime
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

        <h3 className="text-6xl font-bold text-[#FF6A00]">
          99.9%
        </h3>

        <p className="text-gray-300 mt-5 text-lg leading-8">
          System Availability
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= INDUSTRY APPLICATIONS ================= */}

<section className="bg-[#F8FAFC] py-28">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-[6px] text-[#FF6A00] font-semibold">
        INDUSTRY APPLICATIONS
      </p>

      <h2 className="mt-5 text-5xl md:text-6xl font-bold text-[#062B2D]">
        Built for every manufacturing environment
      </h2>

      <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto leading-9">
        TruBot AI adapts to every manufacturing workflow —
        from factory operations to logistics and supply chain.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-8 mt-20">

      {/* Card 1 */}

      <div className="bg-white rounded-[30px] border border-gray-200 shadow-lg p-10 hover:shadow-2xl transition">

        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
          🏭
        </div>

        <h3 className="text-3xl font-bold text-[#062B2D] mt-8">
          Discrete Manufacturing
        </h3>

        <p className="text-gray-500 text-lg leading-8 mt-5">
          Automate production scheduling, machine monitoring,
          quality inspections and work order tracking.
        </p>

      </div>

      {/* Card 2 */}

      <div className="bg-white rounded-[30px] border border-gray-200 shadow-lg p-10 hover:shadow-2xl transition">

        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
          ⚙️
        </div>

        <h3 className="text-3xl font-bold text-[#062B2D] mt-8">
          Process Manufacturing
        </h3>

        <p className="text-gray-500 text-lg leading-8 mt-5">
          Improve batch production, compliance,
          inventory visibility and process automation.
        </p>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-[30px] border border-gray-200 shadow-lg p-10 hover:shadow-2xl transition">

        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
          🚚
        </div>

        <h3 className="text-3xl font-bold text-[#062B2D] mt-8">
          Logistics & Warehousing
        </h3>

        <p className="text-gray-500 text-lg leading-8 mt-5">
          Track shipments, automate warehouse workflows,
          inventory updates and dispatch operations.
        </p>

      </div>

      {/* Card 4 */}

      <div className="bg-white rounded-[30px] border border-gray-200 shadow-lg p-10 hover:shadow-2xl transition">

        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
          🔗
        </div>

        <h3 className="text-3xl font-bold text-[#062B2D] mt-8">
          Supply Chain Management
        </h3>

        <p className="text-gray-500 text-lg leading-8 mt-5">
          Connect suppliers, procurement teams and logistics
          with AI-powered communication and automation.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= COMPATIBILITY ================= */}

<section className="bg-white py-28">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <div>

        <p className="uppercase tracking-[6px] text-[#FF6A00] font-semibold mb-5">
          COMPATIBILITY
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-[#062B2D] leading-tight">
          Works with your
          <br />
          existing systems
        </h2>

        <p className="text-xl text-gray-500 leading-9 mt-8">
          TruBot AI integrates seamlessly with the manufacturing
          software you already use—no rip-and-replace required.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-12">

          <div className="rounded-2xl border p-6 bg-gray-50">
            <h3 className="font-bold text-xl text-[#062B2D]">SAP</h3>
            <p className="text-gray-500 mt-2">
              ERP Integration
            </p>
          </div>

          <div className="rounded-2xl border p-6 bg-gray-50">
            <h3 className="font-bold text-xl text-[#062B2D]">
              Oracle
            </h3>
            <p className="text-gray-500 mt-2">
              Manufacturing Cloud
            </p>
          </div>

          <div className="rounded-2xl border p-6 bg-gray-50">
            <h3 className="font-bold text-xl text-[#062B2D]">
              Microsoft Dynamics
            </h3>
            <p className="text-gray-500 mt-2">
              Business Central
            </p>
          </div>

          <div className="rounded-2xl border p-6 bg-gray-50">
            <h3 className="font-bold text-xl text-[#062B2D]">
              Odoo & APIs
            </h3>
            <p className="text-gray-500 mt-2">
              Custom Integrations
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div>

        <img
          src="/images/products/compatibility.jpeg"
          alt="Compatibility"
          className="w-full rounded-[32px] shadow-2xl"
        />

      </div>

    </div>

  </div>

</section>

{/* ================= IMPLEMENTATION ================= */}

<section className="bg-white py-28">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-[6px] text-orange-600 font-semibold">
        IMPLEMENTATION
      </p>

      <h2 className="text-5xl md:text-6xl font-bold text-[#0B3A39] mt-5">
        Get started in
        <br />
        three simple steps
      </h2>

      <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto leading-9">
        Deploy TruBot AI quickly with minimal disruption to your
        existing manufacturing operations.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-10 mt-24">

      {/* STEP 1 */}

      <div className="rounded-[32px] border p-10 shadow-sm text-center">

        <div className="w-24 h-24 mx-auto rounded-3xl bg-orange-100 flex items-center justify-center text-5xl">
          🔗
        </div>

        <h3 className="text-3xl font-bold mt-8 text-[#0B3A39]">
          Connect Your Systems
        </h3>

        <p className="mt-5 text-gray-500 text-lg leading-8">
          Integrate SAP, Oracle, Microsoft Dynamics,
          Odoo or any ERP using secure APIs.
        </p>

      </div>

      {/* STEP 2 */}

      <div className="rounded-[32px] border p-10 shadow-sm text-center">

        <div className="w-24 h-24 mx-auto rounded-3xl bg-blue-100 flex items-center justify-center text-5xl">
          ⚙️
        </div>

        <h3 className="text-3xl font-bold mt-8 text-[#0B3A39]">
          Configure AI Workflows
        </h3>

        <p className="mt-5 text-gray-500 text-lg leading-8">
          Build approval flows, automate production updates,
          supplier communication and alerts.
        </p>

      </div>

      {/* STEP 3 */}

      <div className="rounded-[32px] border p-10 shadow-sm text-center">

        <div className="w-24 h-24 mx-auto rounded-3xl bg-green-100 flex items-center justify-center text-5xl">
          🚀
        </div>

        <h3 className="text-3xl font-bold mt-8 text-[#0B3A39]">
          Go Live
        </h3>

        <p className="mt-5 text-gray-500 text-lg leading-8">
          Launch AI across procurement, manufacturing,
          warehouses and customer support within days.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= TESTIMONIAL ================= */}

<section className="bg-[#F8FAFC] py-28">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-5xl mx-auto">
      ❝
    </div>

    <h2 className="text-4xl md:text-5xl font-bold text-[#0B3A39] leading-relaxed mt-10">
      "TruBot AI transformed our manufacturing operations.
      Procurement is faster, downtime is lower,
      and our teams spend more time producing
      instead of chasing information."
    </h2>

    <div className="mt-14 flex items-center justify-center gap-5">

      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-[#0B3A39]">
        MR
      </div>

      <div className="text-left">

        <h3 className="text-2xl font-bold text-[#0B3A39]">
          Michael Roberts
        </h3>

        <p className="text-gray-500 text-lg">
          Operations Director, Global Manufacturing Group
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="py-28 bg-[#062B2D]">

  <div className="max-w-5xl mx-auto px-6">

    <div className="rounded-[40px] bg-gradient-to-br from-[#0B3A39] to-[#062B2D] border border-white/10 p-16 text-center">

      <h2 className="text-5xl font-bold text-white leading-tight">
        Modernise Your
        <br />
        Manufacturing with AI
      </h2>

      <p className="text-gray-300 text-xl mt-8 max-w-3xl mx-auto leading-9">
        Automate production, procurement,
        warehouse operations and supplier communication
        with TruBot AI.
      </p>

      <button className="mt-12 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold">
        Book a Free Demo →
      </button>

    </div>

  </div>

</section>

{/* ================= FOOTER ================= */}

<footer className="bg-[#062B2D] text-white pt-24 pb-12 border-t border-white/10">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-5 gap-12">

      {/* Logo */}

      <div>

        <h2 className="text-4xl font-bold">
          TruBot <span className="text-orange-500">AI</span>
        </h2>

        <p className="mt-6 text-gray-300 leading-8">
          Enterprise AI solutions helping manufacturers
          automate operations, procurement and production.
        </p>

        <div className="flex gap-4 mt-8">

          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            in
          </div>

          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            𝕏
          </div>

          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            ▶️
          </div>

        </div>

      </div>

      {/* Products */}

      <div>

        <h3 className="font-bold text-xl mb-6">
          Products
        </h3>

        <ul className="space-y-4 text-gray-300">

          <li>TruAgent</li>
          <li>TruChat</li>
          <li>TruFinance</li>
          <li>Integrations</li>

        </ul>

      </div>

      {/* Solutions */}

      <div>

        <h3 className="font-bold text-xl mb-6">
          Solutions
        </h3>

        <ul className="space-y-4 text-gray-300">

          <li>Manufacturing</li>
          <li>Healthcare</li>
          <li>Financial Services</li>
          <li>Retail</li>

        </ul>

      </div>

      {/* Company */}

      <div>

        <h3 className="font-bold text-xl mb-6">
          Company
        </h3>

        <ul className="space-y-4 text-gray-300">

          <li>About</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Contact</li>

        </ul>

      </div>

      {/* Resources */}

      <div>

        <h3 className="font-bold text-xl mb-6">
          Resources
        </h3>

        <ul className="space-y-4 text-gray-300">

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
   
