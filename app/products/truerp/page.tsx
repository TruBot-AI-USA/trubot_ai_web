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

export const metadata: Metadata = {
  title: 'TruERP - Run Your Entire Business in One Place',
  description: 'Unified ERP platform bringing CRM, Finance, HR, and Operations together. Sell faster, track inventory, manage accounting, and control operations.',













};

export default function ERPPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      {/* Navigation - Lowered z-index to z-40 so top-bar dropdowns win */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm relative">
                TE
              </div>
              <span className="text-lg font-bold text-gray-900">TruERP</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">
              <Link href="#overview" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Overview</Link>
              <Link href="#problems" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Problems We Solve</Link>
              <Link href="#capabilities" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Capabilities</Link>
              <Link href="#industries" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Industries</Link>
              <Link href="#docs" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Docs</Link>
            </div>


          </div>
        </div>
      </nav>








      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              One Platform to Run<br />
              Your <span className="text-blue-600">Entire Business</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sell faster. Track inventory. Manage accounting. Control operations.
              TruERP brings CRM, ERP, Finance, HR, and Operations together in one
              unified, easy-to-use platform.
            </p>
            <div className="flex gap-4 mb-12">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Book a Demo
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Search className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">ERP + CRM</p>
                  <p className="text-xs text-gray-500">Unified</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Finance in</p>
                  <p className="text-xs text-gray-500">Sync</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Audit-</p>
                  <p className="text-xs text-gray-500">Ready</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 h-48 relative">
                <Image
                  src="	https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80"
                  alt="Restaurant Business"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Live Overview</p>
                    <h3 className="text-xl font-bold text-gray-900">Company Dashboard</h3>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">One Login</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Open Orders</p>
                    <p className="text-3xl font-bold text-gray-900">128</p>
                    <p className="text-xs text-gray-400">Updated 2m ago</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Stock Value</p>
                    <p className="text-3xl font-bold text-gray-900">$1,236,800</p>
                    <p className="text-xs text-gray-400">Real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Problems Modern Businesses Face</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Most teams operate across disconnected tools and manual workflows. TruERP removes the
            busywork so teams can work accurately, faster, and together.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <Circle className="w-5 h-5 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Disconnected Tools</h3>
              <p className="text-gray-600">Multiple apps create messy workflows and missing data.</p>
            </div>
            <div>
              <Circle className="w-5 h-5 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Manual Processes</h3>
              <p className="text-gray-600">Teams waste hours on tasks that should be automated.</p>
            </div>
            <div>
              <Circle className="w-5 h-5 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Data Duplication</h3>
              <p className="text-gray-600">Different systems = repeated entries and errors.</p>
            </div>
            <div>
              <Circle className="w-5 h-5 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Poor Visibility</h3>
              <p className="text-gray-600">Leaders can't make good decisions without real-time clarity.</p>
            </div>
          </div>
        </div>
      </section>









      {/* Core Capabilities */}
      <section id="capabilities" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Everything your business needs—connected, accurate, and fast. Use the full suite or only the
            modules you need.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unified Workspace</h3>
              <p className="text-gray-600">All modules accessible from a clean, intuitive workspace.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inventory Management</h3>
              <p className="text-gray-600">Real-time stock across warehouses with auto-updates.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sales & CRM</h3>
              <p className="text-gray-600">Quotes to invoices—no switching systems or re-entry.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Purchase Management</h3>
              <p className="text-gray-600">POs, GRNs, supplier control, and auditable flows.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accounting & Finance</h3>
              <p className="text-gray-600">Ledger syncs instantly with every inventory & sales update.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Human Resources</h3>
              <p className="text-gray-600">Employee database, roles, and workflow integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote to Cash Flow */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">From Quote → Cash in One Flow</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            A streamlined end-to-end process: create a quotation, convert to an order, generate
            an invoice, record payments — all synced instantly across finance and inventory.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20">
              Quotation Creation
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20">
              Order Confirmation
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20">
              Invoice Generation
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20">
              Payment Recording
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20">
              Ledger & Stock Auto-Update
            </span>
          </div>












        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            TruERP is flexible for a range of businesses—from trading and distribution to services and finance-
            oriented teams.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <Store className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trading & Distribution</h3>
              <p className="text-gray-600">Accurate stock, multi-warehouse visibility and scalable order management.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Businesses</h3>
              <p className="text-gray-600">Project tracking, invoicing and client communications in one place.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finance-Driven Organizations</h3>
              <p className="text-gray-600">Real-time ledgers, reconciliations and audit-ready records.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Startups & Scale-ups</h3>
              <p className="text-gray-600">Modular features that grow with your business.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Retailers</h3>
              <p className="text-gray-600">POS-friendly flows and omni-channel inventory updates.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600">Inventory lots, BOMs and supply chain integrations.</p>
            </div>
          </div>
        </div>
      </section>









      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started with TruERP</h2>
          <p className="text-lg text-gray-600 mb-8">
            Transform how your business operates—one system for sales, inventory, finance and HR.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Schedule a Demo
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">© TruERP • Built for clarity</p>
        </div>
      </footer>
    </main>
  );
}