import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Mountain, Coffee, MapPin, ArrowRight, Zap, Trees } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.2) brightness(0.7)'
          }}
        ></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="punk-border bg-red-600 inline-block px-3 py-1 mb-6 transform -rotate-2">
              <span className="mono-font text-xs font-bold text-white">NORTHERN CASCADES</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold zine-font mb-6 leading-tight">
              <span className="block transform -rotate-1">COFFEE</span>
              <span className="block transform rotate-1 text-orange-500">CULTURE</span>
              <span className="block transform -rotate-1">CASCADES</span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg md:text-xl mono-font">
                Where punk rock meets peak coffee in the heart of Marble Basin.
              </p>
              <p className="mono-font text-gray-300">
                Locally roasted beans • Trail beta • Good vibes only
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to={createPageUrl("Menu")}
                className="punk-border bg-orange-500 text-black px-6 py-3 mono-font font-bold hover:bg-orange-400 transition-colors transform hover:rotate-1"
              >
                CHECK MENU <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
              <Link 
                to={createPageUrl("Trails")}
                className="punk-border bg-white text-black px-6 py-3 mono-font font-bold hover:bg-gray-200 transition-colors transform hover:-rotate-1"
              >
                FIND TRAILS <Mountain className="inline w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl zine-font mb-4 transform -rotate-1">
              WHY ROC CAFE?
            </h2>
            <div className="punk-border bg-yellow-300 inline-block px-4 py-2 transform rotate-2">
              <p className="mono-font font-bold text-sm">BECAUSE THE MOUNTAIN DEMANDS GOOD COFFEE</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Coffee Quality */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-black flex items-center justify-center transform group-hover:rotate-12 transition-transform punk-border">
                <Coffee className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="zine-font text-xl mb-2 transform -rotate-1">KILLER COFFEE</h3>
              <p className="mono-font text-sm text-gray-600">
                Small-batch roasted beans from sustainable farms. 
                Strong enough for 6am starts, smooth enough for sunset sips.
              </p>
            </div>

            {/* Trail Knowledge */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-black flex items-center justify-center transform group-hover:rotate-12 transition-transform punk-border">
                <Mountain className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="zine-font text-xl mb-2 transform rotate-1">TRAIL BETA</h3>
              <p className="mono-font text-sm text-gray-600">
                Local knowledge on every peak, pass, and hidden gem. 
                Current conditions, maps, and honest difficulty ratings.
              </p>
            </div>

            {/* Community */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-black flex items-center justify-center transform group-hover:rotate-12 transition-transform punk-border">
                <Zap className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="zine-font text-xl mb-2 transform -rotate-1">PUNK VIBES</h3>
              <p className="mono-font text-sm text-gray-600">
                DIY spirit, community first. Local art on the walls, 
                honest conversations, and zero corporate BS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="punk-border bg-black text-white p-8 transform -rotate-1">
            <div className="text-center">
              <h2 className="zine-font text-2xl mb-4 text-orange-500">CURRENT CONDITIONS</h2>
              <div className="grid md:grid-cols-2 gap-6 mono-font">
                <div>
                  <h3 className="font-bold mb-2">WEATHER</h3>
                  <p>PARTLY CLOUDY • 42°F</p>
                  <p>SNOW LEVEL: 4,200 FT</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">TRAIL STATUS</h3>
                  <p>BLUE LAKE: OPEN</p>
                  <p>CASCADE PASS: ICE CAUTION</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-yellow-300 font-bold">
                  ⚡ LAST UPDATED: TODAY 7:30AM ⚡
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="zine-font text-3xl md:text-4xl mb-6 transform rotate-1">
            READY FOR ADVENTURE?
          </h2>
          <p className="mono-font text-lg mb-8 max-w-2xl mx-auto">
            Fuel up at Roc Cafe before you hit the trails. 
            Coffee, maps, and good energy for whatever the mountain throws at you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to={createPageUrl("Contact")}
              className="punk-border bg-orange-500 text-black px-8 py-4 mono-font font-bold hover:bg-orange-400 transition-colors transform hover:-rotate-1"
            >
              GET DIRECTIONS
            </Link>
            <Link 
              to={createPageUrl("About")}
              className="punk-border bg-white text-black px-8 py-4 mono-font font-bold hover:bg-gray-200 transition-colors transform hover:rotate-1"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}