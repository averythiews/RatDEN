import React from "react";
import { MapPin, Clock, Phone, Mail, Mountain, Coffee, AlertCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="punk-border bg-orange-600 text-white inline-block px-4 py-2 mb-4 transform rotate-2">
            <span className="mono-font text-sm font-bold">FIND US</span>
          </div>
          <h1 className="text-4xl md:text-6xl zine-font mb-4 transform -rotate-1">
            CONTACT
          </h1>
          <p className="mono-font text-gray-600 max-w-2xl mx-auto">
            Located at mile 47 on Cascade Highway, right where you need us most. 
            Stop by before or after your mountain adventures.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location & Hours */}
          <div className="punk-border bg-white p-8 transform rotate-1">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-red-500" />
              <h2 className="zine-font text-2xl text-red-500">LOCATION</h2>
            </div>
            <div className="mono-font text-sm space-y-3">
              <div>
                <h3 className="font-bold mb-1">ADDRESS</h3>
                <p>123 Granite Road</p>
                <p>Marble Basin, WA 98283</p>
                <p className="text-gray-500">Mile 47 on Cascade Highway</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-1">PARKING</h3>
                <p>Free parking lot behind building</p>
                <p>Room for trucks with trailers</p>
                <p className="text-gray-500">Please don't block the dumpster</p>
              </div>

              <div>
                <h3 className="font-bold mb-1">LANDMARKS</h3>
                <p>Next to the old Marble Basin General Store</p>
                <p>Across from the forest service bulletin board</p>
                <p className="text-gray-500">Look for the black building with orange trim</p>
              </div>
            </div>
          </div>

          {/* Hours & Contact */}
          <div className="punk-border bg-white p-8 transform -rotate-1">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-green-500" />
              <h2 className="zine-font text-2xl text-green-500">HOURS</h2>
            </div>
            <div className="mono-font text-sm space-y-4">
              <div>
                <h3 className="font-bold mb-2">REGULAR HOURS</h3>
                <div className="space-y-1">
                  <p><strong>MON-FRI:</strong> 6:00 AM - 6:00 PM</p>
                  <p><strong>SAT-SUN:</strong> 7:00 AM - 7:00 PM</p>
                  <p className="text-gray-500">Open early for dawn patrol missions</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">CONTACT INFO</h3>
                <div className="space-y-1">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    (360) 555-ROCK
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    hello@roccafe.com
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">SEASONAL NOTES</h3>
                <p className="text-gray-600">
                  Hours may vary during extreme weather. 
                  Call ahead during winter storm warnings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Driving Directions */}
        <div className="punk-border bg-black text-white p-8 transform rotate-1 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="w-6 h-6 text-orange-500" />
            <h2 className="zine-font text-2xl text-orange-500">DRIVING DIRECTIONS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mono-font text-sm">
            <div>
              <h3 className="font-bold mb-2">FROM SEATTLE (2.5 HOURS)</h3>
              <p>• Take I-5 North to I-405 North</p>
              <p>• Merge onto WA-20 East (North Cascades Highway)</p>
              <p>• Continue 120 miles to Marble Basin</p>
              <p>• Look for ROC Cafe sign on the right</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">FROM BELLINGHAM (2 HOURS)</h3>
              <p>• Take WA-20 East (Cascade Highway)</p>
              <p>• Drive through Sedro-Woolley and Concrete</p>
              <p>• Continue past Marblemount for 25 miles</p>
              <p>• ROC Cafe will be on your left</p>
            </div>
          </div>
          <div className="mt-4 punk-border bg-yellow-300 text-black inline-block px-3 py-1 transform -rotate-2">
            <p className="font-bold text-xs">CHAIN REQUIREMENTS IN WINTER • CHECK WSDOT</p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="space-y-6">
          {/* Weather Closures */}
          <div className="punk-border bg-red-600 text-white p-6 transform -rotate-1">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-yellow-300" />
              <h3 className="zine-font text-lg text-yellow-300">WEATHER CLOSURES</h3>
            </div>
            <p className="mono-font text-sm">
              Cascade Highway (WA-20) closes seasonally from roughly November to April. 
              Check WSDOT for current road conditions and closure dates. 
              We're accessible year-round, but you might need chains or 4WD.
            </p>
          </div>

          {/* What to Expect */}
          <div className="punk-border bg-white p-6 transform rotate-1">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-5 h-5 text-purple-500" />
              <h3 className="zine-font text-lg text-purple-500">WHAT TO EXPECT</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mono-font text-sm text-gray-600">
              <div>
                <h4 className="font-bold mb-1">THE VIBE</h4>
                <p>Casual, laid-back atmosphere. Dogs welcome on the patio. 
                Muddy boots and chalk-covered hands are totally normal.</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">AMENITIES</h4>
                <p>Free WiFi, clean restrooms, trail maps, and a community 
                bulletin board for gear swaps and ride shares.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <div className="punk-border bg-orange-500 text-black inline-block px-8 py-4 transform rotate-2">
            <h3 className="zine-font text-xl mb-2">SEE YOU ON THE MOUNTAIN</h3>
            <p className="mono-font text-sm">
              Stop by for coffee, stay for the conversation, 
              leave with better trail beta than you came with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}