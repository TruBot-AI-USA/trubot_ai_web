import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Payment canceled</h1>
        <p className="text-lg text-slate-600 mb-6">
          Your checkout was canceled. You can continue browsing digital assets and try again when ready.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/digitalAssets" className="inline-flex justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Return to Digital Assets
          </Link>
          <Link href="/" className="inline-flex justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
