import { useState } from "react";
import { Home } from "./components/Home";
import { FishIndex } from "./components/FishIndex";
import { Rankings } from "./components/Rankings";
import { StyleDemo } from "./components/StyleDemo";
import { Account } from "./components/Account";
import { Fish, Moon, Trophy, Palette, User } from "lucide-react";

type Page = "home" | "index" | "rankings" | "styles" | "account";

export interface CatchRecord {
  fishId: string;
  fishName: string;
  timestamp: Date;
  location?: string;
  detailedLocation?: string;
  size?: number; // in inches
  weight?: number; // in pounds
  weather?: {
    condition: string;
    temperature: number;
    windSpeed: number;
  };
  bait?: string;
  waterTemp?: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [catchHistory, setCatchHistory] = useState<CatchRecord[]>([]);

  const caughtFish = new Set(catchHistory.map(record => record.fishId));

  const handleCatchFish = (fishId: string, fishName: string) => {
    const weatherConditions = ['Sunny', 'Cloudy', 'Partly Cloudy', 'Overcast', 'Light Rain'];
    const baits = ['Live Bait', 'Artificial Lure', 'Fly', 'Jig', 'Crankbait', 'Spinnerbait'];
    const locations = [
      { short: 'Local Waters', detailed: 'Lake Marion, North Dock' },
      { short: 'River Bend', detailed: 'Cooper River, Mile Marker 12' },
      { short: 'Ocean Pier', detailed: 'Folly Beach Pier, South End' },
      { short: 'Creek', detailed: 'Shem Creek, Main Channel' },
    ];
    
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    
    setCatchHistory((prev) => [
      ...prev,
      {
        fishId,
        fishName,
        timestamp: new Date(),
        location: randomLocation.short,
        detailedLocation: randomLocation.detailed,
        size: Math.floor(Math.random() * 30) + 10, // 10-40 inches
        weight: Math.floor(Math.random() * 20) + 2, // 2-22 lbs
        weather: {
          condition: weatherConditions[Math.floor(Math.random() * weatherConditions.length)],
          temperature: Math.floor(Math.random() * 30) + 60, // 60-90°F
          windSpeed: Math.floor(Math.random() * 15) + 5, // 5-20 mph
        },
        bait: baits[Math.floor(Math.random() * baits.length)],
        waterTemp: Math.floor(Math.random() * 30) + 55, // 55-85°F
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-20">
      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 py-4 pb-24">
        {currentPage === "home" && (
          <Home onCatchFish={handleCatchFish} />
        )}
        {currentPage === "index" && (
          <FishIndex
            caughtFish={caughtFish}
            catchHistory={catchHistory}
            onCatchFish={handleCatchFish}
          />
        )}
        {currentPage === "rankings" && <Rankings />}
        {currentPage === "styles" && <StyleDemo />}
        {currentPage === "account" && <Account />}
      </main>

      {/* Bottom Navigation - Android Style */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 safe-bottom">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-around items-center h-16">
            <button
              onClick={() => setCurrentPage("home")}
              className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-xl transition-all min-w-[80px] active:scale-95 ${
                currentPage === "home"
                  ? "text-cyan-600"
                  : "text-gray-500 active:text-cyan-500"
              }`}
            >
              <Fish
                className={`w-6 h-6 transition-all ${currentPage === "home" ? "scale-110" : ""}`}
              />
              <span
                className={`text-xs transition-all ${currentPage === "home" ? "font-semibold" : ""}`}
              >
                Home
              </span>
            </button>
            <button
              onClick={() => setCurrentPage("index")}
              className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-xl transition-all min-w-[80px] active:scale-95 ${
                currentPage === "index"
                  ? "text-cyan-600"
                  : "text-gray-500 active:text-cyan-500"
              }`}
            >
              <Moon
                className={`w-6 h-6 transition-all ${currentPage === "index" ? "scale-110" : ""}`}
              />
              <span
                className={`text-xs transition-all ${currentPage === "index" ? "font-semibold" : ""}`}
              >
                Fish Index
              </span>
            </button>
            <button
              onClick={() => setCurrentPage("rankings")}
              className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-xl transition-all min-w-[80px] active:scale-95 ${
                currentPage === "rankings"
                  ? "text-cyan-600"
                  : "text-gray-500 active:text-cyan-500"
              }`}
            >
              <Trophy
                className={`w-6 h-6 transition-all ${currentPage === "rankings" ? "scale-110" : ""}`}
              />
              <span
                className={`text-xs transition-all ${currentPage === "rankings" ? "font-semibold" : ""}`}
              >
                Rankings
              </span>
            </button>
            <button
              onClick={() => setCurrentPage("styles")}
              className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-xl transition-all min-w-[80px] active:scale-95 ${
                currentPage === "styles"
                  ? "text-cyan-600"
                  : "text-gray-500 active:text-cyan-500"
              }`}
            >
              <Palette
                className={`w-6 h-6 transition-all ${currentPage === "styles" ? "scale-110" : ""}`}
              />
              <span
                className={`text-xs transition-all ${currentPage === "styles" ? "font-semibold" : ""}`}
              >
                Styles
              </span>
            </button>
            <button
              onClick={() => setCurrentPage("account")}
              className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-xl transition-all min-w-[80px] active:scale-95 ${
                currentPage === "account"
                  ? "text-cyan-600"
                  : "text-gray-500 active:text-cyan-500"
              }`}
            >
              <User
                className={`w-6 h-6 transition-all ${currentPage === "account" ? "scale-110" : ""}`}
              />
              <span
                className={`text-xs transition-all ${currentPage === "account" ? "font-semibold" : ""}`}
              >
                Account
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}