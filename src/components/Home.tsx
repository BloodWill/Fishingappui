import { WeatherInfo } from './WeatherInfo';
import { CommonFishList } from './CommonFishList';
import { Camera, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface HomeProps {
  onCatchFish: (fishId: string, fishName: string) => void;
}

export function Home({ onCatchFish }: HomeProps) {
  const [isScanning, setIsScanning] = useState(false);

  const handleRecognition = () => {
    setIsScanning(true);
    // Simulate fish recognition
    setTimeout(() => {
      setIsScanning(false);
      // Randomly catch a fish for demo purposes
      const fishOptions = [
        { id: 'largemouthbass', name: 'Largemouth Bass' },
        { id: 'rainbowtrout', name: 'Rainbow Trout' },
        { id: 'stripedbass', name: 'Striped Bass' },
        { id: 'northernpike', name: 'Northern Pike' },
        { id: 'catfish', name: 'Catfish' }
      ];
      const randomFish = fishOptions[Math.floor(Math.random() * fishOptions.length)];
      onCatchFish(randomFish.id, randomFish.name);
      alert(`Fish recognized! You caught a ${randomFish.name}!`);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      {/* Fish Recognition Button - Optimized for mobile */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-4 shadow-lg">
        <Button
          onClick={handleRecognition}
          disabled={isScanning}
          className="w-full h-14 bg-white hover:bg-gray-50 text-cyan-600 shadow-md hover:shadow-lg transition-all active:scale-95 touch-manipulation"
        >
          {isScanning ? (
            <>
              <Sparkles className="w-5 h-5 mr-2 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <Camera className="w-5 h-5 mr-2" />
              Recognize Your Catch
            </>
          )}
        </Button>
      </div>

      {/* Weather Section */}
      <WeatherInfo />

      {/* Common Fish List */}
      <CommonFishList />
    </div>
  );
}