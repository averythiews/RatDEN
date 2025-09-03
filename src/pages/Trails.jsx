import React from "react";
import { Mountain, MapPin, Clock, TrendingUp, AlertTriangle, ExternalLink } from "lucide-react";

const trailData = [
  {
    name: "BLUE LAKE TRAIL",
    difficulty: "MODERATE",
    distance: "7.2 MILES",
    elevation: "1,800 FT",
    time: "4-5 HOURS",
    status: "OPEN",
    description: "Classic North Cascades lake with stunning alpine views. Well-maintained trail with moderate elevation gain.",
    conditions: "Trail clear, some snow patches above 5,000 ft",
    trailheadUrl: "https://www.alltrails.com/trail/us/washington/blue-lake-trail"
  },
  {
    name: "CASCADE PASS",
    difficulty: "MODERATE",
    distance: "7.4 MILES",
    elevation: "1,900 FT", 
    time: "4-6 HOURS",
    status: "CAUTION",
    description: "Historic pass with incredible mountain panoramas. Can be crowded on weekends.",
    conditions: "Icy conditions early morning, microspikes recommended",
    trailheadUrl: "https://www.alltrails.com/trail/us/washington/cascade-pass-trail"
  },
  {
    name: "SAHALE ARM",
    difficulty: "HARD",
    distance: "12.0 MILES",
    elevation: "4,500 FT",
    time: "8-10 HOURS",
    status: "ADVANCED",
    description: "Challenging extension from Cascade Pass with world-class alpine scenery. Not for beginners.",
    conditions: "Snow and ice above 6,500 ft, full alpine gear required",
    trailheadUrl: "https://www.alltrails.com/trail/us/washington/sahale-arm"
  },
  {
    name: "MAPLE PASS LOOP",
    difficulty: "MODERATE",
    distance: "7.2 MILES",
    elevation: "2,150 FT",
    time: "5-6 HOURS", 
    status: "OPEN",
    description: "Spectacular loop with fall colors and mountain views. Less crowded than other popular trails.",
    conditions: "Trail dry, perfect conditions for hiking",
    trailheadUrl: "https://www.alltrails.com/trail/us/washington/maple-pass-loop-trail"
  },
  {
    name: "DIABLO LAKE TRAIL",
    difficulty: "EASY",
    distance: "3.8 MILES",
    elevation: "200 FT",
    time: "2-3 HOURS",
    status: "OPEN",
    description: "Easy walk along the stunning turquoise Diablo Lake. Great for families and casual hikers.",
    conditions: "Maintained trail, suitable for all skill levels",
    trailheadUrl: "https://www.alltrails.com/trail/us/washington/diablo-lake-trail"
  },
  {
    name: "THORNTON LAKES",
    difficulty: "HARD",
    distance: "10.4 MILES",
    elevation: "2,400 FT",
    time: "6-8 HOURS",
    status: "OPEN",
    description: "Remote alpine lakes with rugged terrain. Expect some scrambling and route-finding.",
    conditions: "Trail rough in places, stream crossings possible",
    trailheadUrl: "https://www.alltrails.com/trail/us/washington/thornton-lakes-trail"
  }
];

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case "EASY": return "bg-green-500";
    case "MODERATE": return "bg-yellow-500"; 
    case "HARD": return "bg-red-500";
    default: return "bg-gray-500";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "OPEN": return "bg-green-100 text-green-800 border-green-200";
    case "CAUTION": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "ADVANCED": return "bg-red-100 text-red-800 border-red-200";
    case "CLOSED": return "bg-gray-100 text-gray-800 border-gray-200";
    default: return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export default function Trails() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="punk-border bg-green-600 text-white inline-block px-4 py-2 mb-4 transform rotate-2">
            <span className="mono-font text-sm font-bold">TRAIL GUIDE</span>
          </div>
          <h1 className="text-4xl md:text-6xl zine-font mb-4 transform -rotate-1">
            LOCAL TRAILS
          </h1>
          <p className="mono-font text-gray-600 max-w-2xl mx-auto">
            Honest beta on the best hikes around Marble Basin. 
            Current conditions updated by locals who actually hike these trails.
          </p>
        </div>

        {/* Trail Conditions Alert */}
        <div className="punk-border bg-black text-white p-6 mb-12 transform rotate-1">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-orange-500" />
            <h2 className="zine-font text-xl text-orange-500">CURRENT CONDITIONS</h2>
          </div>
          <div className="mono-font text-sm grid md:grid-cols-2 gap-4">
            <div>
              <p><strong>WEATHER:</strong> Partly cloudy, 42°F</p>
              <p><strong>SNOW LINE:</strong> 4,200 ft elevation</p>
            </div>
            <div>
              <p><strong>DAYLIGHT:</strong> 7:15 AM - 6:30 PM</p>
              <p><strong>UPDATED:</strong> Today 7:30 AM</p>
            </div>
          </div>
        </div>

        {/* Trails Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {trailData.map((trail, index) => (
            <div 
              key={trail.name}
              className={`punk-border bg-white p-6 transform transition-all duration-200 hover:scale-105 ${
                index % 3 === 0 ? 'rotate-1' : 
                index % 3 === 1 ? '-rotate-1' : 'rotate-0'
              } hover:rotate-0`}
            >
              {/* Trail Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="zine-font text-xl mb-1 transform -rotate-1">
                    {trail.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${getDifficultyColor(trail.difficulty)}`}></div>
                    <span className="mono-font text-xs font-bold">
                      {trail.difficulty}
                    </span>
                  </div>
                </div>
                <div className={`punk-border px-3 py-1 ${getStatusColor(trail.status)}`}>
                  <span className="mono-font text-xs font-bold">{trail.status}</span>
                </div>
              </div>

              {/* Trail Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 mono-font text-xs">
                <div className="text-center">
                  <MapPin className="w-4 h-4 mx-auto mb-1 text-gray-500" />
                  <p className="font-bold">{trail.distance}</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-4 h-4 mx-auto mb-1 text-gray-500" />
                  <p className="font-bold">{trail.elevation}</p>
                </div>
                <div className="text-center">
                  <Clock className="w-4 h-4 mx-auto mb-1 text-gray-500" />
                  <p className="font-bold">{trail.time}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mono-font text-sm text-gray-600 mb-3">
                {trail.description}
              </p>

              {/* Current Conditions */}
              <div className="bg-gray-100 p-3 rounded mb-4">
                <h4 className="mono-font text-xs font-bold text-gray-700 mb-1">
                  CURRENT CONDITIONS:
                </h4>
                <p className="mono-font text-xs text-gray-600">
                  {trail.conditions}
                </p>
              </div>

              {/* Trail Link */}
              <a 
                href={trail.trailheadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 punk-border bg-orange-500 text-black px-4 py-2 mono-font text-xs font-bold hover:bg-orange-400 transition-colors transform hover:rotate-1"
              >
                VIEW ON ALLTRAILS
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* Safety Notice */}
        <div className="mt-12 punk-border bg-red-600 text-white p-8 transform -rotate-1">
          <div className="text-center">
            <h3 className="zine-font text-2xl mb-4 text-yellow-300">MOUNTAIN SAFETY</h3>
            <div className="grid md:grid-cols-2 gap-6 mono-font text-sm">
              <div>
                <h4 className="font-bold mb-2">ALWAYS BRING</h4>
                <p>• Map & compass/GPS</p>
                <p>• Extra food & water</p>
                <p>• Rain gear & warm layers</p>
                <p>• First aid kit</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">TELL SOMEONE</h4>
                <p>• Your planned route</p>
                <p>• Expected return time</p>
                <p>• Emergency contact info</p>
                <p>• Check in when you return</p>
              </div>
            </div>
            <div className="mt-6 punk-border bg-yellow-300 text-black inline-block px-4 py-2 transform rotate-2">
              <p className="font-bold">RESPECT THE MOUNTAIN • LEAVE NO TRACE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}