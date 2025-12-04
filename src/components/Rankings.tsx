import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy, Medal, Award } from 'lucide-react';

export function Rankings() {
  const rankings = [
    { rank: 1, name: 'FishMaster Pro', fishCaught: 247, avatar: '🎣' },
    { rank: 2, name: 'Ocean Hunter', fishCaught: 198, avatar: '🌊' },
    { rank: 3, name: 'Lake Legend', fishCaught: 176, avatar: '⛵' },
    { rank: 4, name: 'River King', fishCaught: 154, avatar: '👑' },
    { rank: 5, name: 'Bass Boss', fishCaught: 142, avatar: '🐟' },
    { rank: 6, name: 'Trout Tracker', fishCaught: 128, avatar: '🎯' },
    { rank: 7, name: 'Angler Elite', fishCaught: 115, avatar: '⭐' },
    { rank: 8, name: 'Deep Sea Dan', fishCaught: 103, avatar: '🌟' },
    { rank: 9, name: 'Tackle Tom', fishCaught: 95, avatar: '🎪' },
    { rank: 10, name: 'Reel Deal', fishCaught: 87, avatar: '💫' },
  ];

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
          <div className="space-y-2">
            {rankings.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all active:scale-95 touch-manipulation ${getRankColor(user.rank)}`}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="flex items-center justify-center w-8 flex-shrink-0">
                    {getMedalIcon(user.rank)}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xl shadow-md flex-shrink-0">
                    {user.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 text-sm truncate">{user.name}</p>
                    <p className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full inline-block">Rank #{user.rank}</p>
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
    </div>
  );
}