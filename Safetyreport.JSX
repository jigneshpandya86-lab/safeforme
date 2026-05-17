import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Star,
  AlertTriangle,
  Phone,
  Loader,
  ChevronDown,
  ChevronUp,
  Home,
  Shield,
  Moon,
} from "lucide-react";
import { getLocationById } from "../firebase";

export default function SafetyReport() {
  const { locationId } = useParams();
  const navigate = useNavigate();

  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isNightExpanded, setIsNightExpanded] = useState(false);

  /**
   * Fetch location data on component mount
   */
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setIsLoading(true);
        const data = await getLocationById(locationId);
        setLocation(data);
        setError("");
      } catch (err) {
        setError(err.message || "Failed to load location data.");
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, [locationId]);

  /**
   * Render a 5-star rating component
   */
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "text-alert-500 fill-alert-500"
                : "text-slate-300"
            }`}
            strokeWidth={2}
          />
        ))}
      </div>
    );
  };

  /**
   * Get color based on crime severity
   */
  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case "low":
        return "bg-green-50 text-green-700 border-green-200";
      case "medium":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "high":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  /**
   * Get severity badge color
   */
  const getSeverityBadgeColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-red-100 text-red-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-safety-50 to-white flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin text-safety-600 mx-auto mb-4" />
          <p className="text-slate-600 font-medium">Loading safety report...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !location) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-safety-50 to-white">
        <header className="border-b border-safety-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-safety-600 hover:text-safety-700 font-semibold"
            >
              ← Back to Search
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-alert-50 border border-alert-200 rounded-lg p-8 text-center">
            <AlertTriangle className="w-12 h-12 text-alert-600 mx-auto mb-4" />
            <h2 className="font-display font-bold text-xl text-alert-900 mb-2">
              {error || "Location Not Found"}
            </h2>
            <p className="text-alert-700 mb-6">
              {error ||
                "The location you're looking for doesn't exist in our database."}
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-safety-600 hover:bg-safety-700 text-white font-semibold rounded-lg transition-all"
            >
              Return to Search
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-safety-50 to-white">
      {/* Header */}
      <header className="border-b border-safety-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-safety-600" strokeWidth={2.5} />
              <h1 className="font-display font-bold text-xl text-safety-900">
                SAFE FOR ME
              </h1>
            </div>

            {/* Search Bar in Header */}
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 text-slate-700 hover:text-safety-600 font-medium transition-all"
            >
              ← Search Again
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <section className="mb-12 animate-fadeIn">
          <div className="bg-white rounded-lg border border-safety-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-8">
              {/* Location Name */}
              <h2 className="font-display font-bold text-3xl text-safety-900 mb-4">
                {location.locationName}
              </h2>

              {/* Pincode */}
              {location.pincode && (
                <p className="text-slate-600 mb-6 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Pincode: <span className="font-semibold">{location.pincode}</span>
                </p>
              )}

              {/* Rating */}
              <div className="mb-6">
                <p className="text-slate-700 font-medium mb-2">Safety Rating</p>
                <div className="flex items-center gap-3">
                  <StarRating rating={Math.round(location.overallRating || 3)} />
                  <span className="text-lg font-bold text-safety-600">
                    {location.overallRating?.toFixed(1) || "N/A"} / 5
                  </span>
                </div>
              </div>

              {/* Summary */}
              {location.summaryText && (
                <div className="bg-safety-50 border border-safety-200 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    {location.summaryText}
                  </p>
                </div>
              )}
            </div>

            {/* Map Placeholder */}
            {location.coordinates && (
              <div className="w-full h-64 bg-gradient-to-br from-safety-100 to-safety-50 border-t border-safety-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-safety-400 mx-auto mb-2" />
                  <p className="text-slate-600 font-medium">
                    Coordinates: {location.coordinates.latitude?.toFixed(4)},
                    {location.coordinates.longitude?.toFixed(4)}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    (Google Maps integration coming soon)
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Full Breakdown Section */}
        {location.crimeStats && (
          <section className="mb-12 animate-slideUp" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display font-bold text-2xl text-safety-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-alert-500" />
              Full Breakdown
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(location.crimeStats).map(([key, value]) => (
                <div
                  key={key}
                  className={`p-6 rounded-lg border-2 ${getSeverityColor(
                    typeof value === "string" ? value : "unknown"
                  )}`}
                >
                  <h4 className="font-semibold text-sm uppercase tracking-wide mb-2">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </h4>
                  <p className="text-lg font-bold">
                    {typeof value === "string" ? (
                      <>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold mr-2 ${getSeverityBadgeColor(
                            value
                          )}`}
                        >
                          {value.toUpperCase()}
                        </span>
                      </>
                    ) : (
                      value
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Emergency Hubs Section */}
        {location.emergencyHubs && location.emergencyHubs.length > 0 && (
          <section className="mb-12 animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display font-bold text-2xl text-safety-900 mb-6 flex items-center gap-2">
              <Phone className="w-6 h-6 text-safety-600" />
              Nearest Emergency Hubs
            </h3>

            <div className="space-y-4">
              {location.emergencyHubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-safety-100 rounded-lg p-6 hover:border-safety-300 transition-all hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg text-safety-900 mb-1">
                        {hub.name}
                      </h4>
                      <p className="text-slate-600 text-sm mb-3">
                        Type: <span className="font-medium">{hub.type}</span>
                      </p>
                      <p className="text-slate-700 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-safety-500" />
                        <span className="font-semibold">{hub.distance}</span>
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 bg-safety-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-safety-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Night Time Condition Section */}
        {location.nightTimeCondition && (
          <section className="mb-12 animate-slideUp" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => setIsNightExpanded(!isNightExpanded)}
              className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-lg p-6 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <Moon className="w-6 h-6" />
                <span className="font-display font-bold text-lg">
                  Night Time Safety Conditions
                </span>
              </div>
              {isNightExpanded ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>

            {isNightExpanded && (
              <div className="mt-4 bg-white border border-safety-100 rounded-lg p-6 animate-slideUp">
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {location.nightTimeCondition}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Housing Options Placeholder */}
        <section className="mb-12 animate-slideUp" style={{ animationDelay: "0.4s" }}>
          <button className="w-full bg-white border-2 border-safety-300 hover:bg-safety-50 rounded-lg px-6 py-4 flex items-center justify-center gap-2 font-semibold text-safety-600 transition-all">
            <Home className="w-5 h-5" />
            Housing Options (Coming Soon)
          </button>
        </section>

        {/* Footer Actions */}
        <section className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-safety-600 hover:bg-safety-700 text-white font-semibold rounded-lg transition-all"
          >
            ← Back to Search
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-safety-100 bg-white/50 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-sm">
          <p>&copy; 2024 Safe For Me. Helping you make informed decisions.</p>
        </div>
      </footer>
    </div>
  );
}
