import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy, Medal, Award, User, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

interface UserProfile {
  rank: number;
  name: string;
  fishCaught: number;
  avatar: string;
  location: {
    state: string;
    county: string;
    city: string;
    town: string;
  };
  joinDate: string;
  favoriteFish: string;
  totalPoints: number;
  level: number;
}

export function Rankings() {
  const [locationFilter, setLocationFilter] = useState('global');
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);

  const rankings: UserProfile[] = [
    { rank: 1, name: 'FishMaster Pro', fishCaught: 247, avatar: '🎣', location: { state: 'Massachusetts', county: 'Suffolk', city: 'Boston', town: 'Downtown' }, joinDate: 'Jan 2024', favoriteFish: 'Bluefin Tuna', totalPoints: 12350, level: 45 },
    { rank: 2, name: 'Ocean Hunter', fishCaught: 198, avatar: '🌊', location: { state: 'Massachusetts', county: 'Norfolk', city: 'Quincy', town: 'Marina Bay' }, joinDate: 'Feb 2024', favoriteFish: 'Striped Bass', totalPoints: 9900, level: 38 },
    { rank: 3, name: 'Lake Legend', fishCaught: 176, avatar: '⛵', location: { state: 'Rhode Island', county: 'Providence', city: 'Providence', town: 'Fox Point' }, joinDate: 'Dec 2023', favoriteFish: 'Rainbow Trout', totalPoints: 8800, level: 35 },
    { rank: 4, name: 'River King', fishCaught: 154, avatar: '👑', location: { state: 'Massachusetts', county: 'Middlesex', city: 'Cambridge', town: 'Riverside' }, joinDate: 'Mar 2024', favoriteFish: 'Largemouth Bass', totalPoints: 7700, level: 32 },
    { rank: 5, name: 'Bass Boss', fishCaught: 142, avatar: '🐟', location: { state: 'Connecticut', county: 'Hartford', city: 'Hartford', town: 'Downtown' }, joinDate: 'Jan 2024', favoriteFish: 'Smallmouth Bass', totalPoints: 7100, level: 30 },
    { rank: 6, name: 'Trout Tracker', fishCaught: 128, avatar: '🎯', location: { state: 'Massachusetts', county: 'Essex', city: 'Salem', town: 'Harbor District' }, joinDate: 'Apr 2024', favoriteFish: 'Brown Trout', totalPoints: 6400, level: 28 },
    { rank: 7, name: 'Angler Elite', fishCaught: 115, avatar: '⭐', location: { state: 'New Hampshire', county: 'Rockingham', city: 'Portsmouth', town: 'South End' }, joinDate: 'Feb 2024', favoriteFish: 'Atlantic Cod', totalPoints: 5750, level: 25 },
    { rank: 8, name: 'Deep Sea Dan', fishCaught: 103, avatar: '🌟', location: { state: 'Rhode Island', county: 'Newport', city: 'Newport', town: 'Ocean Drive' }, joinDate: 'May 2024', favoriteFish: 'Bluefish', totalPoints: 5150, level: 23 },
    { rank: 9, name: 'Tackle Tom', fishCaught: 95, avatar: '🎪', location: { state: 'Massachusetts', county: 'Plymouth', city: 'Plymouth', town: 'Waterfront' }, joinDate: 'Mar 2024', favoriteFish: 'Northern Pike', totalPoints: 4750, level: 21 },
    { rank: 10, name: 'Reel Deal', fishCaught: 87, avatar: '💫', location: { state: 'Connecticut', county: 'New London', city: 'New London', town: 'Harbor Heights' }, joinDate: 'Jun 2024', favoriteFish: 'Catfish', totalPoints: 4350, level: 19 },
  ];

  const filteredRankings = rankings.filter(user => {
    if (locationFilter === 'global') return true;
    
    const [filterType, filterValue] = locationFilter.split(':');
    switch (filterType) {
      case 'state':
        return user.location.state === filterValue;
      case 'county':
        return user.location.county === filterValue;
      case 'city':
        return user.location.city === filterValue;
      case 'town':
        return user.location.town === filterValue;
      default:
        return true;
    }
  });

  const uniqueStates = Array.from(new Set(rankings.map(u => u.location.state)));
  const uniqueCounties = Array.from(new Set(rankings.map(u => u.location.county)));
  const uniqueCities = Array.from(new Set(rankings.map(u => u.location.city)));
  const uniqueTowns = Array.from(new Set(rankings.map(u => u.location.town)));

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-orange-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-600">{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-500';
      case 2:
        return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-400';
      case 3:
        return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-500';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white shadow-2xl border-none overflow-hidden">
        <CardContent className="pt-5 pb-5 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-2 drop-shadow-lg" />
          <h2 className="text-2xl">Global Rankings</h2>
          <p className="text-purple-100 mt-1 text-sm">
            Compete with anglers worldwide
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-xl border-purple-100">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Trophy className="w-5 h-5" />
            Top Anglers
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 p-4">
          <div className="mb-4">
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {locationFilter === 'global' ? 'Global Rankings' : 
                       locationFilter.split(':')[1] || 'Filter by location'}
                    </span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="global">Global</SelectItem>
                <SelectItem value="divider1" disabled>
                  ── States ──
                </SelectItem>
                {uniqueStates.map(state => (
                  <SelectItem key={state} value={`state:${state}`}>
                    {state}
                  </SelectItem>
                ))}
                <SelectItem value="divider2" disabled>
                  ── Counties ──
                </SelectItem>
                {uniqueCounties.map(county => (
                  <SelectItem key={county} value={`county:${county}`}>
                    {county}
                  </SelectItem>
                ))}
                <SelectItem value="divider3" disabled>
                  ── Cities ──
                </SelectItem>
                {uniqueCities.map(city => (
                  <SelectItem key={city} value={`city:${city}`}>
                    {city}
                  </SelectItem>
                ))}
                <SelectItem value="divider4" disabled>
                  ── Towns ──
                </SelectItem>
                {uniqueTowns.map(town => (
                  <SelectItem key={town} value={`town:${town}`}>
                    {town}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            {filteredRankings.map((user) => (
              <div
                key={user.rank}
                onClick={() => setSelectedUser(user)}
                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all active:scale-95 touch-manipulation cursor-pointer ${getRankColor(user.rank)}`}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="flex items-center justify-center w-8 flex-shrink-0">
                    {getMedalIcon(user.rank)}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xl shadow-md flex-shrink-0">
                    {user.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 text-sm truncate hover:text-cyan-600 transition-colors">{user.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <p className="text-xs text-gray-500 truncate">{user.location.city}, {user.location.state}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-2xl text-cyan-600">{user.fishCaught}</p>
                  <p className="text-xs text-gray-500">Caught</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedUser && (
        <Dialog open={true} onOpenChange={() => setSelectedUser(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader className="pb-3">
              <DialogTitle className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-3xl shadow-md flex-shrink-0">
                  {selectedUser.avatar}
                </div>
                <div>
                  <p>{selectedUser.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                      Rank #{selectedUser.rank}
                    </span>
                    <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full">
                      Level {selectedUser.level}
                    </span>
                  </div>
                </div>
              </DialogTitle>
              <DialogDescription className="sr-only">
                User profile information for {selectedUser.name}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-600 mb-1">Total Catches</p>
                  <p className="text-2xl text-cyan-600">{selectedUser.fishCaught}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-600 mb-1">Total Points</p>
                  <p className="text-2xl text-purple-600">{selectedUser.totalPoints}</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Location</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-800"><span className="text-gray-600">Town:</span> {selectedUser.location.town}</p>
                  <p className="text-sm text-gray-800"><span className="text-gray-600">City:</span> {selectedUser.location.city}</p>
                  <p className="text-sm text-gray-800"><span className="text-gray-600">County:</span> {selectedUser.location.county}</p>
                  <p className="text-sm text-gray-800"><span className="text-gray-600">State:</span> {selectedUser.location.state}</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Favorite Fish</span>
                </div>
                <p className="text-sm text-gray-800">{selectedUser.favoriteFish}</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Member Since</span>
                </div>
                <p className="text-sm text-gray-800">{selectedUser.joinDate}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}