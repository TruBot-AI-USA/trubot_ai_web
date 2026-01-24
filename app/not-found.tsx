import Image from "next/image";

import Button from "@/app/ui/components/shared/Button";
import PageLayout from "@/app/ui/components/shared/PageLayout";

export const metadata = {
  title: "404 – Page Not Found | TruBot AI",
  description: "This page doesn't exist or may have been removed.",
  openGraph: {
    title: "404 – Not Found",
    description: "Oops, the page you're looking for is missing.",
    url: "https://www.trubotai.com/404",
    images: [
      {
        url: "https://www.trubotai.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TruBot AI 404 Error Graphic",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

const NotFound = () => {
  return (
    <PageLayout id="404 Error Page" padding="lg" className="text-center">
      {/* Sad Bot Image */}
      <div className="relative w-40 h-40 mb-6 mx-auto sway">
        <Image
          src="/images/sad-bot.png"
          alt="Illustration of a sad AI bot indicating error"
          width={160}
          height={160}
          className="object-contain"
          priority
        />
      </div>

      {/* Main Message */}
      <h1
        className="text-4xl font-heading text-navy mb-4 leading-tight slide-in-up"
        role="alert"
      >
        Well, that wasn’t supposed to happen…
      </h1>

      {/* Description */}
      <p className="font-body text-navy/70 max-w-xl mx-auto mb-8 fade-in animation-delay-200">
        The page you’re looking for doesn’t exist — or maybe it ran off with our
        AI.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in animation-delay-300">
        <Button
          href="/"
          label="Go to Homepage"
          ariaLabel="Return to TruBot AI homepage"
          className="w-full sm:w-auto"
        />
        <Button
          href="/products"
          variant="outline"
          label="Explore Products"
          ariaLabel="Explore TruBot AI products"
          className="w-full sm:w-auto"
        />
      </div>
    </PageLayout>
  );
};

export default NotFound;
