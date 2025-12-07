import { Thermometer, Droplets, Wind, Fish, Ruler, Sparkles } from 'lucide-react';

export function StyleDemo() {
  return (
    <div className="space-y-8 pb-8">
      <div className="bg-white rounded-2xl p-4 shadow-lg sticky top-0 z-10">
        <h1 className="text-cyan-700">Design Style Gallery</h1>
        <p className="text-sm text-gray-600">Tap any style to see it in action</p>
      </div>

      {/* 1. Glassmorphism */}
      <section className="space-y-3">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-1">
          <h2 className="text-white px-3 py-2">1. Glassmorphism</h2>
        </div>
        <p className="text-sm text-gray-600 px-2">Frosted glass effect with transparency and blur</p>
        
        {/* Background for glass effect */}
        <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-2xl p-6 space-y-3">
          {/* Weather Card */}
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 border border-white/30 shadow-xl">
            <h3 className="text-white mb-3">Today's Conditions</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-xs text-white/70">Temp</p>
                    <p className="text-white">72°F</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-xs text-white/70">Humidity</p>
                    <p className="text-white">65%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fish Card */}
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 border border-white/30 shadow-xl">
            <h3 className="text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              In Season Fish
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex flex-col items-center gap-2">
                <div className="text-3xl">🐟</div>
                <span className="text-xs text-white text-center">Largemouth Bass</span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs border border-white/30">
                  High Activity
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex flex-col items-center gap-2">
                <div className="text-3xl">🎣</div>
                <span className="text-xs text-white text-center">Rainbow Trout</span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs border border-white/30">
                  Medium
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Neumorphism */}
      <section className="space-y-3">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-1">
          <h2 className="text-white px-3 py-2">2. Neumorphism</h2>
        </div>
        <p className="text-sm text-gray-600 px-2">Soft, embossed 3D look with subtle shadows</p>
        
        <div className="bg-gray-200 rounded-2xl p-6 space-y-3">
          {/* Weather Card */}
          <div className="bg-gray-200 rounded-2xl p-4 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
            <h3 className="text-gray-700 mb-3">Today's Conditions</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-200 rounded-xl p-3 shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff]">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-6 h-6 text-orange-500" />
                  <div>
                    <p className="text-xs text-gray-500">Temp</p>
                    <p className="text-gray-700">72°F</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-xl p-3 shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff]">
                <div className="flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-xs text-gray-500">Humidity</p>
                    <p className="text-gray-700">65%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fish Card */}
          <div className="bg-gray-200 rounded-2xl p-4 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
            <h3 className="text-gray-700 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-500" />
              In Season Fish
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-200 rounded-xl p-4 shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] flex flex-col items-center gap-2 active:shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff]">
                <div className="text-3xl">🐟</div>
                <span className="text-xs text-gray-700 text-center">Largemouth Bass</span>
                <span className="bg-gray-200 text-green-600 px-3 py-1 rounded-full text-xs shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff]">
                  High
                </span>
              </div>
              <div className="bg-gray-200 rounded-xl p-4 shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] flex flex-col items-center gap-2">
                <div className="text-3xl">🎣</div>
                <span className="text-xs text-gray-700 text-center">Rainbow Trout</span>
                <span className="bg-gray-200 text-yellow-600 px-3 py-1 rounded-full text-xs shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff]">
                  Medium
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Material Design 3 */}
      <section className="space-y-3">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-1">
          <h2 className="text-white px-3 py-2">3. Material Design 3</h2>
        </div>
        <p className="text-sm text-gray-600 px-2">Dynamic colors with elevation and state layers</p>
        
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 space-y-3">
          {/* Weather Card */}
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-purple-100">
            <h3 className="text-purple-900 mb-3">Today's Conditions</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-orange-50 rounded-2xl p-3 border-2 border-orange-200 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Thermometer className="w-6 h-6 text-orange-700" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-800">Temp</p>
                    <p className="text-orange-900">72°F</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-3 border-2 border-blue-200 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-800">Humidity</p>
                    <p className="text-blue-900">65%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fish Card */}
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-purple-100">
            <h3 className="text-purple-900 mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-700" />
              </div>
              In Season Fish
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 shadow-md border-2 border-green-200 flex flex-col items-center gap-2 active:shadow-xl active:scale-[0.98] transition-all">
                <div className="text-3xl">🐟</div>
                <span className="text-xs text-gray-800 text-center">Largemouth Bass</span>
                <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-xs shadow-md">
                  High Activity
                </span>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-4 shadow-md border-2 border-amber-200 flex flex-col items-center gap-2 active:shadow-xl active:scale-[0.98] transition-all">
                <div className="text-3xl">🎣</div>
                <span className="text-xs text-gray-800 text-center">Rainbow Trout</span>
                <span className="bg-amber-600 text-white px-4 py-1.5 rounded-full text-xs shadow-md">
                  Medium
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brutalist/Bold */}
      <section className="space-y-3">
        <div className="bg-black border-4 border-yellow-400 p-1">
          <h2 className="text-yellow-400 px-3 py-2">4. Brutalist/Bold</h2>
        </div>
        <p className="text-sm text-gray-600 px-2">High contrast, thick borders, retro arcade vibes</p>
        
        <div className="bg-yellow-300 border-4 border-black rounded-none p-6 space-y-4">
          {/* Weather Card */}
          <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-black mb-3 uppercase tracking-wide">Today's Conditions</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-orange-400 border-3 border-black p-3">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-7 h-7 text-black" strokeWidth={3} />
                  <div>
                    <p className="text-xs text-black uppercase">Temp</p>
                    <p className="text-black text-lg">72°F</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-400 border-3 border-black p-3">
                <div className="flex items-center gap-2">
                  <Droplets className="w-7 h-7 text-black" strokeWidth={3} />
                  <div>
                    <p className="text-xs text-black uppercase">Humidity</p>
                    <p className="text-black text-lg">65%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fish Card */}
          <div className="bg-cyan-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-black mb-3 uppercase tracking-wide flex items-center gap-2">
              <Sparkles className="w-6 h-6" strokeWidth={3} />
              In Season Fish
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border-4 border-black p-4 flex flex-col items-center gap-2 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-3xl">🐟</div>
                <span className="text-xs text-black text-center uppercase">Bass</span>
                <span className="bg-green-500 text-black border-2 border-black px-3 py-1 text-xs uppercase">
                  High
                </span>
              </div>
              <div className="bg-white border-4 border-black p-4 flex flex-col items-center gap-2 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-3xl">🎣</div>
                <span className="text-xs text-black text-center uppercase">Trout</span>
                <span className="bg-yellow-500 text-black border-2 border-black px-3 py-1 text-xs uppercase">
                  Medium
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nature/Organic */}
      <section className="space-y-3">
        <div className="bg-gradient-to-r from-green-700 to-emerald-700 rounded-2xl p-1">
          <h2 className="text-amber-100 px-3 py-2">5. Nature/Organic</h2>
        </div>
        <p className="text-sm text-gray-600 px-2">Earthy tones, natural textures, outdoor aesthetic</p>
        
        <div className="bg-gradient-to-br from-amber-100 via-green-50 to-emerald-100 rounded-3xl p-6 space-y-3 border-4 border-green-800/20">
          {/* Weather Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-4 shadow-lg border-2 border-amber-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-green-900 mb-3 relative z-10">Today's Conditions</h3>
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <div className="bg-orange-100/80 rounded-2xl p-3 border-2 border-orange-800/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-6 h-6 text-orange-700" />
                  <div>
                    <p className="text-xs text-orange-900/70">Temp</p>
                    <p className="text-orange-900">72°F</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100/80 rounded-2xl p-3 border-2 border-blue-800/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-blue-700" />
                  <div>
                    <p className="text-xs text-blue-900/70">Humidity</p>
                    <p className="text-blue-900">65%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fish Card */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-4 shadow-lg border-2 border-green-800/20">
            <h3 className="text-green-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              In Season Fish
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border-2 border-green-700/30 flex flex-col items-center gap-2 shadow-md">
                <div className="text-3xl">🐟</div>
                <span className="text-xs text-green-900 text-center">Largemouth Bass</span>
                <span className="bg-green-700 text-amber-50 px-3 py-1 rounded-full text-xs">
                  High Activity
                </span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border-2 border-amber-700/30 flex flex-col items-center gap-2 shadow-md">
                <div className="text-3xl">🎣</div>
                <span className="text-xs text-green-900 text-center">Rainbow Trout</span>
                <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-xs">
                  Medium
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Minimalist Flat */}
      <section className="space-y-3">
        <div className="bg-gray-900 rounded-none p-1">
          <h2 className="text-white px-3 py-2">6. Minimalist Flat</h2>
        </div>
        <p className="text-sm text-gray-600 px-2">Pure flat colors, simple shapes, lots of white space</p>
        
        <div className="bg-gray-50 rounded-none p-6 space-y-4">
          {/* Weather Card */}
          <div className="bg-white p-5">
            <h3 className="text-gray-900 mb-4">Today's Conditions</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-500 p-4">
                <div className="flex items-center gap-3">
                  <Thermometer className="w-8 h-8 text-white" />
                  <div>
                    <p className="text-xs text-orange-100">Temp</p>
                    <p className="text-white text-lg">72°F</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500 p-4">
                <div className="flex items-center gap-3">
                  <Droplets className="w-8 h-8 text-white" />
                  <div>
                    <p className="text-xs text-blue-100">Humidity</p>
                    <p className="text-white text-lg">65%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fish Card */}
          <div className="bg-white p-5">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-gray-900" />
              In Season Fish
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-5 flex flex-col items-center gap-3">
                <div className="text-4xl">🐟</div>
                <span className="text-xs text-gray-900 text-center">Largemouth Bass</span>
                <span className="bg-green-500 text-white px-4 py-2 text-xs">
                  HIGH
                </span>
              </div>
              <div className="bg-gray-100 p-5 flex flex-col items-center gap-3">
                <div className="text-4xl">🎣</div>
                <span className="text-xs text-gray-900 text-center">Rainbow Trout</span>
                <span className="bg-yellow-500 text-white px-4 py-2 text-xs">
                  MEDIUM
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Neon/Dark Mode */}
      <section className="space-y-3">
        <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl p-1">
          <h2 className="text-white px-3 py-2">7. Neon/Dark Mode</h2>
        </div>
        <p className="text-sm text-gray-600 px-2">Dark backgrounds with glowing effects, cyberpunk vibes</p>
        
        <div className="bg-gray-950 rounded-2xl p-6 space-y-3 border border-cyan-500/30">
          {/* Weather Card */}
          <div className="bg-gray-900 rounded-xl p-4 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <h3 className="text-cyan-400 mb-3">Today's Conditions</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800 rounded-lg p-3 border border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-6 h-6 text-orange-400" />
                  <div>
                    <p className="text-xs text-orange-300/70">Temp</p>
                    <p className="text-orange-300">72°F</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 border border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <div className="flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-xs text-blue-300/70">Humidity</p>
                    <p className="text-blue-300">65%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fish Card */}
          <div className="bg-gray-900 rounded-xl p-4 border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <h3 className="text-purple-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              In Season Fish
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800 rounded-lg p-4 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.2)] flex flex-col items-center gap-2 active:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all">
                <div className="text-3xl">🐟</div>
                <span className="text-xs text-gray-200 text-center">Largemouth Bass</span>
                <span className="bg-green-500/20 text-green-400 border border-green-500 px-3 py-1 rounded-full text-xs shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                  High Activity
                </span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)] flex flex-col items-center gap-2 active:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all">
                <div className="text-3xl">🎣</div>
                <span className="text-xs text-gray-200 text-center">Rainbow Trout</span>
                <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500 px-3 py-1 rounded-full text-xs shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                  Medium
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Card Stack/3D Depth */}
      <section className="space-y-3">
        <div className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-xl p-1 shadow-lg">
          <h2 className="text-white px-3 py-2">8. Card Stack/3D Depth</h2>
        </div>
        <p className="text-sm text-gray-600 px-2">Layered cards with strong shadows and physical depth</p>
        
        <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-6 space-y-4">
          {/* Weather Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl transform translate-y-2 translate-x-2"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-2xl transform translate-y-1 translate-x-1"></div>
            <div className="relative bg-white rounded-2xl p-4 shadow-2xl border-2 border-gray-100">
              <h3 className="text-gray-900 mb-3">Today's Conditions</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-300 rounded-xl transform translate-y-1 translate-x-1"></div>
                  <div className="relative bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-3 shadow-lg border-2 border-orange-300">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-6 h-6 text-orange-700" />
                      <div>
                        <p className="text-xs text-orange-800">Temp</p>
                        <p className="text-orange-900">72°F</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-300 rounded-xl transform translate-y-1 translate-x-1"></div>
                  <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-3 shadow-lg border-2 border-blue-300">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-6 h-6 text-blue-700" />
                      <div>
                        <p className="text-xs text-blue-800">Humidity</p>
                        <p className="text-blue-900">65%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fish Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl transform translate-y-2 translate-x-2"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl transform translate-y-1 translate-x-1"></div>
            <div className="relative bg-white rounded-2xl p-4 shadow-2xl border-2 border-gray-100">
              <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                In Season Fish
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-300 rounded-xl transform translate-y-1.5 translate-x-1.5"></div>
                  <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 shadow-lg border-2 border-green-300 flex flex-col items-center gap-2 active:transform active:translate-y-0.5 active:translate-x-0.5 transition-transform">
                    <div className="text-3xl">🐟</div>
                    <span className="text-xs text-gray-800 text-center">Largemouth Bass</span>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs shadow-md">
                      High
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-300 rounded-xl transform translate-y-1.5 translate-x-1.5"></div>
                  <div className="relative bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-4 shadow-lg border-2 border-yellow-300 flex flex-col items-center gap-2 active:transform active:translate-y-0.5 active:translate-x-0.5 transition-transform">
                    <div className="text-3xl">🎣</div>
                    <span className="text-xs text-gray-800 text-center">Rainbow Trout</span>
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs shadow-md">
                      Medium
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
