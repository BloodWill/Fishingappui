import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function WeatherInfo() {
  // Mock weather data
  const weather = {
    temperature: 72,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 8,
    fishingCondition: 'Excellent'
  };

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-cyan-200 shadow-xl overflow-hidden">
      <CardHeader className="pb-3 p-4">
        <CardTitle className="flex items-center gap-2 text-cyan-700 text-lg">
          <Cloud className="w-5 h-5" />
          Today's Fishing Conditions
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-orange-100">
            <Thermometer className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Temperature</p>
              <p className="text-orange-600">{weather.temperature}°F</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-blue-100">
            <Droplets className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Humidity</p>
              <p className="text-blue-600">{weather.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-teal-100">
            <Wind className="w-8 h-8 text-teal-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Wind Speed</p>
              <p className="text-teal-600">{weather.windSpeed} mph</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl">★</div>
            <p className="text-xs text-green-50">Conditions</p>
            <p className="text-white text-sm">{weather.fishingCondition}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}