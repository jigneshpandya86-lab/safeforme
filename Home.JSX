import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, Loader } from "lucide-react";
import { searchLocation } from "../firebase";

export default function Home() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoadingGeo, setIsLoadingGeo] = useState(false);

  /**
   * Handle search form submission
   */
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchInput.trim()) {
      setError("Please enter a location or pincode");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const results = await searchLocation(searchInput);

      if (results.length === 0) {
        setError("No location found. Try a different search.");
        setIsLoading(false);
        return;
      }

      // Navigate to the first matching location's report
      // In a real app, you might show multiple results first
      navigate(`/report/${results[0].id}`);
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  /**
   * Handle "Use current location" button click
   * Uses HTML5 Geolocation API to get user's coordinates
   */
  const handleUseCurrentLocation = () => {
    setIsLoadingGeo(true);
    setError("");

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setIsLoadingGeo(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Current location: ${latitude}, ${longitude}`);
        // In a real app, you'd query Firestore for the nearest location
        // For now, we'll show an info message
        setError(
          `Found your location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}. Feature coming soon!`
        );
        setIsLoadingGeo(false);
      },
      (error) => {
        setError(
          "Unable to retrieve your location. Please enable location services."
        );
        console.error(error);
        setIsLoadingGeo(false);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-safety-50 to-white">
      {/* Header */}
      <header className="border-b border-safety-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-safety-600" strokeWidth={2.5} />
            <h1 className="font-display font-bold text-xl text-safety-900">
              SAFE FOR ME
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Main Copy */}
        <section className="mb-12 animate-fadeIn">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-safety-900 mb-6 leading-tight">
            We hear about so many crimes daily. If you were to hear of a
            heinous crime today, you'd probably be sleeping peacefully the next
            moment.{" "}
            <span className="text-alert-500">We've become numb.</span>
          </h2>

          <div className="space-y-4 text-lg text-slate-700">
            <p>
              But that clearly doesn't mean your safety isn't important. If you
              do fit-checks before going out, why not safety checks? It doesn't
              matter whether you are a man or woman, going out by day or night,
              alone or with friends, travelling, or buying a property.
            </p>
            <p className="text-safety-600 font-medium">
              Safety is a top priority.
            </p>
          </div>
        </section>

        {/* Closing Copy */}
        <section className="mb-12 animate-slideUp" style={{ animationDelay: "0.1s" }}>
          <p className="text-xl text-slate-700">
            Let us make it easy for you. It's one less thing to keep you
            worried about.
          </p>
        </section>

        {/* Search Component */}
        <section className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
          <form onSubmit={handleSearch} className="space-y-4">
            {/* Search Input & Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter location or Pincode"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-1 px-5 py-3 border border-safety-200 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-safety-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-safety-600 hover:bg-safety-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Search
                  </>
                )}
              </button>
            </div>

            {/* Use Current Location Button */}
            <button
              type="button"
              onClick={handleUseCurrentLocation}
              disabled={isLoadingGeo}
              className="w-full sm:w-auto px-6 py-3 border-2 border-safety-600 text-safety-600 hover:bg-safety-50 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingGeo ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Getting location...
                </>
              ) : (
                <>
                  <MapPin className="w-5 h-5" />
                  Use Current Location
                </>
              )}
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <div
              className={`mt-4 p-4 rounded-lg text-sm font-medium ${
                error.includes("Feature coming soon")
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "bg-alert-50 text-alert-700 border border-alert-200"
              }`}
            >
              {error}
            </div>
          )}
        </section>

        {/* Info Cards - Optional Marketing Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🛡️",
              title: "Comprehensive Data",
              desc: "Access detailed crime statistics and safety metrics for any location.",
            },
            {
              icon: "📍",
              title: "Real-time Insights",
              desc: "Find nearest emergency hubs and critical infrastructure nearby.",
            },
            {
              icon: "🌙",
              title: "Night Safety",
              desc: "Understand safety conditions after dark in your area.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg border border-safety-100 hover:border-safety-300 transition-all hover:shadow-md"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-display font-semibold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-safety-100 bg-white/50 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-sm">
          <p>&copy; 2024 Safe For Me. Your safety, our priority.</p>
        </div>
      </footer>
    </div>
  );
}
