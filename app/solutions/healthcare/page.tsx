export default function HealthcarePage() {
  return (
    <main className="bg-white overflow-x-hidden">

     {/* ================= HERO SECTION ================= */}

<section className="relative overflow-hidden bg-gradient-to-br from-[#F7FFFD] via-[#F4FBFF] to-[#EEF9FF]">

  <div className="max-w-7xl mx-auto px-6 py-24">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <div>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 bg-white shadow-sm">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="font-semibold text-slate-700">
            Healthcare Solutions
          </span>
        </div>

        <h1 className="mt-10 text-6xl md:text-7xl font-black leading-[1.05] text-[#123B54]">

          Give Every
          <br />

          Patient the
          <br />

          Attention They
          <br />

          <span className="bg-gradient-to-r from-[#2D6BFF] to-[#57A7FF] bg-clip-text text-transparent">
            Deserve
          </span>

        </h1>

        <p className="mt-10 text-2xl leading-10 text-gray-500 max-w-xl">

          TruBot AI automates appointment booking,
          patient reminders, and admin queries —
          so your clinical staff can focus on care,
          not calls.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6">

          <button className="bg-[#2D6BFF] hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl">

            Book a Demo →

          </button>

          <button className="border border-gray-300 bg-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-50">

            ▶️ See How It Works

          </button>

        </div>

        <div className="mt-14 space-y-5">

          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-full shadow-sm border">

            🛡️

            <span className="font-medium">
              HIPAA-aware design
            </span>

          </div>

          <br />

          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-full shadow-sm border">

            🌐

            <span className="font-medium">
              Multilingual
            </span>

          </div>

          <br />

          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-full shadow-sm border">

            🎧

            <span className="font-medium">
              24/7 Patient Support
            </span>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="relative">

        <img
          src="/images/products/healthcare-hero.jpeg"
          alt="Healthcare"
          className="w-full rounded-[40px] shadow-2xl"
        />

      </div>

    </div>

  </div>

</section>
{/* ================= THE CHALLENGE ================= */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-[6px] text-blue-600 font-semibold">
        THE CHALLENGE
      </p>

      <h2 className="mt-5 text-5xl md:text-6xl font-bold text-[#123B54] leading-tight">
        Healthcare shouldn't
        <br />
        feel this difficult
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-10 mt-20">

      {/* Card 1 */}

      <div className="bg-white rounded-[32px] border border-gray-200 p-10 shadow-sm hover:shadow-xl transition">

        <div className="w-20 h-20 rounded-3xl bg-red-50 flex items-center justify-center text-5xl">
          📞
        </div>

        <h3 className="mt-8 text-3xl font-bold text-[#123B54] leading-snug">
          Front desks are overwhelmed
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-500">
          Staff spend hours answering calls,
          scheduling appointments and handling
          repetitive patient queries.
        </p>

      </div>

      {/* Card 2 */}

      <div className="bg-white rounded-[32px] border border-gray-200 p-10 shadow-sm hover:shadow-xl transition">

        <div className="w-20 h-20 rounded-3xl bg-yellow-50 flex items-center justify-center text-5xl">
          📅
        </div>

        <h3 className="mt-8 text-3xl font-bold text-[#123B54] leading-snug">
          Missed appointments cost revenue
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-500">
          No-shows create scheduling gaps,
          increase costs and reduce patient
          satisfaction.
        </p>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-[32px] border border-gray-200 p-10 shadow-sm hover:shadow-xl transition">

        <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center text-5xl">
          ⏰
        </div>

        <h3 className="mt-8 text-3xl font-bold text-[#123B54] leading-snug">
          Patients expect instant answers
        </h3>

        <p className="mt-6 text-lg leading-9 text-gray-500">
          Patients want immediate answers
          about appointments, insurance and
          treatment information.
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

      <h2 className="text-5xl font-bold text-[#12372A] mt-4">
        Purpose-built AI for
        <br />
        modern healthcare
      </h2>

      <p className="text-gray-500 text-xl mt-6 max-w-3xl mx-auto">
        Three AI-powered products that automate patient communication,
        improve operational efficiency and reduce administrative work.
      </p>

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
💬 TRUCHAT
</span>

<h2 className="text-5xl font-bold text-[#12372A] mt-8 leading-tight">
Answer patient
<br />
questions instantly
</h2>

<p className="text-gray-500 text-xl leading-9 mt-8">
Give patients instant answers for appointments,
clinic timings, insurance queries and common
healthcare questions 24/7.
</p>

<div className="space-y-5 mt-10">

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">✅</div>
<p className="text-lg text-gray-700">
Appointment booking
</p>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">✅</div>
<p className="text-lg text-gray-700">
Patient FAQs
</p>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">✅</div>
<p className="text-lg text-gray-700">
24/7 AI Patient Support
</p>
</div>

</div>

<button className="mt-12 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold">
Learn More →
</button>

</div>

{/* RIGHT */}

<div>

<img
src="/images/products/truchat-healthcare.jpeg"
alt="TruChat Healthcare"
className="rounded-3xl shadow-2xl w-full"
/>

</div>

</div>

</div>

</section>

{/* ================= TRUVOICE ================= */}

<section className="bg-white py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-20 items-center">

{/* LEFT IMAGE */}

<div>

<img
src="/images/products/truvoice-healthcare.jpeg"
alt="TruVoice"
className="rounded-3xl shadow-2xl w-full"
/>

</div>

{/* RIGHT */}

<div>

<span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
📞 TRUVOICE
</span>

<h2 className="text-5xl font-bold text-[#12372A] mt-8 leading-tight">
Never miss another
<br />
patient call
</h2>

<p className="text-gray-500 text-xl leading-9 mt-8">
Answer incoming calls automatically,
book appointments and provide prescription
updates using AI voice technology.
</p>

<div className="space-y-5 mt-10">

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">✅</div>
<p className="text-lg text-gray-700">
Appointment reminders
</p>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">✅</div>
<p className="text-lg text-gray-700">
Prescription refill requests
</p>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">✅</div>
<p className="text-lg text-gray-700">
24/7 AI voice support
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

{/* ================= TRUAGENT ================= */}

<section className="bg-white py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-20 items-center">

<div>

<span className="inline-block px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
🤖 TRUAGENT
</span>

<h2 className="text-5xl font-bold text-[#12372A] mt-8 leading-tight">
Automate patient
<br />
journeys end-to-end
</h2>

<p className="text-gray-500 text-xl leading-9 mt-8">
Automatically send reminders,
follow-ups, lab notifications
and medication alerts.
</p>

<div className="space-y-5 mt-10">

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">✅</div>
<p className="text-lg text-gray-700">Automated Follow-ups</p>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">✅</div>
<p className="text-lg text-gray-700">Lab Report Notifications</p>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">✅</div>
<p className="text-lg text-gray-700">Medication Reminders</p>
</div>

</div>

<button className="mt-12 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">
Learn More →
</button>

</div>

<div>

<img
src="/images/products/truagent-healthcare.jpeg"
alt="TruAgent"
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
<h2 className="text-6xl font-bold text-white">60%</h2>
<p className="text-gray-300 mt-4">
Reduction in Admin Work
</p>
</div>

<div>
<h2 className="text-6xl font-bold text-white">40%</h2>
<p className="text-gray-300 mt-4">
Fewer Missed Appointments
</p>
</div>

<div>
<h2 className="text-6xl font-bold text-white">24/7</h2>
<p className="text-gray-300 mt-4">
Patient Support
</p>
</div>

<div>
<h2 className="text-6xl font-bold text-white">95%</h2>
<p className="text-gray-300 mt-4">
Patient Satisfaction
</p>
</div>

</div>

</div>

</section>

{/* ================= USE CASES ================= */}

<section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">
      <p className="text-blue-600 uppercase tracking-[6px] font-semibold">
        USE CASES
      </p>

      <h2 className="text-5xl md:text-6xl font-bold text-[#12372A] mt-4 leading-tight">
        Built for every type
        <br />
        of practice
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* GP */}

      <div className="overflow-hidden rounded-[36px] border border-gray-200 shadow-xl bg-white">

        <div className="relative">

          <img
            src="/images/products/gp-clinic.jpeg"
            alt="GP Clinic"
            className="w-full h-[360px] object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent"></div>

        </div>

        <div className="relative px-10 pb-10 -mt-12">

          <div className="w-16 h-16 rounded-2xl bg-blue-50 shadow flex items-center justify-center text-3xl">
            🩺
          </div>

          <h3 className="text-3xl font-bold text-[#12372A] mt-6">
            GP & Family Clinics
          </h3>

          <p className="text-gray-500 text-xl mt-5 leading-9">
            Automate bookings, reminders and common health FAQs.
          </p>

        </div>

      </div>

      {/* Dental */}

      <div className="overflow-hidden rounded-[36px] border border-gray-200 shadow-xl bg-white">

        <div className="relative">

          <img
            src="/images/products/dental.jpeg"
            alt="Dental"
            className="w-full h-[360px] object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent"></div>

        </div>

        <div className="relative px-10 pb-10 -mt-12">

          <div className="w-16 h-16 rounded-2xl bg-green-50 shadow flex items-center justify-center text-3xl">
            😁
          </div>

          <h3 className="text-3xl font-bold text-[#12372A] mt-6">
            Dental Practices
          </h3>

          <p className="text-gray-500 text-xl mt-5 leading-9">
            Fill appointment slots automatically and reduce cancellation gaps.
          </p>

        </div>

      </div>

      {/* Hospital */}

      <div className="overflow-hidden rounded-[36px] border border-gray-200 shadow-xl bg-white">

        <div className="relative">

          <img
            src="/images/products/hospital.jpeg"
            alt="Hospital"
            className="w-full h-[360px] object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent"></div>

        </div>

        <div className="relative px-10 pb-10 -mt-12">

          <div className="w-16 h-16 rounded-2xl bg-slate-50 shadow flex items-center justify-center text-3xl">
            🏥
          </div>

          <h3 className="text-3xl font-bold text-[#12372A] mt-6">
            Hospitals & Polyclinics
          </h3>

          <p className="text-gray-500 text-xl mt-5 leading-9">
            Route patient queries to the right department instantly.
          </p>

        </div>

      </div>

      {/* Mental */}

      <div className="overflow-hidden rounded-[36px] border border-gray-200 shadow-xl bg-white">

        <div className="relative">

          <img
            src="/images/products/mental-health.jpeg"
            alt="Mental Health"
            className="w-full h-[360px] object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent"></div>

        </div>

        <div className="relative px-10 pb-10 -mt-12">

          <div className="w-16 h-16 rounded-2xl bg-purple-50 shadow flex items-center justify-center text-3xl">
            💜
          </div>

          <h3 className="text-3xl font-bold text-[#12372A] mt-6">
            Mental Health Services
          </h3>

          <p className="text-gray-500 text-xl mt-5 leading-9">
            Offer discreet, always-on intake support and appointment scheduling.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>

{/* ================= PATIENT JOURNEY ================= */}

<section className="bg-white py-24">

<div className="max-w-5xl mx-auto px-6">

<p className="text-center text-blue-600 uppercase tracking-[6px]">
Patient Journey
</p>

<h2 className="text-5xl font-bold text-center text-[#12372A] mt-4 mb-20">
Simple from booking
<br />
to follow-up
</h2>

<div className="space-y-8">

{[
"Visit Website",
"Chat with AI",
"Book Appointment",
"Receive Reminder",
"Visit Clinic",
"Receive Follow-up"
].map((step,index)=>(

<div
key={index}
className="flex items-center gap-6 bg-[#F8FBFC] rounded-2xl p-6 shadow"
>

<div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
{index+1}
</div>

<h3 className="text-2xl font-semibold text-[#12372A]">
{step}
</h3>

</div>

))}

</div>

</div>

</section>

{/* ================= GETTING STARTED ================= */}

<section className="bg-[#F8FBFC] py-24">

<div className="max-w-7xl mx-auto px-6">

<p className="text-center uppercase tracking-[6px] text-blue-600 font-semibold">
Getting Started
</p>

<h2 className="text-5xl font-bold text-center text-[#12372A] mt-4">
Launch in 3 simple steps
</h2>

<div className="grid md:grid-cols-3 gap-10 mt-20">

<div className="bg-white rounded-3xl p-10 shadow text-center">

<div className="text-6xl">🔗</div>

<h3 className="text-2xl font-bold mt-8">
Connect
</h3>

<p className="text-gray-500 mt-5">
Connect your website or booking software.
</p>

</div>

<div className="bg-white rounded-3xl p-10 shadow text-center">

<div className="text-6xl">⚙️</div>

<h3 className="text-2xl font-bold mt-8">
Configure
</h3>

<p className="text-gray-500 mt-5">
Customize conversations for your clinic.
</p>

</div>

<div className="bg-white rounded-3xl p-10 shadow text-center">

<div className="text-6xl">🚀</div>

<h3 className="text-2xl font-bold mt-8">
Go Live
</h3>

<p className="text-gray-500 mt-5">
Start helping patients within minutes.
</p>

</div>

</div>

</div>

</section>
{/* ================= TESTIMONIAL ================= */}

<section className="bg-white py-24">

<div className="max-w-4xl mx-auto px-6 text-center">

<div className="text-6xl text-blue-600">
❝
</div>

<h2 className="text-4xl font-bold text-[#12372A] leading-relaxed mt-10">
"We reduced missed appointments by 40%
and our staff finally have time to focus on patients."
</h2>

<div className="mt-12">

<div className="w-20 h-20 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-2xl font-bold">
PM
</div>

<h3 className="mt-6 text-2xl font-bold">
Practice Manager
</h3>

<p className="text-gray-500">
Multi-Speciality Clinic
</p>

</div>

</div>

</section>

{/* ================= CTA ================= */}

<section className="bg-gradient-to-r from-cyan-100 to-green-100 py-24">

<div className="max-w-5xl mx-auto px-6 text-center">

<h2 className="text-5xl font-bold text-[#12372A]">
Ready to transform
your patient experience?
</h2>

<p className="text-xl text-gray-600 mt-8">
Book your free demo today and see how TruBot AI
can automate your healthcare practice.
</p>

<button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold">
Book a Free Demo →
</button>

</div>

</section>

{/* ================= FOOTER ================= */}

<footer className="bg-[#0A3440] text-white py-20">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-4 gap-10">

<div>
<h2 className="text-4xl font-bold">
TruBot AI
</h2>

<p className="text-gray-300 mt-6">
AI-powered healthcare automation platform.
</p>

</div>

<div>

<h3 className="font-semibold mb-5">
Products
</h3>

<ul className="space-y-3 text-gray-300">
<li>TruChat</li>
<li>TruVoice</li>
<li>TruAgent</li>
</ul>

</div>

<div>

<h3 className="font-semibold mb-5">
Solutions
</h3>

<ul className="space-y-3 text-gray-300">
<li>Healthcare</li>
<li>Retail</li>
<li>Financial</li>
</ul>

</div>

<div>

<h3 className="font-semibold mb-5">
Company
</h3>

<ul className="space-y-3 text-gray-300">
<li>About</li>
<li>Contact</li>
<li>Careers</li>
</ul>

</div>

</div>

<div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">
© 2026 TruBot AI. All rights reserved.
</div>

</div>

</footer>

    </main>
  );
}