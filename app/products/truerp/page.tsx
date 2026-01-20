import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  Package, 
  Briefcase, 
  ShoppingCart, 
  DollarSign, 
  Users,
  Circle,
  CheckCircle2,
  Store,
  Building2,
  TrendingUp,
  Wrench,
  Factory
} from 'lucide-react';
import { Poppins } from 'next/font/google';

// Configure Poppins font with the exact weights used in the design
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'TruERP - Run Your Entire Business in One Place',
  description: 'Unified ERP platform bringing CRM, Finance, HR, and Operations together. Sell faster, track inventory, manage accounting, and control operations.',
};

export default function ERPPage() {
  return (
    <main className={`min-h-screen bg-white text-[#0D1117] ${poppins.variable} font-poppins`}>
      {/* Navigation - No glow effect needed here */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3C82F6] to-[#733BF7] flex items-center justify-center text-white font-semibold">
                TE
              </div>
              <div>
                <div className="text-lg font-semibold text-[#0D1117]">TruERP</div>
                <p className="text-xs text-[#ADADAF] -mt-1">Run your entire business in one place</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="#overview" className="text-[#0D1117] hover:text-[#3C82F6] transition">Overview</Link>
              <Link href="#problems" className="text-[#0D1117] hover:text-[#3C82F6] transition">Problems We Solve</Link>
              <Link href="#capabilities" className="text-[#0D1117] hover:text-[#3C82F6] transition">Capabilities</Link>
              <Link href="#industries" className="text-[#0D1117] hover:text-[#3C82F6] transition">Industries</Link>
              <Link href="#docs" className="px-3 py-1 border rounded-full text-[#0D1117]">Docs</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - With blue glow */}
      <section id="overview" className="pt-20 pb-14 bg-gradient-to-b from-[#ECF3FE] to-white relative overflow-hidden">
  <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <div> 
      <h1 className="text-[42px] md:text-[50px] leading-[1.15] font-normal text-[#0D1117]">
        One Platform to Run<br />
        Your <span className="text-[#3C82F6]">Entire Business</span>
      </h1>
      <p className="text-lg mt-4 max-w-[600px] text-[#555]">
        Sell faster. Track inventory. Manage accounting. Control operations. TruERP brings CRM, ERP, Finance, HR, and Operations together in one unified, easy-to-use platform.
      </p>

      <div className="flex flex-wrap gap-6 mt-10">
        <button className="h-[52px] px-7 rounded-full bg-[#3C82F6] hover:bg-[#3776E0] text-white font-medium shadow-md transition">
          Book a Demo
        </button>
        <button className="h-[52px] px-7 rounded-full border border-[#7CABF9] text-[#3C82F6] font-medium hover:bg-[#ECF3FE] transition">
          Start Free Trial
        </button>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        <div className="rounded-xl p-4 border border-[#EDEDED] flex items-center gap-3 bg-transparent hover:bg-[#EEF5FF] hover:border hover:border-[#A3C7FF]">
          <div className="w-12 h-12 rounded-xl bg-[#ECF3FE] flex items-center justify-center">
            <Search className="w-6 h-6 text-[#3C82F6]" />
          </div>
          <p className="text-sm font-normal text-[#444]">ERP + CRM Unified</p>
        </div>
        <div className="rounded-xl p-4 border border-[#EDEDED] flex items-center gap-3 bg-transparent hover:bg-[#EEF5FF] hover:border hover:border-[#A3C7FF]">
          <div className="w-12 h-12 rounded-xl bg-[#ECF3FE] flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-[#3C82F6]" />
          </div>
          <p className="text-sm font-normal text-[#444]">Finance in Sync</p>
        </div>
        <div className="rounded-xl p-4 border border-[#EDEDED] flex items-center gap-3 bg-transparent hover:bg-[#EEF5FF] hover:border hover:border-[#A3C7FF]">
          <div className="w-12 h-12 rounded-xl bg-[#ECF3FE] flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-[#3C82F6]" />
          </div>
          <p className="text-sm font-normal text-[#444]">Audit-Ready</p>
        </div>
      </div>
    </div>
          
          <div className="bg-white rounded-2xl p-0 shadow-md border border-[#EDEDED] overflow-hidden">
            <div className="relative h-80 w-full">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80"
                alt="Business dashboard on a laptop showing charts and inventory"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#ADADAF]">Live Overview</div>
                  <div className="font-semibold text-xl text-[#0D1117]">Company Dashboard</div>
                </div>
                <div className="px-3 py-1 text-xs rounded-full border bg-[#FAFAFA] text-[#0D1117]">
                  One Login
                </div>
              </div>

              <div className="mt-4 bg-gradient-to-b from-[#F5F7FD] to-white rounded-xl p-4 border border-[#EDEDED]">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-xs text-[#888]">Open Orders</p>
                    <p className="text-lg font-semibold text-[#0D1117]">128</p>
                  </div>
                  <p className="text-xs text-[#ADADAF]">Updated 2m ago</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-[#888]">Stock Value</p>
                    <p className="text-lg font-semibold text-[#0D1117]">$1,236,800</p>
                  </div>
                  <p className="text-xs text-[#ADADAF]">Real-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section - With blue glow */}
      <section id="problems" className="py-20 bg-white relative">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="rounded-2xl p-8">
      <h2 className="text-[32px] font-semibold text-[#0D1117]">The Problems Modern Businesses Face</h2>
      <p className="text-[#666] mt-3 max-w-[700px]">
        Most teams operate across disconnected tools and manual workflows. TruERP removes the busywork so teams can work accurately, faster, and together.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="bg-white p-6 rounded-xl transition hover:bg-[#EEF5FF] hover:border hover:border-[#A3C7FF]">
          <h3 className="font-semibold text-lg flex items-center gap-2 text-[#0D1117]">
            <span className="w-3 h-3 border-2 border-[#3C82F6] rounded-full"></span>
            Disconnected Tools
          </h3>
          <p className="text-sm text-[#777] mt-2">
            Multiple apps create messy workflows and missing data.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl transition hover:bg-[#EEF5FF] hover:border hover:border-[#A3C7FF]">
          <h3 className="font-semibold text-lg flex items-center gap-2 text-[#0D1117]">
            <span className="w-3 h-3 border-2 border-[#3C82F6] rounded-full"></span>
            Manual Processes
          </h3>
          <p className="text-sm text-[#777] mt-2">
            Teams waste hours on tasks that should be automated.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl transition hover:bg-[#EEF5FF] hover:border hover:border-[#A3C7FF]">
          <h3 className="font-semibold text-lg flex items-center gap-2 text-[#0D1117]">
            <span className="w-3 h-3 border-2 border-[#3C82F6] rounded-full"></span>
            Data Duplication
          </h3>
          <p className="text-sm text-[#777] mt-2">
            Different systems = repeated entries and errors.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl transition hover:bg-[#EEF5FF] hover:border hover:border-[#A3C7FF]">
          <h3 className="font-semibold text-lg flex items-center gap-2 text-[#0D1117]">
            <span className="w-3 h-3 border-2 border-[#3C82F6] rounded-full"></span>
            Poor Visibility
          </h3>
          <p className="text-sm text-[#777] mt-2">
            Leaders can't make good decisions without real-time clarity.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="capabilities" className="py-20 bg-[#F8FAFF] border-t border-[#EEF2F7] relative">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="rounded-2xl p-8">
      <h2 className="text-[32px] font-semibold text-[#0D1117]">Core Capabilities</h2>
      <p className="text-[#666] mt-3 max-w-[700px]">
        Everything your business needs—connected, accurate, and fast. Use the full suite or only the modules you need.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-6 rounded-xl border border-[#EDEDED] transition hover:bg-[#EEF5FF] hover:border-[#A3C7FF]">
          <div className="w-12 h-12 rounded-xl bg-[#ECF3FE] flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-[#3C82F6]" />
          </div>
          <h3 className="font-semibold text-lg text-[#0D1117]">Unified Workspace</h3>
          <p className="text-sm text-[#777] mt-2">All modules accessible from a clean, intuitive workspace.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#EDEDED] transition hover:bg-[#EEF5FF] hover:border-[#A3C7FF]">
          <div className="w-12 h-12 rounded-xl bg-[#ECF3FE] flex items-center justify-center mb-4">
            <Package className="w-6 h-6 text-[#3C82F6]" />
          </div>
          <h3 className="font-semibold text-lg text-[#0D1117]">Inventory Management</h3>
          <p className="text-sm text-[#777] mt-2">Real-time stock across warehouses with auto-updates.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#EDEDED] transition hover:bg-[#EEF5FF] hover:border-[#A3C7FF]">
          <div className="w-12 h-12 rounded-xl bg-[#ECF3FE] flex items-center justify-center mb-4">
            <Briefcase className="w-6 h-6 text-[#3C82F6]" />
          </div>
          <h3 className="font-semibold text-lg text-[#0D1117]">Sales & CRM</h3>
          <p className="text-sm text-[#777] mt-2">Quotes to invoices—no switching systems or re-entry.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#EDEDED] transition hover:bg-[#EEF5FF] hover:border-[#A3C7FF]">
          <div className="w-12 h-12 rounded-xl bg-[#ECF3FE] flex items-center justify-center mb-4">
            <ShoppingCart className="w-6 h-6 text-[#3C82F6]" />
          </div>
          <h3 className="font-semibold text-lg text-[#0D1117]">Purchase Management</h3>
          <p className="text-sm text-[#777] mt-2">POs, GRNs, supplier control, and auditable flows.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#EDEDED] transition hover:bg-[#EEF5FF] hover:border-[#A3C7FF]">
          <div className="w-12 h-12 rounded-xl bg-[#ECF3FE] flex items-center justify-center mb-4">
            <DollarSign className="w-6 h-6 text-[#3C82F6]" />
          </div>
          <h3 className="font-semibold text-lg text-[#0D1117]">Accounting & Finance</h3>
          <p className="text-sm text-[#777] mt-2">Ledger syncs instantly with every inventory & sales update.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#EDEDED] transition hover:bg-[#EEF5FF] hover:border-[#A3C7FF]">
          <div className="w-12 h-12 rounded-xl bg-[#ECF3FE] flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-[#3C82F6]" />
          </div>
          <h3 className="font-semibold text-lg text-[#0D1117]">Human Resources</h3>
          <p className="text-sm text-[#777] mt-2">Employee database, roles, and workflow integration.</p>
        </div>
      </div>

      {/* Flow Section */}
      <div className="mt-16">
        <div className="bg-gradient-to-b from-[#3C82F6] to-[#274B9A] text-white rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-4xl font-semibold">From Quote → Cash in One Flow</h3>
            <p className="text-sm opacity-90 mt-3 max-w-[520px]">
              A streamlined end‑to‑end process: create a quotation, convert to an order, generate an invoice, record payments — all synced instantly across finance and inventory.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {['Quotation Creation', 'Order Confirmation', 'Invoice Generation', 'Payment Recording', 'Ledger & Stock Auto‑Update'].map((step) => (
                <div 
                  key={step} 
                  className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Industries Section - With blue glow */}
   <section id="industries" className="py-20 bg-white relative">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="rounded-2xl p-8">
      <h2 className="text-[32px] font-semibold text-[#0D1117]">Industries We Serve</h2>
      <p className="text-[#666] mt-3 max-w-[700px]">
        TruERP is flexible for a range of businesses—from trading and distribution to services and finance-oriented teams.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-0 rounded-xl transition overflow-hidden relative">
          <div className="bg-[#F4FAFF] h-44 relative overflow-hidden">
            <img 
              src="https://iaxcess.net/wp-content/uploads/2019/04/industry-solution-trading-distribution-services.jpg" 
              alt="Trading & Distribution"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-[#0D1117]">Trading & Distribution</h3>
            <p className="text-sm text-[#777] mt-2">Accurate stock, multi-warehouse visibility and scalable order management.</p>
          </div>
        </div>
        <div className="bg-white p-0 rounded-xl transition overflow-hidden relative">
          <div className="bg-[#F4FAFF] h-44 relative overflow-hidden">
            <img 
              src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/821817_157617.png" 
              alt="Service Businesses"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-[#0D1117]">Service Businesses</h3>
            <p className="text-sm text-[#777] mt-2">Project tracking, invoicing and client communications in one place.</p>
          </div>
        </div>
        <div className="bg-white p-0 rounded-xl transition overflow-hidden relative">
          <div className="bg-[#F4FAFF] h-44 relative overflow-hidden">
            <img 
              src="https://wp-aberdeen.s3.amazonaws.com/wp-content/uploads/2015/12/10060229/data-driven_finance-e1653581121530.jpg" 
              alt="Finance-Driven Organizations"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-[#0D1117]">Finance-Driven Organizations</h3>
            <p className="text-sm text-[#777] mt-2">Real-time ledgers, reconciliations and audit-ready records.</p>
          </div>
        </div>
        <div className="bg-white p-0 rounded-xl transition overflow-hidden relative">
          <div className="bg-[#F4FAFF] h-44 relative overflow-hidden">
            <img 
              src="https://techpoint.org/wp-content/uploads/2022/05/What-is-a-Startup-1024x683.jpg" 
              alt="Startups & Scale-ups"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-[#0D1117]">Startups & Scale-ups</h3>
            <p className="text-sm text-[#777] mt-2">Modular features that grow with your business.</p>
          </div>
        </div>
        <div className="bg-white p-0 rounded-xl transition overflow-hidden relative">
          <div className="bg-[#F4FAFF] h-44 relative overflow-hidden">
            <img 
              src="https://sloanreview.mit.edu/wp-content/uploads/2020/06/GEN-Yu-Retailers-2400x1260-2-1200x630.jpg" 
              alt="Retailers"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-[#0D1117]">Retailers</h3>
            <p className="text-sm text-[#777] mt-2">POS-friendly flows and omni-channel inventory updates.</p>
          </div>
        </div>
        <div className="bg-white p-0 rounded-xl transition overflow-hidden relative">
          <div className="bg-[#F4FAFF] h-44 relative overflow-hidden">
            <img 
              src="https://www.rssinc.com/wp-content/uploads/2023/11/Digital-Revolution-Manufacturing.jpg" 
              alt="Manufacturing"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-[#0D1117]">Manufacturing</h3>
            <p className="text-sm text-[#777] mt-2">Inventory lots, BOMs and supply chain integrations.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section - With blue glow */}
      <section className="py-20 bg-[#F8FAFF] border-t border-[#EEF2F7] relative">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="rounded-2xl p-8">
      <div className="bg-white rounded-xl p-8 shadow-sm border border-[#EDEDED] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-[28px] font-semibold text-[#0D1117]">Get Started with TruERP</h2>
          <p className="text-sm text-[#666] mt-2">
            Transform how your business operates—one system for sales, inventory, finance and HR.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="h-[50px] px-6 rounded-full bg-[#3C82F6] hover:bg-[#3776E0] text-white font-semibold">
            Schedule a Demo
          </button>
          <button className="h-[50px] px-6 rounded-full border border-[#7CABF9] text-[#3C82F6] font-semibold hover:bg-[#ECF3FE]">
            Start Free Trial
          </button>
        </div>
      </div>
      <footer className="text-sm text-[#ADADAF] text-center mt-8">© TruERP • Built for clarity</footer>
    </div>
  </div>
</section>
    </main>
  );
}