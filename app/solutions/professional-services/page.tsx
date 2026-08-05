"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProfessionalServicesPage() {
  return (
    <main>
        {/* ================= HERO SECTION ================= */}

<section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-20 lg:py-28">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}

      <div>

        <span className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6">
          ✨ AI for firms that bill by the hour
        </span>

        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">

          Spend Less Time on
          <br />

          Admin.
          <br />

          <span className="text-cyan-400">
            More Time on
            <br />
            Clients.
          </span>

        </h1>

        <p className="text-lg text-slate-300 leading-8 mb-8 max-w-xl">

          TruBot AI automates client intake,
          scheduling, document collection,
          and follow-ups — so lawyers,
          consultants, and agencies can
          focus on billable work,
          not busywork.

        </p>

        <div className="flex flex-wrap gap-4 mb-10">

          <Link
            href="/contact"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Book a Demo →
          </Link>

          <Link
            href="#use-cases"
            className="border border-slate-500 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold transition"
          >
            See Use Cases
          </Link>

        </div>

        <div className="space-y-4 text-slate-300">

          <div className="flex items-center gap-3">
            <span className="text-cyan-400">✔️</span>
            <span>Client confidentiality built-in</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-cyan-400">✔️</span>
            <span>No-code setup</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-cyan-400">✔️</span>
            <span>Works with your existing tools</span>
          </div>

        </div>

      </div>

      {/* Right Image */}

      <div className="relative">

        <div className="absolute -top-8 -left-8 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <Image
          src="/images/products/hero.jpeg"
          alt="Professional Services AI"
          width={700}
          height={650}
          className="relative w-full rounded-3xl shadow-2xl"
        />

      </div>

    </div>

  </div>

</section>

{/* ================= PROBLEM SECTION ================= */}

<section className="py-20 bg-white">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-slate-900 leading-tight max-w-3xl">
      Your firm runs on time.
      <br />
      So why waste so much
      <br />
      of it?
    </h2>

    <p className="mt-8 text-2xl text-slate-500 max-w-3xl leading-10">
      The admin tax on professional services is
      real — and it's eating into the work clients
      actually pay you for.
    </p>

    <div className="mt-16 grid md:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center text-4xl mb-10">
          📋
        </div>

        <h3 className="text-3xl font-semibold text-slate-900 leading-snug">
          Client intake forms and onboarding are slow and manual
        </h3>

      </div>

      {/* Card 2 */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center text-4xl mb-10">
          📅
        </div>

        <h3 className="text-3xl font-semibold text-slate-900 leading-snug">
          Scheduling back-and-forth eats hours every week
        </h3>

      </div>

      {/* Card 3 */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center text-4xl mb-10">
          ✉️
        </div>

        <h3 className="text-3xl font-semibold text-slate-900 leading-snug">
          Following up on documents and proposals falls through the cracks
        </h3>

      </div>

    </div>

  </div>

</section>
{/* ================= AI SOLUTIONS ================= */}

<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center mb-16">
      <span className="text-cyan-600 font-semibold uppercase tracking-widest">
        AI Solutions
      </span>

      <h2 className="text-4xl font-bold text-slate-900 mt-4">
        Powered by TruBot AI
      </h2>

      <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5">
        Our intelligent AI assistants automate client communication,
        project workflows and document management for professional
        service organizations.
      </p>
    </div>

    <div className="space-y-20">

      {/* TruAgent */}

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        <div>
          <Image
            src="/images/products/services-truagent.jpeg"
            alt="TruAgent"
            width={650}
            height={500}
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>

          <span className="text-cyan-600 font-semibold uppercase">
            TruAgent
          </span>

          <h3 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
            AI Client Assistant
          </h3>

          <p className="text-slate-600 leading-8 mb-8">
            TruAgent provides instant responses to client queries,
            schedules appointments, tracks requests and delivers
            personalized support 24/7.
          </p>

          <ul className="space-y-4 text-slate-700">

            <li>✔️ 24/7 Client Support</li>

            <li>✔️ Appointment Scheduling</li>

            <li>✔️ Lead Qualification</li>

            <li>✔️ Automated Follow-ups</li>

          </ul>

        </div>

      </div>

      {/* TruVoice */}

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        <div className="order-2 lg:order-1">

          <span className="text-cyan-600 font-semibold uppercase">
            TruVoice
          </span>

          <h3 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
            Voice AI Assistant
          </h3>

          <p className="text-slate-600 leading-8 mb-8">
            Handle incoming calls intelligently using AI voice agents
            capable of answering queries, routing calls and collecting
            customer information automatically.
          </p>

          <ul className="space-y-4 text-slate-700">

            <li>✔️ AI Phone Calls</li>

            <li>✔️ Smart Call Routing</li>

            <li>✔️ Voice Appointment Booking</li>

            <li>✔️ Multilingual Support</li>

          </ul>

        </div>

        <div className="order-1 lg:order-2">

          <Image
            src="/images/products/truvoice.jpeg"
            alt="TruVoice"
            width={650}
            height={500}
            className="rounded-3xl shadow-xl"
          />

        </div>

      </div>
      {/* TruChat */}

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        <div>

          <Image
            src="/images/products/services-truchat.jpeg"
            alt="TruChat"
            width={650}
            height={500}
            className="rounded-3xl shadow-xl"
          />

        </div>

        <div>

          <span className="text-cyan-600 font-semibold uppercase">
            TruChat
          </span>

          <h3 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
            AI Knowledge Assistant
          </h3>

          <p className="text-slate-600 leading-8 mb-8">
            Instantly answer client questions, search company knowledge,
            retrieve documents and automate conversations using
            intelligent conversational AI.
          </p>

          <ul className="space-y-4 text-slate-700">

            <li>✔️ Instant Client Answers</li>

            <li>✔️ Document Search</li>

            <li>✔️ Knowledge Base Integration</li>

            <li>✔️ Secure AI Conversations</li>

          </ul>

        </div>

      </div>

    </div>

    {/* Bottom Cards */}

    <div className="grid md:grid-cols-3 gap-8 mt-20">

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-6 text-3xl">
          ⚡
        </div>

        <h4 className="text-xl font-bold text-slate-900 mb-3">
          Faster Operations
        </h4>

        <p className="text-slate-600">
          Automate repetitive tasks and improve operational efficiency.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-6 text-3xl">
          🤝
        </div>

        <h4 className="text-xl font-bold text-slate-900 mb-3">
          Better Client Experience
        </h4>

        <p className="text-slate-600">
          Deliver quick responses and personalized client engagement.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-6 text-3xl">
          📈
        </div>

        <h4 className="text-xl font-bold text-slate-900 mb-3">
          Business Growth
        </h4>

        <p className="text-slate-600">
          Scale your professional services with AI-powered automation.
        </p>

      </div>

    </div>

  </div>
</section>

{/* ================= STATISTICS SECTION ================= */}

<section className="py-20 bg-slate-900 text-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center mb-14">

      <span className="text-cyan-400 font-semibold uppercase tracking-widest">
        Proven Results
      </span>

      <h2 className="text-4xl font-bold mt-4">
        Transforming Professional Services
      </h2>

      <p className="text-slate-300 mt-5 max-w-3xl mx-auto text-lg">
        Empower your organization with AI-powered automation,
        faster communication and intelligent client engagement.
      </p>

    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-slate-800 rounded-2xl p-8 text-center">
        <h3 className="text-5xl font-bold text-cyan-400">95%</h3>
        <p className="mt-3 text-slate-300">Client Satisfaction</p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-8 text-center">
        <h3 className="text-5xl font-bold text-cyan-400">80%</h3>
        <p className="mt-3 text-slate-300">Workflow Automation</p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-8 text-center">
        <h3 className="text-5xl font-bold text-cyan-400">24/7</h3>
        <p className="mt-3 text-slate-300">AI Availability</p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-8 text-center">
        <h3 className="text-5xl font-bold text-cyan-400">60%</h3>
        <p className="mt-3 text-slate-300">Operational Savings</p>
      </div>

    </div>

  </div>
</section>

{/* ================= WHO WE SERVE ================= */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center mb-16">

      <span className="text-cyan-600 font-semibold uppercase tracking-widest">
        Who We Serve
      </span>

      <h2 className="text-4xl font-bold text-slate-900 mt-4">
        Built For Every Professional Service Business
      </h2>

      <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5">
        Our AI platform adapts to different industries and helps
        businesses automate operations while delivering better
        customer experiences.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-slate-50 rounded-2xl p-8 shadow hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Consulting Firms
        </h3>

        <p className="text-slate-600">
          Streamline consulting workflows and improve client engagement.
        </p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 shadow hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Legal Services
        </h3>

        <p className="text-slate-600">
          Manage documents, appointments and legal support efficiently.
        </p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 shadow hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Accounting Firms
        </h3>

        <p className="text-slate-600">
          Automate finance workflows and client communication.
        </p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 shadow hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Marketing Agencies
        </h3>

        <p className="text-slate-600">
          Enhance campaign management and customer interactions using AI.
        </p>
      </div>

    </div>

  </div>
</section>

{/* ================= WORKFLOW SECTION ================= */}

<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center mb-16">

      <span className="text-cyan-600 font-semibold uppercase tracking-widest">
        AI Workflow
      </span>

      <h2 className="text-4xl font-bold text-slate-900 mt-4">
        How TruBot AI Works
      </h2>

      <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5">
        Our intelligent workflow simplifies every stage of your
        professional services process—from client inquiry to project
        completion.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Step 1 */}

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="w-16 h-16 rounded-full bg-cyan-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
          1
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Client Request
        </h3>

        <p className="text-slate-600">
          AI receives inquiries through chat, email or voice and
          instantly understands customer needs.
        </p>

      </div>

      {/* Step 2 */}

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="w-16 h-16 rounded-full bg-cyan-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
          2
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Intelligent Analysis
        </h3>

        <p className="text-slate-600">
          AI analyzes requests, searches company knowledge and prepares
          the best response automatically.
        </p>

      </div>

      {/* Step 3 */}

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="w-16 h-16 rounded-full bg-cyan-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
          3
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Workflow Automation
        </h3>

        <p className="text-slate-600">
          Tasks, approvals, reminders and documentation are automated
          without manual intervention.
        </p>

      </div>

      {/* Step 4 */}

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="w-16 h-16 rounded-full bg-cyan-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
          4
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Better Outcomes
        </h3>

        <p className="text-slate-600">
          Deliver faster services, happier clients and improved business
          productivity with AI.
        </p>

      </div>

    </div>

  </div>
</section>

{/* ================= COMPATIBILITY SECTION ================= */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-14 items-center">

      <div>

        <span className="text-cyan-600 font-semibold uppercase tracking-widest">
          Compatibility
        </span>

        <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
          Seamless Integration With Your Existing Systems
        </h2>

        <p className="text-lg text-slate-600 leading-8 mb-8">
          TruBot AI connects effortlessly with CRMs, ERPs,
          communication platforms and cloud applications,
          allowing your team to automate workflows without
          replacing existing tools.
        </p>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-100 rounded-xl p-4 font-semibold">
            ✓ CRM Platforms
          </div>

          <div className="bg-slate-100 rounded-xl p-4 font-semibold">
            ✓ ERP Systems
          </div>

          <div className="bg-slate-100 rounded-xl p-4 font-semibold">
            ✓ Microsoft 365
          </div>

          <div className="bg-slate-100 rounded-xl p-4 font-semibold">
            ✓ Google Workspace
          </div>

          <div className="bg-slate-100 rounded-xl p-4 font-semibold">
            ✓ Slack
          </div>

          <div className="bg-slate-100 rounded-xl p-4 font-semibold">
            ✓ APIs & Webhooks
          </div>

        </div>

      </div>

      <div>

        <Image
          src="/images/products/services-compatibility.jpeg"
          alt="Compatibility"
          width={700}
          height={550}
          className="rounded-3xl shadow-xl"
        />

      </div>

    </div>

  </div>
</section>

{/* ================= CTA ================= */}

<section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">

  <div className="max-w-5xl mx-auto text-center px-6">

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready To Transform Your Professional Services?
    </h2>

    <p className="text-xl text-cyan-100 mb-10">
      Discover how TruBot AI helps organizations automate
      operations, improve client experiences and accelerate growth.
    </p>

    <div className="flex flex-wrap justify-center gap-5">

      <Link
        href="/contact"
        className="bg-white text-cyan-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
      >
        Schedule Demo
      </Link>

      <Link
        href="/solutions"
        className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-700 transition"
      >
        Explore Solutions
      </Link>

    </div>

  </div>

</section>

{/* ================= FOOTER ================= */}

<footer className="bg-slate-950 text-white pt-16 pb-8">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Company */}

      <div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-5">
          TruBot AI
        </h3>

        <p className="text-slate-400 leading-7">
          Empowering businesses with intelligent AI solutions that
          automate operations, improve productivity and deliver
          exceptional customer experiences.
        </p>

      </div>

      {/* Solutions */}

      <div>

        <h4 className="text-lg font-semibold mb-5">
          Solutions
        </h4>

        <ul className="space-y-3 text-slate-400">

          <li><Link href="/solutions/manufacturing">Manufacturing</Link></li>

          <li><Link href="/solutions/retail">Retail</Link></li>

          <li><Link href="/solutions/healthcare">Healthcare</Link></li>

          <li><Link href="/solutions/financial">Financial</Link></li>

          <li><Link href="/solutions/professional-services">Professional Services</Link></li>

        </ul>

      </div>

      {/* Company */}

      <div>

        <h4 className="text-lg font-semibold mb-5">
          Company
        </h4>

        <ul className="space-y-3 text-slate-400">

          <li><Link href="/about">About Us</Link></li>

          <li><Link href="/contact">Contact</Link></li>

          <li><Link href="/careers">Careers</Link></li>

          <li><Link href="/privacy-policy">Privacy Policy</Link></li>

        </ul>

      </div>

      {/* Contact */}

      <div>

        <h4 className="text-lg font-semibold mb-5">
          Contact
        </h4>

        <ul className="space-y-3 text-slate-400">

          <li>📧 info@trubot.ai</li>

          <li>🌐 www.trubot.ai</li>

          <li>🤖 AI Powered Automation</li>

        </ul>

      </div>

    </div>

    <div className="border-t border-slate-800 mt-14 pt-6 text-center text-slate-500">

      © 2026 TruBot AI. All Rights Reserved.

    </div>

  </div>

</footer>

    </main>
  );
}