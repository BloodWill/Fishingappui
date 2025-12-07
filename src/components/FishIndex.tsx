import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Fish, Check, Lock, Calendar, MapPin, X, Ruler, Weight, CloudRain, Wind, Droplets, Trophy, Search, Filter, Award, Star, Target, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ScrollArea } from './ui/scroll-area';
import type { CatchRecord } from '../App';

interface FishIndexProps {
  caughtFish: Set<string>;
  catchHistory: CatchRecord[];
  onCatchFish: (fishId: string, fishName: string) => void;
}

export function FishIndex({ caughtFish, catchHistory, onCatchFish }: FishIndexProps) {
  const [selectedFish, setSelectedFish] = useState<{ id: string; name: string; rarity: string; points: number } | null>(null);
  const [selectedCatch, setSelectedCatch] = useState<CatchRecord | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [rarityFilter, setRarityFilter] = useState('all');
  const [swipeStartX, setSwipeStartX] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  const fishImages: Record<string, string> = {
    'largemouthbass': 'https://images.unsplash.com/photo-1601248981876-29b78bd607df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZW1vdXRoJTIwYmFzcyUyMGZpc2h8ZW58MXx8fHwxNzY0OTE2MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'rainbowtrout': 'https://images.unsplash.com/photo-1592275080939-9ee1757ae0c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluYm93JTIwdHJvdXQlMjBmaXNofGVufDF8fHx8MTc2NDkxNjM3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    'stripedbass': 'https://images.unsplash.com/photo-1722797657635-8a57ebd1d757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJpcGVkJTIwYmFzcyUyMGZpc2h8ZW58MXx8fHwxNzY0OTE2MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'northernpike': 'https://images.unsplash.com/photo-1763047176928-1a80d696836a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMHBpa2UlMjBmaXNofGVufDF8fHx8MTc2NDkxNjM3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'catfish': 'https://images.unsplash.com/photo-1554147686-44c8fc1f4b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRmaXNoJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3NjQ5MTYzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'bluegill': 'https://images.unsplash.com/photo-1614113234992-f28cc4fcdad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlZ2lsbCUyMGZpc2h8ZW58MXx8fHwxNzY0OTE2MzczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'carp': 'https://images.unsplash.com/photo-1667874529958-12a8ae3a9b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwJTIwZmlzaHxlbnwxfHx8fDE3NjQ5MTYzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'atlanticcod': 'https://images.unsplash.com/photo-1761080363229-c05853780bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGxhbnRpYyUyMGNvZCUyMGZpc2h8ZW58MXx8fHwxNzY0OTE2Mzc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'bluefintuna': 'https://images.unsplash.com/photo-1760559059115-96955377ef30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwZmlzaCUyMG9jZWFufGVufDF8fHx8MTc2NDg2NjMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    // Default fish image for others
    'default': 'https://images.unsplash.com/photo-1709255445292-27ec2bb83abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaHdhdGVyJTIwZmlzaHxlbnwxfHx8fDE3NjQ5MTYzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  };

  const getFishImage = (fishId: string) => {
    return fishImages[fishId] || fishImages['default'];
  };

  const allFish = [
    // Common Fish (9 species)
    { id: 'bluegill', name: 'Bluegill', rarity: 'Common', points: 10 },
    { id: 'crappie', name: 'Crappie', rarity: 'Common', points: 10 },
    { id: 'yellowperch', name: 'Yellow Perch', rarity: 'Common', points: 10 },
    { id: 'whiteperch', name: 'White Perch', rarity: 'Common', points: 10 },
    { id: 'scup', name: 'Scup', rarity: 'Common', points: 10 },
    { id: 'mackerel', name: 'Mackerel', rarity: 'Common', points: 10 },
    { id: 'whiting', name: 'Whiting', rarity: 'Common', points: 10 },
    { id: 'flounder', name: 'Flounder', rarity: 'Common', points: 10 },
    { id: 'carp', name: 'Carp', rarity: 'Common', points: 10 },
    
    // Uncommon Fish (10 species)
    { id: 'largemouthbass', name: 'Largemouth Bass', rarity: 'Uncommon', points: 25 },
    { id: 'smallmouthbass', name: 'Smallmouth Bass', rarity: 'Uncommon', points: 25 },
    { id: 'rainbowtrout', name: 'Rainbow Trout', rarity: 'Uncommon', points: 25 },
    { id: 'browntrout', name: 'Brown Trout', rarity: 'Uncommon', points: 25 },
    { id: 'catfish', name: 'Catfish', rarity: 'Uncommon', points: 25 },
    { id: 'chainpickerel', name: 'Chain Pickerel', rarity: 'Uncommon', points: 25 },
    { id: 'blackseabass', name: 'Black Sea Bass', rarity: 'Uncommon', points: 25 },
    { id: 'fluke', name: 'Fluke', rarity: 'Uncommon', points: 25 },
    { id: 'hake', name: 'Hake', rarity: 'Uncommon', points: 25 },
    { id: 'tautog', name: 'Tautog', rarity: 'Uncommon', points: 25 },
    
    // Rare Fish (8 species)
    { id: 'stripedbass', name: 'Striped Bass', rarity: 'Rare', points: 50 },
    { id: 'laketrout', name: 'Lake Trout', rarity: 'Rare', points: 50 },
    { id: 'northernpike', name: 'Northern Pike', rarity: 'Rare', points: 50 },
    { id: 'landlockedsalmon', name: 'Landlocked Salmon', rarity: 'Rare', points: 50 },
    { id: 'bluefish', name: 'Bluefish', rarity: 'Rare', points: 50 },
    { id: 'atlanticcod', name: 'Atlantic Cod', rarity: 'Rare', points: 50 },
    { id: 'haddock', name: 'Haddock', rarity: 'Rare', points: 50 },
    { id: 'cusk', name: 'Cusk', rarity: 'Rare', points: 50 },
    
    // Epic Fish (2 species)
    { id: 'redfish', name: 'Redfish', rarity: 'Epic', points: 100 },
    { id: 'squid', name: 'Squid', rarity: 'Epic', points: 100 },
    
    // Legendary Fish (1 species)
    { id: 'bluefintuna', name: 'Bluefin Tuna', rarity: 'Legendary', points: 200 },
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

  const formatDate = (date: Date) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatTime = (date: Date) => {
    const d = new Date(date);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const getBiggestCatch = (fishId: string): CatchRecord | null => {
    const fishCatches = catchHistory.filter(r => r.fishId === fishId);
    if (fishCatches.length === 0) return null;
    
    return fishCatches.reduce((biggest, current) => {
      if (!current.size) return biggest;
      if (!biggest.size) return current;
      return current.size > biggest.size ? current : biggest;
    }, fishCatches[0]);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>, fish: { id: string; name: string; rarity: string; points: number }) => {
    setSwipeStartX(e.touches[0].clientX);
    setSelectedFish(fish);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (swipeStartX === null) return;
    const currentX = e.changedTouches[0].clientX;
    const deltaX = currentX - swipeStartX;
    if (deltaX > 50) {
      setSelectedFish(null);
    }
    setSwipeStartX(null);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (swipeStartX === null) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - swipeStartX;
    if (deltaX > 50) {
      setSelectedFish(null);
    }
  };

  const filteredFish = allFish.filter(fish => {
    const nameMatch = fish.name.toLowerCase().includes(searchQuery.toLowerCase());
    const rarityMatch = rarityFilter === 'all' || fish.rarity === rarityFilter;
    return nameMatch && rarityMatch;
  });

  const fishPerPage = 18;
  const totalPages = Math.ceil(filteredFish.length / fishPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(0);
  }, [searchQuery, rarityFilter]);

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

      <Tabs defaultValue="collection" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-12 bg-white shadow-md">
          <TabsTrigger 
            value="collection" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-xs"
          >
            <Fish className="w-4 h-4 mr-1" />
            Collection
          </TabsTrigger>
          <TabsTrigger 
            value="history"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-xs"
          >
            <Calendar className="w-4 h-4 mr-1" />
            History
          </TabsTrigger>
          <TabsTrigger 
            value="badges"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-xs"
          >
            <Award className="w-4 h-4 mr-1" />
            Badges
          </TabsTrigger>
        </TabsList>

        <TabsContent value="collection" className="mt-4">
          <Card className="bg-white shadow-xl border-cyan-100">
            <CardContent className="pt-4 p-4">
              <div className="flex items-center justify-between mb-4">
                <Input
                  type="text"
                  placeholder="Search fish..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-1/2"
                />
                <Select
                  value={rarityFilter}
                  onValueChange={setRarityFilter}
                  className="w-1/4"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by rarity">
                      {rarityFilter}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Common">Common</SelectItem>
                    <SelectItem value="Uncommon">Uncommon</SelectItem>
                    <SelectItem value="Rare">Rare</SelectItem>
                    <SelectItem value="Epic">Epic</SelectItem>
                    <SelectItem value="Legendary">Legendary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <ScrollArea className="h-[500px]">
                <div className="grid grid-cols-3 gap-2">
                  {filteredFish.slice(currentPage * fishPerPage, (currentPage + 1) * fishPerPage).map((fish) => {
                    const isCaught = caughtFish.has(fish.id);
                    const biggestCatch = isCaught ? getBiggestCatch(fish.id) : null;
                    return (
                      <div
                        key={fish.id}
                        onClick={() => isCaught && setSelectedFish(fish)}
                        onTouchStart={(e) => handleTouchStart(e, fish)}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={handleTouchMove}
                        className={`relative p-2 rounded-lg border-2 transition-all touch-manipulation flex flex-col items-center gap-1.5 ${
                          isCaught
                            ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-emerald-400 shadow-md cursor-pointer active:scale-95'
                            : 'bg-gray-50 border-gray-300 opacity-60'
                        }`}
                      >
                        {isCaught && biggestCatch && (
                          <div className="absolute top-1 right-1">
                            <Trophy className="w-3 h-3 text-yellow-500" />
                          </div>
                        )}
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md flex-shrink-0 ${
                            isCaught ? 'bg-gradient-to-br from-emerald-400 to-green-500' : 'bg-gray-400'
                          }`}
                        >
                          {isCaught ? (
                            <Check className="w-4 h-4 text-white" />
                          ) : (
                            <Lock className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <p className={`text-[10px] text-center line-clamp-2 min-h-[1.5rem] leading-tight ${isCaught ? 'text-gray-800' : 'text-gray-500'}`}>
                          {fish.name}
                        </p>
                        {isCaught && biggestCatch && biggestCatch.size && (
                          <div className="flex items-center gap-1">
                            <Ruler className="w-3 h-3 text-cyan-600" />
                            <span className="text-[9px] text-gray-700">{biggestCatch.size}&quot;</span>
                          </div>
                        )}
                        {isCaught && biggestCatch && biggestCatch.timestamp && (
                          <p className="text-[8px] text-gray-500">{formatDate(biggestCatch.timestamp)}</p>
                        )}
                        <div className="flex flex-col items-center gap-1 w-full">
                          <span className={`${getRarityColor(fish.rarity)} text-white px-1.5 py-0.5 rounded-full text-[10px] shadow-sm w-full text-center`}>
                            {fish.rarity}
                          </span>
                          <span className="text-[10px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded-full">{fish.points} pts</span>
                        </div>
                        {!isCaught && (
                          <Button
                            size="sm"
                            onClick={() => onCatchFish(fish.id, fish.name)}
                            className="bg-cyan-500 hover:bg-cyan-600 shadow-md active:scale-95 touch-manipulation w-full h-7 text-[10px] mt-0.5"
                          >
                            Mark
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
              <div className="flex justify-between items-center mt-4">
                <Button
                  size="sm"
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className="bg-gray-200 hover:bg-gray-300 shadow-md active:scale-95 touch-manipulation w-20 h-7 text-[10px] mt-0.5"
                >
                  Prev
                </Button>
                <p className="text-sm text-gray-500">
                  Page {currentPage + 1} of {totalPages}
                </p>
                <Button
                  size="sm"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                  className="bg-gray-200 hover:bg-gray-300 shadow-md active:scale-95 touch-manipulation w-20 h-7 text-[10px] mt-0.5"
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <Card className="bg-white shadow-xl border-cyan-100">
            <CardContent className="pt-4 p-4">
              {catchHistory.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Fish className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>No catches yet!</p>
                  <p className="text-sm mt-1">Start fishing to build your history</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {catchHistory.slice().reverse().map((record, index) => {
                    const fish = allFish.find((f) => f.id === record.fishId);
                    if (!fish) return null;
                    return (
                      <div
                        key={index}
                        onClick={() => setSelectedCatch(record)}
                        className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-lg p-3 flex items-center gap-3 shadow-sm cursor-pointer active:scale-98 transition-transform"
                      >
                        <img 
                          src={getFishImage(fish.id)}
                          alt={fish.name}
                          className="w-14 h-14 rounded-lg object-cover flex-shrink-0 shadow-md"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="truncate">{fish.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`${getRarityColor(fish.rarity)} text-white px-2 py-0.5 rounded-full text-[10px]`}>
                              {fish.rarity}
                            </span>
                            <span className="text-[10px] text-gray-600">+{fish.points} pts</span>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-[11px] text-gray-600 flex items-center gap-1 justify-end">
                            <Calendar className="w-3 h-3" />
                            {formatDate(record.timestamp)}
                          </p>
                          <p className="text-[10px] text-gray-500 mt-0.5">{formatTime(record.timestamp)}</p>
                          {record.location && (
                            <p className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5 justify-end">
                              <MapPin className="w-3 h-3" />
                              {record.location}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="badges" className="mt-4">
          <Card className="bg-white shadow-xl border-cyan-100">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award className="w-5 h-5" />
                Achievement Badges
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4">
              <ScrollArea className="h-[500px]">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'first-catch', name: 'First Catch', description: 'Catch your first fish', icon: Fish, unlocked: caughtFish.size >= 1 },
                    { id: 'explorer', name: 'Explorer', description: 'Catch 5 different species', icon: Target, unlocked: caughtFish.size >= 5 },
                    { id: 'collector', name: 'Collector', description: 'Catch 10 different species', icon: Award, unlocked: caughtFish.size >= 10 },
                    { id: 'master', name: 'Master Angler', description: 'Catch 20 different species', icon: Trophy, unlocked: caughtFish.size >= 20 },
                    { id: 'legend', name: 'Legend', description: 'Complete the collection', icon: Star, unlocked: caughtFish.size === totalFish },
                    { id: 'common', name: 'Common Hunter', description: 'Catch 5 common fish', icon: Fish, unlocked: catchHistory.filter(c => allFish.find(f => f.id === c.fishId)?.rarity === 'Common').length >= 5 },
                    { id: 'uncommon', name: 'Uncommon Hunter', description: 'Catch 5 uncommon fish', icon: Fish, unlocked: catchHistory.filter(c => allFish.find(f => f.id === c.fishId)?.rarity === 'Uncommon').length >= 5 },
                    { id: 'rare', name: 'Rare Hunter', description: 'Catch 3 rare fish', icon: Fish, unlocked: catchHistory.filter(c => allFish.find(f => f.id === c.fishId)?.rarity === 'Rare').length >= 3 },
                    { id: 'epic', name: 'Epic Hunter', description: 'Catch an epic fish', icon: Zap, unlocked: catchHistory.filter(c => allFish.find(f => f.id === c.fishId)?.rarity === 'Epic').length >= 1 },
                    { id: 'legendary', name: 'Legendary Hunter', description: 'Catch a legendary fish', icon: Trophy, unlocked: catchHistory.filter(c => allFish.find(f => f.id === c.fishId)?.rarity === 'Legendary').length >= 1 },
                    { id: 'frequent', name: 'Frequent Angler', description: 'Catch 25 fish', icon: Fish, unlocked: catchHistory.length >= 25 },
                    { id: 'dedicated', name: 'Dedicated Angler', description: 'Catch 50 fish', icon: Trophy, unlocked: catchHistory.length >= 50 },
                  ].map((badge) => (
                    <div
                      key={badge.id}
                      className={`relative p-3 rounded-lg border-2 transition-all touch-manipulation flex flex-col items-center gap-2 ${
                        badge.unlocked
                          ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-400 shadow-md'
                          : 'bg-gray-100 border-gray-300 opacity-50'
                      }`}
                    >
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md flex-shrink-0 ${
                          badge.unlocked ? 'bg-gradient-to-br from-yellow-400 to-amber-500' : 'bg-gray-400'
                        }`}
                      >
                        <badge.icon className={`w-7 h-7 ${badge.unlocked ? 'text-white' : 'text-gray-300'}`} />
                      </div>
                      <p className="text-xs text-center line-clamp-2 min-h-[2rem] leading-tight">
                        {badge.name}
                      </p>
                      <p className="text-[9px] text-gray-600 text-center line-clamp-2">
                        {badge.description}
                      </p>
                      {!badge.unlocked && (
                        <Lock className="w-4 h-4 text-gray-400 absolute top-2 right-2" />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedFish && (
        <Dialog open={true} onOpenChange={() => setSelectedFish(null)}>
          <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
            <DialogHeader className="pb-3">
              <DialogTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Fish className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p>{selectedFish.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`${getRarityColor(selectedFish.rarity)} text-white px-2 py-0.5 rounded-full text-[10px]`}>
                        {selectedFish.rarity}
                      </span>
                      <span className="text-[10px] text-gray-600">+{selectedFish.points} pts</span>
                    </div>
                  </div>
                </div>
              </DialogTitle>
              <DialogDescription className="sr-only">
                View catch history and statistics for {selectedFish.name}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              {(() => {
                const biggestCatch = getBiggestCatch(selectedFish.id);
                return biggestCatch ? (
                  <>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <p className="text-sm">Biggest Catch</p>
                      </div>
                      <img 
                        src={getFishImage(selectedFish.id)}
                        alt={selectedFish.name}
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        {biggestCatch.size && (
                          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Ruler className="w-4 h-4 text-cyan-600" />
                              <span className="text-xs text-gray-600">Length</span>
                            </div>
                            <p className="text-cyan-700">{biggestCatch.size}&quot;</p>
                          </div>
                        )}
                        {biggestCatch.weight && (
                          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Weight className="w-4 h-4 text-purple-600" />
                              <span className="text-xs text-gray-600">Weight</span>
                            </div>
                            <p className="text-purple-700">{biggestCatch.weight} lbs</p>
                          </div>
                        )}
                      </div>
                      <div className="mt-2">
                        <p className="text-[11px] text-gray-600 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(biggestCatch.timestamp)} at {formatTime(biggestCatch.timestamp)}
                        </p>
                        {biggestCatch.location && (
                          <p className="text-[11px] text-gray-600 flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" />
                            {biggestCatch.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                ) : null;
              })()}
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-2">All Catches</p>
                  {(() => {
                    const fishCatches = catchHistory.filter(r => r.fishId === selectedFish.id);
                    const biggestCatch = getBiggestCatch(selectedFish.id);
                    return fishCatches.length > 0 ? (
                      <ScrollArea className="h-[180px] rounded-md border p-2 bg-gray-50">
                        <div className="space-y-1.5">
                          {fishCatches.slice().reverse().map((record, idx) => {
                            const isBiggest = biggestCatch && record.timestamp === biggestCatch.timestamp && record.size === biggestCatch.size;
                            return (
                              <div 
                                key={idx}
                                onClick={() => setSelectedCatch(record)}
                                className={`${
                                  isBiggest 
                                    ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-400'
                                    : 'bg-white border border-emerald-200'
                                } rounded-md p-2 cursor-pointer hover:shadow-sm transition-all active:scale-98`}
                              >
                                <div className="flex justify-between items-center">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-1.5">
                                      <p className="text-xs">Catch #{fishCatches.length - idx}</p>
                                      {isBiggest && (
                                        <Trophy className="w-3 h-3 text-yellow-600" />
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                      {record.size && (
                                        <div className="flex items-center gap-0.5">
                                          <Ruler className="w-2.5 h-2.5 text-cyan-600" />
                                          <span className="text-[9px] text-gray-700">{record.size}&quot;</span>
                                        </div>
                                      )}
                                      {record.weight && (
                                        <div className="flex items-center gap-0.5">
                                          <Weight className="w-2.5 h-2.5 text-purple-600" />
                                          <span className="text-[9px] text-gray-700">{record.weight} lbs</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-[9px] text-gray-500">{formatDate(record.timestamp)}</p>
                                    <p className="text-[8px] text-gray-400">{formatTime(record.timestamp)}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </ScrollArea>
                    ) : (
                      <p className="text-sm text-gray-500 italic">No catches recorded yet</p>
                    );
                  })()}
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Catches:</span>
                    <span className="text-cyan-600">{catchHistory.filter(r => r.fishId === selectedFish.id).length}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-600">Total Points:</span>
                    <span className="text-cyan-600">{catchHistory.filter(r => r.fishId === selectedFish.id).length * selectedFish.points}</span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {selectedCatch && (
        <Dialog open={true} onOpenChange={() => setSelectedCatch(null)}>
          <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
            <DialogHeader className="pb-3">
              <DialogTitle>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Fish className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p>{selectedCatch.fishName}</p>
                    <p className="text-xs text-gray-600">{formatDate(selectedCatch.timestamp)} at {formatTime(selectedCatch.timestamp)}</p>
                  </div>
                </div>
              </DialogTitle>
              <DialogDescription className="sr-only">
                Detailed catch information for {selectedCatch.fishName}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4 space-y-4">
              <img 
                src={getFishImage(selectedCatch.fishId)}
                alt={selectedCatch.fishName}
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
              
              <div className="grid grid-cols-2 gap-3">
                {selectedCatch.size && (
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Ruler className="w-4 h-4 text-cyan-600" />
                      <span className="text-xs text-gray-600">Length</span>
                    </div>
                    <p className="text-cyan-700">{selectedCatch.size}&quot;</p>
                  </div>
                )}
                
                {selectedCatch.weight && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Weight className="w-4 h-4 text-purple-600" />
                      <span className="text-xs text-gray-600">Weight</span>
                    </div>
                    <p className="text-purple-700">{selectedCatch.weight} lbs</p>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Location</span>
                </div>
                <p className="text-sm text-gray-800">{selectedCatch.detailedLocation || selectedCatch.location || 'Unknown'}</p>
              </div>

              {selectedCatch.weather && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <CloudRain className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-gray-700">Weather Conditions</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Condition</span>
                      <span className="text-sm text-gray-800">{selectedCatch.weather.condition}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Temperature</span>
                      <span className="text-sm text-gray-800">{selectedCatch.weather.temperature}°F</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <Wind className="w-3 h-3" />
                        Wind Speed
                      </span>
                      <span className="text-sm text-gray-800">{selectedCatch.weather.windSpeed} mph</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedCatch.waterTemp && (
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Droplets className="w-4 h-4 text-teal-600" />
                    <span className="text-sm text-gray-700">Water Temperature</span>
                  </div>
                  <p className="text-teal-700">{selectedCatch.waterTemp}°F</p>
                </div>
              )}

              {selectedCatch.bait && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Fish className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Bait Used</span>
                  </div>
                  <p className="text-green-700">{selectedCatch.bait}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}