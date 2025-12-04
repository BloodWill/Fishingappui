import { useState } from "react";
import { Home } from "./components/Home";
import { FishIndex } from "./components/FishIndex";
import { Rankings } from "./components/Rankings";
import { Fish, Moon, Trophy } from "lucide-react";

type Page = "home" | "index" | "rankings";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [caughtFish, setCaughtFish] = useState<Set<string>>(
    new Set(),
  );

  const handleCatchFish = (fishId: string) => {
    setCaughtFish((prev) => new Set([...prev, fishId]));
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
            onCatchFish={handleCatchFish}
          />
        )}
        {currentPage === "rankings" && <Rankings />}
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
          </div>
        </div>
      </nav>
    </div>
  );
}