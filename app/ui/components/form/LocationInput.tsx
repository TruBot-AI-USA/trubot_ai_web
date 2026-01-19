"use client";

import { useEffect, useRef, useState } from "react";

interface LocationInputProps {
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: string;
}

interface PlaceDetail {
  formattedAddress?: string;
  name?: string;
}

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          PlaceAutocompleteElement: {
            new (): Element;
          };
        };
      };
    };
  }
}

const LocationInput: React.FC<LocationInputProps> = ({
  onChange,
  placeholder = "City, State",
  className = "",
  error,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const autocompleteRef = useRef<Element | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    const initAutocomplete = () => {
      if (
        window.google &&
        window.google.maps &&
        window.google.maps.places &&
        typeof window.google.maps.places.PlaceAutocompleteElement ===
          "function" &&
        containerRef.current
      ) {
        try {
          autocompleteRef.current =
            new window.google.maps.places.PlaceAutocompleteElement();
          if (autocompleteRef.current) {
            autocompleteRef.current.setAttribute("placeholder", placeholder);

            const handlePlaceSelect = (event: Event) => {
              const customEvent = event as CustomEvent;
              const place: PlaceDetail = customEvent.detail.place;
              if (place && place.formattedAddress) {
                onChange(place.formattedAddress);
              }
            };

            autocompleteRef.current.addEventListener(
              "gmp-placeselect",
              handlePlaceSelect
            );
            containerRef.current.appendChild(autocompleteRef.current);
            setApiError(null);
          }
        } catch (error) {
          console.error(
            "Error initializing Google Places PlaceAutocompleteElement:",
            error
          );
          setApiError(
            "There was a problem loading the location autocomplete. Please try again later."
          );
        }
      } else {
        console.error(
          "Google PlaceAutocompleteElement is not available. Make sure Places API (New) is enabled and you are using the latest Maps JS API."
        );
        setApiError(
          "Location autocomplete is not available. Please ensure Places API (New) is enabled in your Google Cloud Console."
        );
      }
    };

    if (window.google && window.google.maps) {
      initAutocomplete();
    } else {
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(checkGoogleMaps);
          initAutocomplete();
        }
      }, 100);
      setTimeout(() => clearInterval(checkGoogleMaps), 10000);
    }

    const containerNode = containerRef.current;
    const autocompleteNode = autocompleteRef.current;

    return () => {
      if (autocompleteNode && containerNode) {
        autocompleteNode.removeEventListener("gmp-placeselect", () => {});
        if (containerNode.contains(autocompleteNode)) {
          containerNode.removeChild(autocompleteNode);
        }
      }
    };
  }, [onChange, placeholder]);

  return (
    <>
      <div
        ref={containerRef}
        className={className}
        style={{ width: "100%", height: "100%" }}
      />

      {error && <p className="text-coral text-xs mt-1 ml-1">{error}</p>}

      {apiError && <p className="text-coral text-xs mt-1 ml-1">{apiError}</p>}
    </>
  );
};

export default LocationInput;
