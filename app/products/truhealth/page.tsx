import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mic, CheckCircle, Calendar, Shield, Users, Clock, Heart, Award, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Smart AI Consultation Booking Agent | TruBot AI Healthcare",
  description: "Revolutionize healthcare appointment booking with our intelligent chatbot and voicebot.",
};

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - REDUCED FONT SIZES */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Brand Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Turbot ai</h1>
                <p className="text-xs text-gray-600">AI Healthcare Assistant</p>
              </div>
            </div>
            
            {/* Centered Navigation Items */}
            <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
              <a href="#features" className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm">Features</a>
              <a href="#benefits" className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm">Benefits</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm">Contact</a>
            </nav>
            
            {/* Get Started Button */}
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-105 h-9 px-3 py-2 text-sm">
              Get Started
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - REDUCED FONT SIZES */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-blue-50 text-blue-600 border-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  AI-Powered Healthcare
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Smart AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Consultation</span> Booking Agent
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Revolutionize healthcare appointment booking with our intelligent chatbot and voicebot. Available 24/7 to schedule, reschedule, and manage medical consultations seamlessly.
                </p>
              </div>
              
             <div className="flex flex-col sm:flex-row gap-3">
  <Link 
    href="/products/ai-chatbots"
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-105 animate-pulse h-12 px-6 py-3 text-base"
  >
    <MessageCircle className="w-4 h-4" />
    Try Chatbot Demo
  </Link>
  <Link 
    href="/products/ai-voicebots"
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:shadow-soft h-12 px-6 py-3 text-base"
  >
    <Mic className="w-4 h-4" />
    Voice Assistant
  </Link>
</div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="rounded-lg shadow-sm text-center border-2 transition-all hover:shadow-md hover:scale-105 text-blue-600 border-blue-100 bg-blue-50">
                  <div className="p-4">
                    <div className="text-3xl font-bold mb-1 text-blue-600">60%</div>
                    <div className="text-base font-semibold text-gray-900 mb-1">Automation</div>
                    <div className="text-xs text-gray-600">of booking tasks</div>
                  </div>
                </div>
                
                <div className="rounded-lg shadow-sm text-center border-2 transition-all hover:shadow-md hover:scale-105 text-green-600 border-green-100 bg-green-50">
                  <div className="p-4">
                    <div className="text-3xl font-bold mb-1 text-green-600">40%</div>
                    <div className="text-base font-semibold text-gray-900 mb-1">Reduced</div>
                    <div className="text-xs text-gray-600">admin workload</div>
                  </div>
                </div>
                
                <div className="rounded-lg shadow-sm text-center border-2 transition-all hover:shadow-md hover:scale-105 text-orange-500 border-orange-100 bg-orange-50">
                  <div className="p-4">
                    <div className="text-3xl font-bold mb-1 text-orange-500">24/7</div>
                    <div className="text-base font-semibold text-gray-900 mb-1">Available</div>
                    <div className="text-xs text-gray-600">patient support</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{
                  animation: 'floatAnimation 5s ease-in-out infinite',
                  transform: 'translateY(0px)'
                }}
              >
                <img 
                  src="https://preview--clinic-converse.lovable.app/assets/hero-healthcare-ai-D53WzjO3.jpg" 
                  alt="Healthcare AI Chatbot Interface"
                  className="w-full h-[450px] object-cover"
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
        
        <style>{`
          @keyframes floatAnimation {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>

      {/* Features Section - REDUCED FONT SIZES */}
      <section className="py-16 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-gray-100 text-gray-700 mb-3">
              Core Features
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Comprehensive AI Healthcare Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI agent combines advanced natural language processing with healthcare expertise to provide seamless appointment management and patient support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { 
                icon: MessageCircle, 
                title: "Intelligent Chatbot", 
                description: "Natural conversation interface for booking appointments, checking availability, and answering health queries with 24/7 support."
              },
              { 
                icon: Mic, 
                title: "Voice Assistant", 
                description: "Hands-free voice interaction for accessibility, allowing patients to book appointments through natural speech commands."
              },
              { 
                icon: Calendar, 
                title: "Smart Scheduling", 
                description: "AI-powered appointment optimization that considers doctor availability, patient preferences, and clinic capacity."
              },
              { 
                icon: Shield, 
                title: "HIPAA Compliant", 
                description: "Enterprise-grade security ensuring all patient data is protected according to healthcare regulations and privacy standards."
              },
              { 
                icon: Users, 
                title: "Multi-Platform Integration", 
                description: "Seamless integration with existing hospital management systems, EMRs, and third-party healthcare platforms."
              },
              { 
                icon: Clock, 
                title: "Real-time Updates", 
                description: "Instant notifications for appointment confirmations, reminders, cancellations, and follow-up instructions."
              },
            ].map((feature, index) => (
              <div key={index} className="group rounded-lg shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-white border border-gray-200 hover:border-blue-500 hover:ring-2 hover:ring-blue-500">
                <div className="p-5 text-center">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center bg-blue-50 text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:animate-pulse">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 mt-12">
  <img 
    src="/images/products/health3.png"
    alt="AI Healthcare Platform Showcase"
    className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
  />
</div>
      </section>

      {/* Benefits Section - REDUCED FONT SIZES */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100" id="benefits">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div>
              <div className="rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src="https://preview--clinic-converse.lovable.app/assets/patients-using-ai-B4VR57_y.jpg" 
                  alt="Patients Using AI Healthcare Assistant"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
            
            {/* Right side - Benefits content */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-green-600 text-white mb-3">
                  <Heart className="w-3 h-3 mr-1" />
                  Patient Benefits
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Transforming Healthcare Experience
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "Reduced Wait Times", description: "Eliminate phone queues and book appointments instantly through natural conversation.", color: "bg-blue-600" },
                  { title: "24/7 Availability", description: "Access healthcare scheduling anytime, anywhere, without being limited by office hours.", color: "bg-green-600" },
                  { title: "Personalized Care", description: "AI remembers preferences and medical history for more efficient and personalized service.", color: "bg-orange-500" },
                  { title: "Appointment Reminders", description: "Automated reminders and follow-up care instructions to improve health outcomes.", color: "bg-purple-600" },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-7 h-7 ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section - REDUCED FONT SIZES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-green-600 text-white mb-3">
              <Award className="w-3 h-3 mr-1" />
              Success Metrics
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Proven Results in Healthcare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our AI consultation booking agent delivers measurable improvements in operational efficiency and patient satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "70%", label: "Automation Rate", description: "Bookings handled without human intervention", color: "text-blue-600 border-blue-100 bg-blue-50" },
              { value: "4.5/5", label: "Patient Satisfaction", description: "Average CSAT score from users", color: "text-green-600 border-green-100 bg-green-50" },
              { value: "25%", label: "Fewer Missed Appointments", description: "Reduction in no-shows with AI reminders", color: "text-orange-600 border-orange-100 bg-orange-50" },
              { value: "40%", label: "Admin Workload Reduced", description: "Staff time saved on routine tasks", color: "text-purple-600 border-purple-100 bg-purple-50" },
            ].map((metric, index) => (
              <div key={index} className={`rounded-lg shadow-sm text-center border-2 transition-all hover:shadow-md hover:scale-105 ${metric.color}`}>
                <div className="p-5">
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-base font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-600">{metric.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - REDUCED FONT SIZES */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started with our AI consultation booking agent and see immediate improvements in patient satisfaction and operational efficiency.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border-0">
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Information */}
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-900 font-medium text-sm">support@Trubotai</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-900 font-medium text-sm">1800-Trubotai (1800-638-3549)</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-900 font-medium text-sm">Available across India</span>
                    </div>
                  </div>
                  
                  <div className="pt-3">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Product Owner</h4>
                    <p className="text-sm text-gray-600">Priya Ojha</p>
                    <p className="text-xs text-gray-600">Leading AI Healthcare Innovation</p>
                  </div>
                </div>
                
                {/* Get Started */}
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Get Started Today
                  </h3>
                  <p className="text-sm text-gray-600">
                    Schedule a demo to see how our AI booking agent can transform your practice.
                  </p>
                  
                  <div className="space-y-3">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-105 animate-pulse h-12 px-6 py-3 text-base">
                      <Calendar className="w-4 h-4" />
                      Schedule Demo
                    </button>
                    
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all w-full border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:shadow-soft h-12 px-6 py-3 text-base">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                      Try AI Assistant
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;