import React from "react";
import { Coffee, Zap, Mountain, Heart } from "lucide-react";

const menuCategories = [
  {
    title: "COFFEE HITS",
    icon: Coffee,
    description: "THE FUEL FOR YOUR ADVENTURES",
    items: [
      { name: "DRIP COFFEE", price: "$2.50", description: "House blend • Dark & bold • Endless refills" },
      { name: "AMERICANO", price: "$3.00", description: "Double shot espresso • Clean finish" },
      { name: "CAPPUCCINO", price: "$3.50", description: "Perfect foam art • Creamy texture" },
      { name: "LATTE", price: "$4.00", description: "Smooth & milky • Oat milk +$0.50" },
      { name: "CORTADO", price: "$3.75", description: "Equal parts espresso & steamed milk" },
      { name: "MOCHA", price: "$4.50", description: "Dark chocolate • Whipped cream • Pure joy" }
    ]
  },
  {
    title: "COLD BREW CREW",
    icon: Zap,
    description: "ICED PERFECTION FOR WARM DAYS",
    items: [
      { name: "COLD BREW", price: "$3.25", description: "16 hour steep • Smooth & strong" },
      { name: "ICED AMERICANO", price: "$3.25", description: "Double shot over ice • Clean & crisp" },
      { name: "ICED LATTE", price: "$4.25", description: "Espresso • Milk • Ice • Simple perfection" },
      { name: "TRAIL MIX FRAPPE", price: "$5.00", description: "Coffee • Chocolate • Whipped cream • Crushed cookies" }
    ]
  },
  {
    title: "MOUNTAIN FUEL",
    icon: Mountain,
    description: "FOOD FOR THE TRAIL & SOUL",
    items: [
      { name: "BREAKFAST BURRITO", price: "$6.50", description: "Scrambled eggs • Hash browns • Cheese • Salsa" },
      { name: "BAGEL & CREAM CHEESE", price: "$3.00", description: "Fresh daily • Plain or everything" },
      { name: "GRANOLA BOWL", price: "$5.50", description: "House-made granola • Greek yogurt • Fresh berries" },
      { name: "TRAIL MIX", price: "$4.00", description: "Nuts • Dried fruit • Dark chocolate • Local honey" },
      { name: "ENERGY BARS", price: "$2.50", description: "Homemade • Oats • Peanut butter • Good vibes" }
    ]
  },
  {
    title: "COMFORT ZONE",
    icon: Heart,
    description: "FOR WHEN YOU NEED SOMETHING WARM",
    items: [
      { name: "HOT CHOCOLATE", price: "$3.50", description: "Real chocolate • Marshmallows • Kids love it" },
      { name: "CHAI LATTE", price: "$4.00", description: "Spiced tea • Steamed milk • Cinnamon dust" },
      { name: "HERBAL TEA", price: "$2.50", description: "Chamomile • Peppermint • Ginger options" },
      { name: "SOUP OF THE DAY", price: "$5.00", description: "Ask your barista • Always vegetarian option" }
    ]
  }
];

export default function Menu() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="punk-border bg-red-600 text-white inline-block px-4 py-2 mb-4 transform -rotate-2">
            <span className="mono-font text-sm font-bold">FUEL STATION</span>
          </div>
          <h1 className="text-4xl md:text-6xl zine-font mb-4 transform rotate-1">
            MENU
          </h1>
          <p className="mono-font text-gray-600 max-w-2xl mx-auto">
            Honest pricing for quality coffee & food. 
            No corporate markup, just good stuff made with care.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.title} className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-black flex items-center justify-center punk-border transform ${
                  categoryIndex % 2 === 0 ? 'rotate-3' : '-rotate-3'
                }`}>
                  <category.icon className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl zine-font transform -rotate-1">
                    {category.title}
                  </h2>
                  <p className="mono-font text-sm text-gray-500 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.name}
                    className={`punk-border bg-gray-50 p-6 hover:bg-yellow-50 transition-colors transform ${
                      (categoryIndex + itemIndex) % 3 === 0 ? 'rotate-1' : 
                      (categoryIndex + itemIndex) % 3 === 1 ? '-rotate-1' : 'rotate-0'
                    } hover:scale-105 hover:rotate-0 transition-all duration-200`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="mono-font font-bold text-lg">
                        {item.name}
                      </h3>
                      <span className="zine-font text-xl text-orange-500">
                        {item.price}
                      </span>
                    </div>
                    <p className="mono-font text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Notes */}
        <div className="mt-16 punk-border bg-black text-white p-8 transform rotate-1">
          <div className="text-center">
            <h3 className="zine-font text-2xl mb-4 text-orange-500">SPECIAL NOTES</h3>
            <div className="grid md:grid-cols-2 gap-6 mono-font text-sm">
              <div>
                <h4 className="font-bold mb-2">DIETARY OPTIONS</h4>
                <p>• Oat, almond, soy milk available</p>
                <p>• Gluten-free options marked on request</p>
                <p>• Vegan pastries on weekends</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">LOYALTY PROGRAM</h4>
                <p>• Buy 10 coffees, get 1 free</p>
                <p>• Trail condition updates included</p>
                <p>• 15% off for local climbers & hikers</p>
              </div>
            </div>
            <div className="mt-6 punk-border bg-yellow-300 text-black inline-block px-4 py-2 transform -rotate-2">
              <p className="font-bold">CASH & CARD ACCEPTED • NO VENMO DRAMA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}