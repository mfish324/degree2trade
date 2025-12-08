"use client";

import { Suspense, useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { supabase, Program, CareerPathFilter } from "@/lib/supabase";
import { careerPaths, CareerPath } from "@/lib/quizData";

// US State coordinates for distance calculation
const stateCoordinates: Record<string, { lat: number; lng: number }> = {
  AL: { lat: 32.806671, lng: -86.79113 },
  AK: { lat: 61.370716, lng: -152.404419 },
  AZ: { lat: 33.729759, lng: -111.431221 },
  AR: { lat: 34.969704, lng: -92.373123 },
  CA: { lat: 36.116203, lng: -119.681564 },
  CO: { lat: 39.059811, lng: -105.311104 },
  CT: { lat: 41.597782, lng: -72.755371 },
  DE: { lat: 39.318523, lng: -75.507141 },
  FL: { lat: 27.766279, lng: -81.686783 },
  GA: { lat: 33.040619, lng: -83.643074 },
  HI: { lat: 21.094318, lng: -157.498337 },
  ID: { lat: 44.240459, lng: -114.478828 },
  IL: { lat: 40.349457, lng: -88.986137 },
  IN: { lat: 39.849426, lng: -86.258278 },
  IA: { lat: 42.011539, lng: -93.210526 },
  KS: { lat: 38.5266, lng: -96.726486 },
  KY: { lat: 37.66814, lng: -84.670067 },
  LA: { lat: 31.169546, lng: -91.867805 },
  ME: { lat: 44.693947, lng: -69.381927 },
  MD: { lat: 39.063946, lng: -76.802101 },
  MA: { lat: 42.230171, lng: -71.530106 },
  MI: { lat: 43.326618, lng: -84.536095 },
  MN: { lat: 45.694454, lng: -93.900192 },
  MS: { lat: 32.741646, lng: -89.678696 },
  MO: { lat: 38.456085, lng: -92.288368 },
  MT: { lat: 46.921925, lng: -110.454353 },
  NE: { lat: 41.12537, lng: -98.268082 },
  NV: { lat: 38.313515, lng: -117.055374 },
  NH: { lat: 43.452492, lng: -71.563896 },
  NJ: { lat: 40.298904, lng: -74.521011 },
  NM: { lat: 34.840515, lng: -106.248482 },
  NY: { lat: 42.165726, lng: -74.948051 },
  NC: { lat: 35.630066, lng: -79.806419 },
  ND: { lat: 47.528912, lng: -99.784012 },
  OH: { lat: 40.388783, lng: -82.764915 },
  OK: { lat: 35.565342, lng: -96.928917 },
  OR: { lat: 44.572021, lng: -122.070938 },
  PA: { lat: 40.590752, lng: -77.209755 },
  RI: { lat: 41.680893, lng: -71.51178 },
  SC: { lat: 33.856892, lng: -80.945007 },
  SD: { lat: 44.299782, lng: -99.438828 },
  TN: { lat: 35.747845, lng: -86.692345 },
  TX: { lat: 31.054487, lng: -97.563461 },
  UT: { lat: 40.150032, lng: -111.862434 },
  VT: { lat: 44.045876, lng: -72.710686 },
  VA: { lat: 37.769337, lng: -78.169968 },
  WA: { lat: 47.400902, lng: -121.490494 },
  WV: { lat: 38.491226, lng: -80.954453 },
  WI: { lat: 44.268543, lng: -89.616508 },
  WY: { lat: 42.755966, lng: -107.30249 },
  DC: { lat: 38.897438, lng: -77.026817 },
  Various: { lat: 39.8283, lng: -98.5795 }, // Center of US
};

// Calculate distance between two coordinates (Haversine formula)
function getDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Program type display names
const programTypeNames: Record<string, string> = {
  apprenticeship: "Apprenticeship",
  trade_school: "Trade School",
  community_college: "Community College",
  accelerated_degree: "Accelerated Degree",
  academy: "Academy",
  seminary: "Seminary",
  bible_college: "Bible College",
  ministry_training: "Ministry Training",
  certification: "Certification",
};

// Parse duration string to months for filtering
function parseDurationToMonths(duration: string): number {
  const lower = duration.toLowerCase();

  // Handle weeks
  const weeksMatch = lower.match(/(\d+)\s*weeks?/);
  if (weeksMatch) {
    return Math.ceil(parseInt(weeksMatch[1]) / 4);
  }

  // Handle months
  const monthsMatch = lower.match(/(\d+)\s*months?/);
  if (monthsMatch) {
    return parseInt(monthsMatch[1]);
  }

  // Handle years
  const yearsMatch = lower.match(/(\d+)\s*years?/);
  if (yearsMatch) {
    return parseInt(yearsMatch[1]) * 12;
  }

  // Handle ranges like "6-12 months" or "1-2 years"
  const rangeMonths = lower.match(/(\d+)-(\d+)\s*months?/);
  if (rangeMonths) {
    return (parseInt(rangeMonths[1]) + parseInt(rangeMonths[2])) / 2;
  }

  const rangeYears = lower.match(/(\d+)-(\d+)\s*years?/);
  if (rangeYears) {
    return ((parseInt(rangeYears[1]) + parseInt(rangeYears[2])) / 2) * 12;
  }

  // Default to 12 months if unparseable
  return 12;
}

// Parse cost string to number for filtering
function parseCostToNumber(cost: string | null): number {
  if (!cost) return 0;
  const lower = cost.toLowerCase();

  // Free or no cost
  if (lower.includes("free") || lower.includes("paid") || lower.includes("$0") || lower.includes("earn while")) {
    return 0;
  }

  // Extract numbers and handle K notation
  const match = cost.match(/\$?([\d,]+)k?/i);
  if (match) {
    let amount = parseInt(match[1].replace(/,/g, ""));
    if (lower.includes("k")) {
      amount *= 1000;
    }
    return amount;
  }

  return 50000; // Default to mid-range if unparseable
}

function ProgramsContent() {
  const searchParams = useSearchParams();
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get initial career filter from URL if present
  const initialCareer = searchParams.get("career") as CareerPathFilter | null;

  // Filters
  const [careerFilter, setCareerFilter] = useState<CareerPathFilter>(initialCareer || "all");
  const [programTypeFilter, setProgramTypeFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [durationFilter, setDurationFilter] = useState<string>("all");
  const [costFilter, setCostFilter] = useState<string>("all");

  // Location
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [userState, setUserState] = useState<string | null>(null);
  const [locationLoading, setLocationLoading] = useState(true);
  const [sortByDistance, setSortByDistance] = useState(true);

  // Fetch programs from Supabase
  useEffect(() => {
    async function fetchPrograms() {
      try {
        const { data, error } = await supabase
          .from("programs")
          .select("*")
          .order("name");

        if (error) throw error;
        setPrograms(data || []);
      } catch (err) {
        setError("Failed to load programs. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrograms();
  }, []);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          // Find nearest state
          let nearestState = "Various";
          let minDistance = Infinity;

          for (const [state, coords] of Object.entries(stateCoordinates)) {
            const distance = getDistance(latitude, longitude, coords.lat, coords.lng);
            if (distance < minDistance) {
              minDistance = distance;
              nearestState = state;
            }
          }
          setUserState(nearestState);
          setLocationLoading(false);
        },
        () => {
          // Location denied or unavailable
          setLocationLoading(false);
        },
        { timeout: 10000 }
      );
    } else {
      setLocationLoading(false);
    }
  }, []);

  // Filter and sort programs
  const filteredPrograms = useMemo(() => {
    let result = [...programs];

    // Filter by career path
    if (careerFilter !== "all") {
      result = result.filter((p) => p.career_path === careerFilter);
    }

    // Filter by program type
    if (programTypeFilter !== "all") {
      result = result.filter((p) => p.program_type === programTypeFilter);
    }

    // Filter by online
    if (onlineOnly) {
      result = result.filter((p) => p.is_online || p.is_hybrid);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.city.toLowerCase().includes(query) ||
          p.state.toLowerCase().includes(query) ||
          p.credentials.toLowerCase().includes(query)
      );
    }

    // Filter by duration
    if (durationFilter !== "all") {
      result = result.filter((p) => {
        const months = parseDurationToMonths(p.duration);
        switch (durationFilter) {
          case "under6":
            return months < 6;
          case "6to12":
            return months >= 6 && months <= 12;
          case "1to2years":
            return months > 12 && months <= 24;
          case "over2years":
            return months > 24;
          default:
            return true;
        }
      });
    }

    // Filter by cost
    if (costFilter !== "all") {
      result = result.filter((p) => {
        const cost = parseCostToNumber(p.cost_estimate);
        switch (costFilter) {
          case "free":
            return cost === 0;
          case "under5k":
            return cost > 0 && cost < 5000;
          case "5kto15k":
            return cost >= 5000 && cost <= 15000;
          case "15kto30k":
            return cost > 15000 && cost <= 30000;
          case "over30k":
            return cost > 30000;
          default:
            return true;
        }
      });
    }

    // Sort by distance if user location is available
    if (sortByDistance && userLocation) {
      result.sort((a, b) => {
        const coordsA = stateCoordinates[a.state] || stateCoordinates["Various"];
        const coordsB = stateCoordinates[b.state] || stateCoordinates["Various"];

        const distanceA = getDistance(userLocation.lat, userLocation.lng, coordsA.lat, coordsA.lng);
        const distanceB = getDistance(userLocation.lat, userLocation.lng, coordsB.lat, coordsB.lng);

        return distanceA - distanceB;
      });
    }

    return result;
  }, [programs, careerFilter, programTypeFilter, searchQuery, onlineOnly, durationFilter, costFilter, sortByDistance, userLocation]);

  // Get unique program types from filtered results
  const availableProgramTypes = useMemo(() => {
    const types = new Set(programs.map((p) => p.program_type));
    return Array.from(types).sort();
  }, [programs]);

  // Get career path info for display
  const getCareerInfo = (careerPath: string) => {
    return careerPaths[careerPath as CareerPath] || { title: careerPath, icon: "📚" };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading programs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Link href="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-surface-light bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Degree2Trade
          </Link>
          <nav className="flex gap-6 text-text-secondary text-sm">
            <Link href="/programs" className="text-primary">
              Programs
            </Link>
            <Link href="/library" className="hover:text-primary transition-colors">
              Career Library
            </Link>
            <Link href="/financial-aid" className="hover:text-primary transition-colors">
              Financial Aid
            </Link>
            <Link href="/quiz" className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors">
              Take Quiz
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-4 bg-surface border-b border-surface-light">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Training Programs
          </h1>
          <p className="text-text-secondary">
            {filteredPrograms.length} programs found
            {userState && !locationLoading && (
              <span className="ml-2">
                • Showing nearest to {userState}
              </span>
            )}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 px-4 bg-surface-light border-b border-surface-light sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search programs, locations, credentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap gap-3">
            {/* Career Path Filter */}
            <select
              value={careerFilter}
              onChange={(e) => setCareerFilter(e.target.value as CareerPathFilter)}
              className="px-4 py-2 bg-surface border border-surface-light rounded-lg text-text-primary focus:outline-none focus:border-primary"
            >
              <option value="all">All Career Paths</option>
              {(Object.keys(careerPaths) as CareerPath[]).map((key) => (
                <option key={key} value={key}>
                  {careerPaths[key].icon} {careerPaths[key].title}
                </option>
              ))}
            </select>

            {/* Program Type Filter */}
            <select
              value={programTypeFilter}
              onChange={(e) => setProgramTypeFilter(e.target.value)}
              className="px-4 py-2 bg-surface border border-surface-light rounded-lg text-text-primary focus:outline-none focus:border-primary"
            >
              <option value="all">All Program Types</option>
              {availableProgramTypes.map((type) => (
                <option key={type} value={type}>
                  {programTypeNames[type] || type}
                </option>
              ))}
            </select>

            {/* Duration Filter */}
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              className="px-4 py-2 bg-surface border border-surface-light rounded-lg text-text-primary focus:outline-none focus:border-primary"
            >
              <option value="all">Any Duration</option>
              <option value="under6">Under 6 months</option>
              <option value="6to12">6-12 months</option>
              <option value="1to2years">1-2 years</option>
              <option value="over2years">Over 2 years</option>
            </select>

            {/* Cost Filter */}
            <select
              value={costFilter}
              onChange={(e) => setCostFilter(e.target.value)}
              className="px-4 py-2 bg-surface border border-surface-light rounded-lg text-text-primary focus:outline-none focus:border-primary"
            >
              <option value="all">Any Cost</option>
              <option value="free">Free / Paid Training</option>
              <option value="under5k">Under $5,000</option>
              <option value="5kto15k">$5,000 - $15,000</option>
              <option value="15kto30k">$15,000 - $30,000</option>
              <option value="over30k">Over $30,000</option>
            </select>

            {/* Online/Hybrid Toggle */}
            <label className="flex items-center gap-2 px-4 py-2 bg-surface border border-surface-light rounded-lg cursor-pointer">
              <input
                type="checkbox"
                checked={onlineOnly}
                onChange={(e) => setOnlineOnly(e.target.checked)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-text-primary text-sm">Online/Hybrid Only</span>
            </label>

            {/* Sort by Distance Toggle */}
            {userLocation && (
              <label className="flex items-center gap-2 px-4 py-2 bg-surface border border-surface-light rounded-lg cursor-pointer">
                <input
                  type="checkbox"
                  checked={sortByDistance}
                  onChange={(e) => setSortByDistance(e.target.checked)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-text-primary text-sm">Sort by Nearest</span>
              </label>
            )}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredPrograms.length === 0 ? (
            careerFilter === "military" ? (
              <div className="max-w-2xl mx-auto">
                <div className="bg-surface rounded-xl border border-surface-light p-8 text-center">
                  <span className="text-5xl mb-4 block">🎖️</span>
                  <h2 className="text-2xl font-bold mb-4">Military Service Recruitment</h2>
                  <p className="text-text-secondary mb-6">
                    Military careers don&apos;t require traditional training programs. Instead, you&apos;ll
                    receive comprehensive training after enlisting. Visit the official recruitment
                    sites below to learn about opportunities, benefits, and how to get started.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <a
                      href="https://www.goarmy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 bg-surface-light hover:bg-primary/20 border border-surface-light hover:border-primary/50 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">🪖</span>
                      <span className="font-semibold">U.S. Army</span>
                    </a>
                    <a
                      href="https://www.navy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 bg-surface-light hover:bg-primary/20 border border-surface-light hover:border-primary/50 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">⚓</span>
                      <span className="font-semibold">U.S. Navy</span>
                    </a>
                    <a
                      href="https://www.airforce.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 bg-surface-light hover:bg-primary/20 border border-surface-light hover:border-primary/50 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">✈️</span>
                      <span className="font-semibold">U.S. Air Force</span>
                    </a>
                    <a
                      href="https://www.marines.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 bg-surface-light hover:bg-primary/20 border border-surface-light hover:border-primary/50 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">🦅</span>
                      <span className="font-semibold">U.S. Marines</span>
                    </a>
                    <a
                      href="https://www.gocoastguard.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 bg-surface-light hover:bg-primary/20 border border-surface-light hover:border-primary/50 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">🚢</span>
                      <span className="font-semibold">U.S. Coast Guard</span>
                    </a>
                    <a
                      href="https://www.spaceforce.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 bg-surface-light hover:bg-primary/20 border border-surface-light hover:border-primary/50 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">🚀</span>
                      <span className="font-semibold">U.S. Space Force</span>
                    </a>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 text-left">
                    <h3 className="font-semibold text-primary mb-2">Benefits of Military Service</h3>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Comprehensive healthcare coverage</li>
                      <li>• Housing allowance or on-base housing</li>
                      <li>• GI Bill for education (up to full tuition)</li>
                      <li>• Valuable job training and certifications</li>
                      <li>• Retirement benefits after 20 years</li>
                      <li>• College graduates can enter as officers</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-text-secondary text-lg mb-4">
                  No programs match your filters.
                </p>
                <button
                  onClick={() => {
                    setCareerFilter("all");
                    setProgramTypeFilter("all");
                    setSearchQuery("");
                    setOnlineOnly(false);
                    setDurationFilter("all");
                    setCostFilter("all");
                  }}
                  className="text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPrograms.map((program) => {
                const careerInfo = getCareerInfo(program.career_path);
                const distance = userLocation && stateCoordinates[program.state]
                  ? Math.round(getDistance(
                      userLocation.lat,
                      userLocation.lng,
                      stateCoordinates[program.state].lat,
                      stateCoordinates[program.state].lng
                    ))
                  : null;

                return (
                  <div
                    key={program.id}
                    className="bg-surface rounded-xl border border-surface-light overflow-hidden hover:border-primary/50 transition-colors"
                  >
                    {/* Card Header */}
                    <div className="p-4 border-b border-surface-light">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-text-primary line-clamp-2">
                          {program.name}
                        </h3>
                        <span className="text-2xl flex-shrink-0">{careerInfo.icon}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium">
                          {careerInfo.title}
                        </span>
                        <span className="px-2 py-1 bg-surface-light text-text-secondary rounded text-xs">
                          {programTypeNames[program.program_type] || program.program_type}
                        </span>
                        {(program.is_online || program.is_hybrid) && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                            {program.is_online ? "Online" : "Hybrid"}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4">
                      <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                        {program.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-muted">Location:</span>
                          <span className="text-text-primary">
                            {program.city}, {program.state}
                            {distance && sortByDistance && (
                              <span className="text-text-muted ml-1">
                                (~{distance.toLocaleString()} mi)
                              </span>
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Duration:</span>
                          <span className="text-text-primary">{program.duration}</span>
                        </div>
                        {program.cost_estimate && (
                          <div className="flex justify-between">
                            <span className="text-text-muted">Cost:</span>
                            <span className="text-primary font-medium">
                              {program.cost_estimate}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-text-muted">Credentials:</span>
                          <span className="text-text-primary text-right max-w-[60%]">
                            {program.credentials}
                          </span>
                        </div>
                        {program.accreditation && (
                          <div className="flex justify-between">
                            <span className="text-text-muted">Accreditation:</span>
                            <span className="text-success text-right max-w-[60%] text-xs">
                              {program.accreditation}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-4 border-t border-surface-light">
                      <a
                        href={program.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-lg transition-colors"
                      >
                        Visit Program Website →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Back to Quiz CTA */}
      <section className="py-12 px-4 bg-surface border-t border-surface-light">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Not sure which career is right for you?</h2>
          <p className="text-text-secondary mb-6">
            Take our quick quiz to discover careers that match your interests and get personalized program recommendations.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Take the Career Quiz
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface py-8 px-4 border-t border-surface-light">
        <div className="max-w-6xl mx-auto text-center text-text-muted text-sm">
          &copy; 2025 Degree2Trade. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading programs...</p>
          </div>
        </div>
      }
    >
      <ProgramsContent />
    </Suspense>
  );
}
