import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, Loader } from 'lucide-react';
import { searchLocation } from '../firebase';

export default function Home() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoadingGeo, setIsLoadingGeo] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchInput.trim()) {
      setError('Please enter a location or pincode');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const results = await searchLocation(searchInput);
      if (results.length === 0) {
        setError('No location found. Try a different search.');
        setIsLoading(false);
        return;
      }
      navigate(`/report/${results[0].id}`);
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  const handleUseCurrentLocation = () => {
    setIsLoadingGeo(true);
    setError('');

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setIsLoadingGeo(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setError(`Found your location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}. Feature coming soon!`);
        setIsLoadingGeo(false);
      },
      () => {
        setError('Unable to retrieve your location. Please enable location services.');
        setIsLoadingGeo(false);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-safety-50 to-white">
      <header className="border-b border-safety-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-safety-600" strokeWidth={2.5} />
            <h1 className="font-display font-bold text-xl text-safety-900">SAFE FOR ME</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <section className="mb-12 animate-fadeIn">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-safety-900 mb-6 leading-tight">
            We hear about so many crimes daily. If you were to hear of a heinous crime today, you'd probably be sleeping peacefully the next moment.
            <span className="text-alert-500"> We've become numb.</span>
          </h2>

          <div className="space-y-4 text-lg text-slate-700">
            <p>But that clearly doesn't mean your safety isn't important. If you do fit-checks before going out, why not safety checks?</p>
            <p className="text-safety-600 font-medium">Safety is a top priority.</p>
          </div>
        </section>

        <section className="mb-12 animate-slideUp">
          <p className="text-xl text-slate-700">Let us make it easy for you. It's one less thing to keep you worried about.</p>
        </section>

        <section className="animate-slideUp">
          <form onSubmit={handleSearch} className="space-y-4">
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
                className="px-8 py-3 bg-safety-600 hover:bg-safety-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <><Loader className="w-5 h-5 animate-spin" />Searching...</>
                ) : (
                  <><Search className="w-5 h-5" />Search</>
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={handleUseCurrentLocation}
              disabled={isLoadingGeo}
              className="w-full sm:w-auto px-6 py-3 border-2 border-safety-600 text-safety-600 hover:bg-safety-50 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              {isLoadingGeo ? (
                <><Loader className="w-5 h-5 animate-spin" />Getting location...</>
              ) : (
                <><MapPin className="w-5 h-5" />Use Current Location</>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 rounded-lg text-sm font-medium bg-alert-50 text-alert-700 border border-alert-200">
              {error}
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-safety-100 bg-white/50 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-sm">
          <p>&copy; 2024 Safe For Me. Your safety, our priority.</p>
        </div>
      </footer>
    </div>
  );
}