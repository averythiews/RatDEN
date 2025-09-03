
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Mountain, Coffee, MapPin, Users, Home } from "lucide-react";

const navigationItems = [
  { name: "Home", url: createPageUrl("Home"), icon: Home },
  { name: "Menu", url: createPageUrl("Menu"), icon: Coffee },
  { name: "Trails", url: createPageUrl("Trails"), icon: Mountain },
  { name: "About", url: createPageUrl("About"), icon: Users },
  { name: "Contact", url: createPageUrl("Contact"), icon: MapPin },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker:wght@400&family=Courier+Prime:wght@400;700&display=swap');
        
        :root {
          --punk-orange: #FF4500;
          --punk-red: #DC143C;
          --forest-green: #228B22;
          --granite: #696969;
        }
        
        .zine-font {
          font-family: 'Permanent Marker', cursive;
        }
        
        .mono-font {
          font-family: 'Courier Prime', monospace;
        }
        
        .punk-border {
          border: 3px solid #000;
          box-shadow: 4px 4px 0px #000;
        }
        
        .zine-bg {
          background: 
            linear-gradient(45deg, transparent 40%, rgba(0,0,0,0.1) 41%, rgba(0,0,0,0.1) 59%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(0,0,0,0.05) 41%, rgba(0,0,0,0.05) 59%, transparent 60%);
        }
      `}</style>

      {/* Header */}
      <header className="relative border-b-4 border-black bg-white overflow-hidden">
        <div className="absolute inset-0 zine-bg opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <Link to={createPageUrl("Home")} className="group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-black flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold zine-font text-black transform -rotate-1">
                    ROC CAFE
                  </h1>
                  <p className="text-sm mono-font text-gray-600 transform rotate-1">
                    MARBLE BASIN • N. CASCADES
                  </p>
                </div>
              </div>
            </Link>

            {/* Punk-style tagline */}
            <div className="punk-border bg-yellow-300 px-3 py-1 transform rotate-2 hidden md:block">
              <p className="mono-font text-xs font-bold">COFFEE • TRAILS • COMMUNITY</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-0">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                className={`group relative px-4 py-3 mono-font font-bold text-sm flex items-center gap-2 transition-colors ${
                  location.pathname === item.url
                    ? "bg-orange-500 text-black"
                    : "hover:bg-gray-800"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
                {location.pathname === item.url && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-orange-500"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-orange-500 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="zine-font text-lg mb-2 text-orange-500">HOURS</h3>
              <div className="mono-font text-sm space-y-1">
                <p>MON-FRI: 6AM-6PM</p>
                <p>SAT-SUN: 7AM-7PM</p>
                <p className="text-gray-400">CLOSED: MAJOR STORMS</p>
              </div>
            </div>
            <div>
              <h3 className="zine-font text-lg mb-2 text-orange-500">LOCATION</h3>
              <div className="mono-font text-sm space-y-1">
                <p>123 GRANITE ROAD</p>
                <p>MARBLE BASIN, WA</p>
                <p className="text-gray-400">MILE 47 ON CASCADE HWY</p>
              </div>
            </div>
            <div>
              <h3 className="zine-font text-lg mb-2 text-orange-500">VIBE</h3>
              <div className="mono-font text-sm space-y-1">
                <p>LOCAL • PUNK • CAFFEINATED</p>
                <p>TRAIL MAPS AVAILABLE</p>
                <p className="text-gray-400">EST. 2019</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-600 text-center mono-font text-xs text-gray-400">
            © 2024 ROC CAFE • FUELED BY MOUNTAINS & COFFEE
          </div>
        </div>
      </footer>
    </div>
  );
}
