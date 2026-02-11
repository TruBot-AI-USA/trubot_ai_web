// app/products/truHealth/page.tsx
import Image from "next/image";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import { MessageCircle, Mic, CheckCircle, Calendar, Shield, BarChart3, Zap, Cpu, Database } from "lucide-react";

export const metadata = {
  title: "TruHealth – Smart AI Consultation Booking Agent | TruBot AI Healthcare",
  description: "Revolutionize healthcare appointment booking with our intelligent chatbot and voicebot. Transform patient experience with AI-powered healthcare solutions.",
  keywords: [
    "Healthcare AI",
    "Medical Chatbot",
    "Healthcare Voicebot",
    "AI Appointment Booking",
    "Telemedicine",
    "Patient Engagement",
    "Medical Consultation",
    "Healthcare Automation",
    "AI Healthcare Assistant",
    "Medical Scheduling",
    "Healthcare Technology",
    "Virtual Health Assistant",
    "Patient Communication",
    "Medical Support",
    "Healthcare Innovation",
  ],
};

const Page = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Multi-Modal Experience",
      description: "Seamless text and voice interactions in a single platform"
    },
    {
      icon: Database,
      title: "Knowledge-Enhanced Responses",
      description: "Retrieval Augmented Technology (RAG) ensures responses are grounded in your proprietary documents"
    },
    {
      icon: Cpu,
      title: "LLM Provider Flexibility",
      description: "Choose from OpenAI, Anthropic, or Open-Source Llama models with automatic fallback"
    },
    {
      icon: Shield,
      title: "Multi-Tenant Ready",
      description: "Scaleable architecture with robust security and isolation"
    },
    {
      icon: Zap,
      title: "Real-Time Performance",
      description: "Streaming responses with <2 second latency"
    },
    {
      icon: BarChart3,
      title: "Analytics-Driven",
      description: "Detailed insights into bot performance and user engagement"
    }
  ];

  const benefits = [
    {
      title: "Reduce response time",
      color: "bg-blue-600"
    },
    {
      title: "Scale support",
      color: "bg-green-600"
    },
    {
      title: "Maintain consistent quality",
      color: "bg-orange-500"
    },
    {
      title: "Access real-time analytics",
      color: "bg-purple-600"
    },
    {
      title: "Provide instant information",
      color: "bg-cyan-600"
    },
    {
      title: "Test conversational UX",
      color: "bg-pink-600"
    },
    {
      title: "Gather insights",
      color: "bg-yellow-600"
    },
    {
      title: "Iterate quickly",
      color: "bg-red-600"
    }
  ];

  return (
    <PageLayout className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Engage Customers with<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Chatbots & Voicebots</span> for SMEs
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Automate responses, qualify leads, schedule appointments and more - without writing a single line of code.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href="/products/ai-chatbots"
                  label="Try Chatbot Demo"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-105 h-12 px-6 py-3 text-base"
                />
                <Button
                  href="/products/ai-voicebots"
                  label="Try Voicebot Demo"
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:shadow-soft h-12 px-6 py-3 text-base"
                />
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="rounded-lg shadow-sm text-center border-2 transition-all hover:shadow-md hover:scale-105 text-blue-600 border-blue-100 bg-blue-50 p-4">
                  <div className="text-3xl font-bold mb-1 text-blue-600">&gt;90%</div>
                  <div className="text-base font-semibold text-gray-900 mb-1">Accuracy</div>
                </div>
                <div className="rounded-lg shadow-sm text-center border-2 transition-all hover:shadow-md hover:scale-105 text-green-600 border-green-100 bg-green-50 p-4">
                  <div className="text-3xl font-bold mb-1 text-green-600">24/7</div>
                  <div className="text-base font-semibold text-gray-900 mb-1">Availability</div>
                </div>
                <div className="rounded-lg shadow-sm text-center border-2 transition-all hover:shadow-md hover:scale-105 text-orange-500 border-orange-100 bg-orange-50 p-4">
                  <div className="text-3xl font-bold mb-1 text-orange-500">99.9%</div>
                  <div className="text-base font-semibold text-gray-900 mb-1">Uptime</div>
                </div>
              </div>
            </div>
            
            {/* Right Image - WITH FLOAT ANIMATION */}
            <div className="relative">
              {/* Main image container with inline float animation */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{
                  animation: 'floatUpDown 6s ease-in-out infinite',
                  transform: 'translateY(0px)'
                }}
              >
                <Image
                  src="/images/products/dashboard.jpg"
                  alt="Healthcare AI Chatbot Interface showing patient engagement dashboard"
                  width={600}
                  height={450}
                  className="w-full h-[450px] object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add the float animation definition inline */}
        <style>{`
          @keyframes floatUpDown {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Comprehensive Next-Generation Conversational AI Platform"
            subtitle="Create, deploy and manage intelligent chatbots with voice capabilities and knowledge base integration through a modern, intuitive interface."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full">
              <div className="rounded-2xl shadow-lg overflow-hidden h-[750px]">
                <Image
                  src="/images/products/leftimg.jpeg"
                  alt="Patients Using AI Healthcare Assistant"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right side - Benefits content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Transform Customer Experience
                </h2>
              </div>
              
              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
                    <div className={`w-10 h-10 ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1 text-center flex items-center justify-center">{benefit.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create exceptional customer experiences, reduce costs and drive business growth.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Started Today
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Schedule a demo to see how our AI booking agent can transform your practice.
              </p>
              <Button
                  href="/consultation"
                  label="Book A Consultation"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-105 h-12 px-6 py-3 text-base"
                />
              <div className="space-y-4">
                <Button
                  href="/demo"
                  label="Try Chatbot Demo"
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all w-full border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:shadow-soft h-12 px-6 py-3 text-base"
                />



                
                
                <Button
                  href="/try-assistant"
                  label="Try Voicebot Demo"
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all w-full border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:shadow-soft h-12 px-6 py-3 text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Page;