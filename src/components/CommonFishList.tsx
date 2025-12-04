import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Fish, Waves, Sparkles, MapPin, Clock, Ruler, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { useState } from 'react';

interface FishData {
  name: string;
  activity: string;
  color: string;
  icon: string;
  description: string;
  habitat: string;
  bestTime: string;
  avgSize: string;
  bait: string;
}

export function CommonFishList() {
  const [selectedFish, setSelectedFish] = useState<FishData | null>(null);

  const commonFish: FishData[] = [
    { 
      name: 'Largemouth Bass', 
      activity: 'High', 
      color: 'bg-green-500', 
      icon: '🐟',
      description: 'One of the most popular game fish in North America. Known for their aggressive strikes and fighting ability.',
      habitat: 'Lakes, ponds, rivers with vegetation and structures',
      bestTime: 'Early morning and late evening',
      avgSize: '12-18 inches',
      bait: 'Plastic worms, crankbaits, spinnerbaits'
    },
    { 
      name: 'Rainbow Trout', 
      activity: 'Medium', 
      color: 'bg-yellow-500', 
      icon: '🎣',
      description: 'Beautiful fish known for their colorful appearance and acrobatic jumps when hooked.',
      habitat: 'Cold, clear streams and lakes',
      bestTime: 'Morning and evening in cooler weather',
      avgSize: '10-14 inches',
      bait: 'Flies, spinners, salmon eggs'
    },
    { 
      name: 'Channel Catfish', 
      activity: 'High', 
      color: 'bg-green-500', 
      icon: '🐠',
      description: 'Bottom-dwelling fish with excellent sense of smell. Great for beginners.',
      habitat: 'Rivers, lakes, ponds with muddy bottoms',
      bestTime: 'Night fishing is most productive',
      avgSize: '15-24 inches',
      bait: 'Chicken liver, stink bait, nightcrawlers'
    },
    { 
      name: 'Bluegill', 
      activity: 'Medium', 
      color: 'bg-yellow-500', 
      icon: '🐡',
      description: 'Small panfish that are perfect for kids and casual fishing. Easy to catch and good to eat.',
      habitat: 'Shallow waters near vegetation',
      bestTime: 'Midday during spawning season',
      avgSize: '6-8 inches',
      bait: 'Worms, crickets, small jigs'
    },
    { 
      name: 'Northern Pike', 
      activity: 'Low', 
      color: 'bg-red-500', 
      icon: '🦈',
      description: 'Aggressive predator with sharp teeth. Provides exciting fights.',
      habitat: 'Weedy areas in lakes and slow rivers',
      bestTime: 'Early spring and fall',
      avgSize: '24-36 inches',
      bait: 'Large spoons, spinnerbaits, live bait'
    },
  ];

  const inSeasonFish: FishData[] = [
    { 
      name: 'Largemouth Bass', 
      activity: 'High', 
      color: 'bg-green-500', 
      icon: '🐟',
      description: 'One of the most popular game fish in North America. Known for their aggressive strikes and fighting ability.',
      habitat: 'Lakes, ponds, rivers with vegetation and structures',
      bestTime: 'Early morning and late evening',
      avgSize: '12-18 inches',
      bait: 'Plastic worms, crankbaits, spinnerbaits'
    },
    { 
      name: 'Channel Catfish', 
      activity: 'High', 
      color: 'bg-green-500', 
      icon: '🐠',
      description: 'Bottom-dwelling fish with excellent sense of smell. Great for beginners.',
      habitat: 'Rivers, lakes, ponds with muddy bottoms',
      bestTime: 'Night fishing is most productive',
      avgSize: '15-24 inches',
      bait: 'Chicken liver, stink bait, nightcrawlers'
    },
  ];

  return (
    <div className="space-y-4">
      {/* In Season Fish */}
      <Card className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-emerald-200 shadow-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="w-5 h-5" />
            In Season Now
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 p-4">
          <div className="grid grid-cols-2 gap-3">
            {inSeasonFish.map((fish, index) => (
              <div
                key={index}
                onClick={() => setSelectedFish(fish)}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md border-2 border-emerald-100 cursor-pointer active:shadow-lg active:border-emerald-300 transition-all active:scale-95 touch-manipulation"
              >
                <div className="text-4xl">
                  {fish.icon}
                </div>
                <span className="text-xs text-center text-gray-800 line-clamp-2">{fish.name}</span>
                <div className="flex items-center gap-1 flex-wrap justify-center">
                  <span className={`${fish.color} text-white px-2 py-0.5 rounded-full text-xs shadow-sm`}>
                    {fish.activity}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs flex items-center gap-1 border border-gray-200">
                    <Ruler className="w-3 h-3" />
                    {fish.avgSize}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Common Fish */}
      <Card className="bg-white shadow-xl border-cyan-100 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Waves className="w-5 h-5" />
            Common Fish in Your Area
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 p-4">
          <div className="grid grid-cols-2 gap-3">
            {commonFish.map((fish, index) => (
              <div
                key={index}
                onClick={() => setSelectedFish(fish)}
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-cyan-50 transition-all cursor-pointer active:shadow-lg active:scale-95 border border-gray-200 active:border-cyan-300 touch-manipulation"
              >
                <div className="text-4xl">
                  {fish.icon}
                </div>
                <span className="text-xs text-center text-gray-800 line-clamp-2">{fish.name}</span>
                <div className="flex items-center gap-1 flex-wrap justify-center">
                  <span className={`${fish.color} text-white px-2 py-0.5 rounded-full text-xs shadow-sm`}>
                    {fish.activity}
                  </span>
                  <span className="bg-white text-gray-700 px-2 py-0.5 rounded-full text-xs flex items-center gap-1 border border-gray-200 shadow-sm">
                    <Ruler className="w-3 h-3" />
                    {fish.avgSize}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fish Details Dialog */}
      <Dialog open={selectedFish !== null} onOpenChange={(open) => !open && setSelectedFish(null)}>
        <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto bg-gradient-to-br from-white to-blue-50 border-2 border-cyan-200">
          {selectedFish && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <span className="text-4xl">{selectedFish.icon}</span>
                  <span className="text-cyan-700">{selectedFish.name}</span>
                </DialogTitle>
                <DialogDescription>
                  Detailed information about this fish species
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Activity Level:</span>
                  <span className={`${selectedFish.color} text-white px-3 py-1 rounded-full text-xs shadow-sm`}>
                    {selectedFish.activity}
                  </span>
                </div>
                
                <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm text-gray-700">Description</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-6">{selectedFish.description}</p>
                </div>

                <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm text-gray-700">Habitat</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-6">{selectedFish.habitat}</p>
                </div>

                <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm text-gray-700">Best Time</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-6">{selectedFish.bestTime}</p>
                </div>

                <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Ruler className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm text-gray-700">Average Size</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-6">{selectedFish.avgSize}</p>
                </div>

                <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Fish className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm text-gray-700">Recommended Bait</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-6">{selectedFish.bait}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}