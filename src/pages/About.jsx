import React from "react";
import { Heart, Mountain, Coffee, Zap, Users, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="punk-border bg-purple-600 text-white inline-block px-4 py-2 mb-4 transform -rotate-2">
            <span className="mono-font text-sm font-bold">OUR STORY</span>
          </div>
          <h1 className="text-4xl md:text-6xl zine-font mb-4 transform rotate-1">
            ABOUT ROC
          </h1>
          <p className="mono-font text-gray-600 max-w-2xl mx-auto">
            How a couple of punk rock climbers ended up running 
            the most authentic coffee shop in the North Cascades.
          </p>
        </div>

        {/* Main Story */}
        <div className="space-y-12">
          {/* Origin Story */}
          <div className="punk-border bg-black text-white p-8 transform rotate-1">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-orange-500" />
              <h2 className="zine-font text-2xl text-orange-500">THE BEGINNING</h2>
            </div>
            <div className="mono-font text-sm space-y-3">
              <p>
                Back in 2019, Sarah and Jake were just two punk rock kids who spent 
                every weekend in the Cascades. Climbing, hiking, getting lost, finding themselves.
              </p>
              <p>
                The problem? The closest decent coffee was 90 minutes away. 
                After one too many gas station coffee disasters at 5 AM, they decided 
                to do something about it.
              </p>
              <p className="text-yellow-300">
                "Why not open a coffee shop that doesn't suck?" - Jake, probably hungover, 2019
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-red-500" />
                <h3 className="zine-font text-xl">OUR MISSION</h3>
              </div>
              <p className="mono-font text-sm text-gray-600 leading-relaxed">
                Create a space where the climbing and hiking community can fuel up, 
                share beta, and connect. No corporate BS, no overpriced menu, 
                just good coffee and honest conversation.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="w-6 h-6 text-green-500" />
                <h3 className="zine-font text-xl">OUR VALUES</h3>
              </div>
              <div className="mono-font text-sm text-gray-600 space-y-1">
                <p>• Support local suppliers & farmers</p>
                <p>• Keep prices fair for working folks</p>
                <p>• Share accurate trail conditions</p>
                <p>• Welcome everyone (except jerks)</p>
              </div>
            </div>
          </div>

          {/* The Space */}
          <div className="punk-border bg-gray-100 p-6 transform -rotate-1">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-6 h-6 text-orange-500" />
              <h3 className="zine-font text-xl">THE SPACE</h3>
            </div>
            <p className="mono-font text-sm text-gray-600 leading-relaxed">
              ROC Cafe sits in a converted 1970s gas station on Granite Road, 
              complete with original concrete floors and industrial lighting. 
              The walls feature local art, climbing photos, and topographic maps 
              marked up with route notes and condition updates.
            </p>
          </div>

          {/* Community Focus */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="zine-font text-2xl mb-4 transform rotate-1">
                COMMUNITY FIRST
              </h3>
              <p className="mono-font text-gray-600 max-w-2xl mx-auto">
                We're more than a coffee shop. We're the unofficial 
                trailhead information center, gear swap meet, and 
                post-hike debrief location.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Trail Updates */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-black flex items-center justify-center punk-border transform rotate-3">
                  <MapPin className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="zine-font text-lg mb-2 transform -rotate-1">TRAIL INTEL</h4>
                <p className="mono-font text-xs text-gray-600">
                  Daily condition updates from locals who actually hike. 
                  Real beta, not corporate trail apps.
                </p>
              </div>

              {/* Gear Library */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-black flex items-center justify-center punk-border transform -rotate-3">
                  <Mountain className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="zine-font text-lg mb-2 transform rotate-1">GEAR SWAP</h4>
                <p className="mono-font text-xs text-gray-600">
                  Community bulletin board for buying, selling, 
                  and trading outdoor gear. Find climbing partners too.
                </p>
              </div>

              {/* Events */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-black flex items-center justify-center punk-border transform rotate-3">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <h4 className="zine-font text-lg mb-2 transform -rotate-1">EVENTS</h4>
                <p className="mono-font text-xs text-gray-600">
                  Film screenings, gear clinics, and the occasional 
                  punk show in the back parking lot.
                </p>
              </div>
            </div>
          </div>

          {/* Meet the Team */}
          <div className="punk-border bg-black text-white p-8 transform rotate-1">
            <h3 className="zine-font text-2xl mb-6 text-orange-500 text-center">
              MEET THE CREW
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mono-font text-sm">
              <div className="text-center">
                <h4 className="font-bold mb-2 text-yellow-300">SARAH • OWNER/BARISTA</h4>
                <p>Former Seattle punk scene regular, now obsessed with alpine climbing. 
                Makes the best cortado this side of Stevens Pass. Knows every trail 
                within 50 miles and isn't afraid to tell you when you're being stupid.</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-2 text-yellow-300">JAKE • OWNER/ROASTER</h4>
                <p>Ex-bike messenger turned coffee obsessive. Roasts our beans 
                in the back room while blasting Minor Threat. Has summited every 
                peak visible from the cafe and will show you photos whether you ask or not.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="punk-border bg-orange-500 text-black inline-block px-6 py-4 transform -rotate-2">
              <h3 className="zine-font text-xl mb-2">COME HANG OUT</h3>
              <p className="mono-font text-sm">
                We're open daily, conditions permitting. 
                Coffee's always fresh, and the trail beta is always honest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}