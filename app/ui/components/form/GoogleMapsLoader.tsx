"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMapsLoader = ({ children }: { children: React.ReactNode }) => {
  const [mapsReady, setMapsReady] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_PLACES_API_KEY!,
      version: "weekly",
      libraries: ["places"],
    });
    loader.load().then(() => setMapsReady(true));
  }, []);

  if (!mapsReady) {
    return (
      <div className="w-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-electric animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default GoogleMapsLoader;
