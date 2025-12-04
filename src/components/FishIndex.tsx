import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Fish, Check, Lock } from 'lucide-react';
import { Button } from './ui/button';

interface FishIndexProps {
  caughtFish: Set<string>;
  onCatchFish: (fishId: string) => void;
}

export function FishIndex({ caughtFish, onCatchFish }: FishIndexProps) {
  const allFish = [
    { id: 'bass', name: 'Largemouth Bass', rarity: 'Common', points: 10 },
    { id: 'trout', name: 'Rainbow Trout', rarity: 'Common', points: 10 },
    { id: 'salmon', name: 'Atlantic Salmon', rarity: 'Uncommon', points: 25 },
    { id: 'pike', name: 'Northern Pike', rarity: 'Uncommon', points: 25 },
    { id: 'catfish', name: 'Channel Catfish', rarity: 'Common', points: 10 },
    { id: 'walleye', name: 'Walleye', rarity: 'Rare', points: 50 },
    { id: 'muskie', name: 'Muskellunge', rarity: 'Rare', points: 50 },
    { id: 'sturgeon', name: 'Lake Sturgeon', rarity: 'Epic', points: 100 },
    { id: 'marlin', name: 'Blue Marlin', rarity: 'Epic', points: 100 },
    { id: 'tuna', name: 'Bluefin Tuna', rarity: 'Legendary', points: 200 },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-gray-500';
      case 'Uncommon': return 'bg-green-500';
      case 'Rare': return 'bg-blue-500';
      case 'Epic': return 'bg-purple-500';
      case 'Legendary': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const caughtCount = caughtFish.size;
  const totalFish = allFish.length;

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl border-none overflow-hidden">
        <CardContent className="pt-5 p-4">
          <div className="text-center">
            <p className="text-cyan-100 text-sm">Your Collection</p>
            <p className="text-4xl mt-2">{caughtCount} / {totalFish}</p>
            <div className="w-full bg-white/20 rounded-full h-3 mt-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${(caughtCount / totalFish) * 100}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-xl border-cyan-100">
        <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Fish className="w-5 h-5" />
            Fish Collection
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 p-4">
          <div className="grid grid-cols-1 gap-3">
            {allFish.map((fish) => {
              const isCaught = caughtFish.has(fish.id);
              return (
                <div
                  key={fish.id}
                  className={`relative p-4 rounded-xl border-2 transition-all touch-manipulation ${
                    isCaught
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-emerald-400 shadow-md'
                      : 'bg-gray-50 border-gray-300 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0 ${
                          isCaught ? 'bg-gradient-to-br from-emerald-400 to-green-500' : 'bg-gray-400'
                        }`}
                      >
                        {isCaught ? (
                          <Check className="w-6 h-6 text-white" />
                        ) : (
                          <Lock className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm truncate ${isCaught ? 'text-gray-800' : 'text-gray-500'}`}>
                          {fish.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`${getRarityColor(fish.rarity)} text-white px-2 py-0.5 rounded-full text-xs shadow-sm`}>
                            {fish.rarity}
                          </span>
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">{fish.points} pts</span>
                        </div>
                      </div>
                    </div>
                    {!isCaught && (
                      <Button
                        size="sm"
                        onClick={() => onCatchFish(fish.id)}
                        className="bg-cyan-500 hover:bg-cyan-600 shadow-md active:scale-95 touch-manipulation flex-shrink-0 h-9"
                      >
                        Mark
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}