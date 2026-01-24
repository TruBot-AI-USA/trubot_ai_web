"use client";

import { useEffect } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <PageLayout
      padding="lg"
      className="text-center"
      aria-label="Application error"
      aria-live="polite"
      aria-busy="false"
    >
      <h1
        className="text-4xl font-heading text-navy mb-4 slide-in-up"
        role="alert"
      >
        Something went wrong
      </h1>

      <p className="font-body text-navy/70 max-w-xl mx-auto mb-8 fade-in animation-delay-200">
        An unexpected error occurred. Please try again or contact our support
        team if the issue persists.
      </p>

      <div className="fade-in animation-delay-300">
        <Button
          as="button"
          onClick={reset}
          label="Try Again"
          ariaLabel="Try loading the page again"
        />
      </div>
    </PageLayout>
  );
}
