"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import PageLayout from "../shared/PageLayout";
import Button from "../shared/Button";

const taglines = [
  "> Empower. Automate. Innovate.",
  "> Redefine Workflows. Accelerate Growth.",
  "> Unlock Enterprise Intelligence.",
];

const MainHero: FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2950);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-light overflow-hidden"
      role="region"
      aria-labelledby="main-hero-heading"
    >
      {/* 🎨 Layer 1 – Background Gradient */}
      <div
        className="absolute inset-0 z-0 animate-gradient-flow"
        aria-hidden="true"
      />

      {/* 🌌 Floating particles */}
      <Image
        src="/svg/bg-particles.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 object-cover opacity-10 float"
        width={200}
        height={200}
      />

      {/* 🔆 Radial light burst */}
      <div
        className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-electric opacity-10 blur-[100px] rounded-full z-0"
        aria-hidden="true"
      />

      {/* 🔄 Pulsing Nodes */}
      <div
        className="absolute top-[20%] left-[30%] w-3 h-3 rounded-full bg-electric opacity-60 node-pulse jitter z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-[40%] left-[70%] w-2 h-2 rounded-full bg-teal opacity-60 node-pulse jitter z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-[60%] left-[50%] w-2.5 h-2.5 rounded-full bg-electric opacity-50 node-pulse jitter z-0"
        aria-hidden="true"
      />

      <PageLayout
        id="hero"
        aria-label="hero-section"
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* 🤖 AI Icon */}
        <div className="mb-6 group relative z-10">
          <Image
            src="/svg/ai-icon.svg"
            alt="AI system illustration"
            width={200}
            height={200}
            priority
            loading="eager"
            className="transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
          />
        </div>

        {/* 🧠 Headline */}
        <h1
          id="main-hero-heading"
          className="text-5xl sm:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-electric to-navy leading-tight mb-6 fade-in slide-in-up"
        >
          Transform Your Business with Intelligent AI Solutions
        </h1>

        {/* 🗣 Subheadline */}
        <p className="text-lg sm:text-xl text-navy/70 max-w-2xl mb-4 fade-in slide-in-up animation-delay-200 font-body">
          Powerful AI agents, voice bots, chatbots, and business solutions
          designed to revolutionize how enterprises operate in 2025 and beyond.
        </p>

        {/* 💬 Typing Simulation */}
        <p className="bg-gray-soft px-4 py-2 rounded-full inline-block text-sm font-mono text-navy/80 shadow fade-in slide-in-up animation-delay-300">
          🤖 TruChat:{" "}
          <span role="status" aria-live="polite" className="typing-effect">
            How can I help you today?
          </span>
        </p>

        {/* 🔁 Rotating Tagline */}
        <p
          className="text-md sm:text-lg text-electric font-mono mt-6 mb-10 transition-opacity duration-1000 fade-in slide-in-up animation-delay-400 typing-effect max-w-md"
          aria-live="polite"
        >
          {taglines[currentTagline]}
        </p>

        {/* 🔘 CTAs */}
        <div className="flex flex-wrap justify-center gap-4 fade-in scale-up animation-delay-500">
          <Button
            href="/demo"
            variant="primary"
            animate
            label="Try TruBot Now"
            ariaLabel="Request a demo from TruBot AI"
          />
          <Button
            href="/sales"
            variant="teal"
            animate
            label="Talk to Our Team"
            ariaLabel="Explore TruBot AI solutions"
          />
        </div>

        {/* 📊 Stats */}
        <ul
          role="list"
          className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center fade-in slide-in-up animation-delay-600"
        >
          {[
            { value: "85%", label: "Reduction in Manual Tasks" },
            { value: "$3.2M", label: "Average Annual Savings" },
            { value: "93%", label: "Customer Retention Rate" },
            { value: "250+", label: "AI Solutions Offered" },
          ].map((metric, index) => (
            <li
              key={index}
              role="listitem"
              className="bg-light shadow rounded-xl p-6 hover-scale hover-glow transition"
            >
              <div className="text-2xl font-heading text-electric mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-navy/70 font-body">
                {metric.label}
              </div>
            </li>
          ))}
        </ul>
      </PageLayout>

      {/* ⬇️ Scroll Indicator */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-electric opacity-60 animate-bounce z-10 cursor-pointer"
        onClick={() =>
          document
            .getElementById("overview")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll down to Overview section"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14m0 0l-5-5m5 5l5-5" />
        </svg>
      </div>
    </div>
  );
};

export default MainHero;
