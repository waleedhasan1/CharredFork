'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-amber-900/98 shadow-2xl' : 'bg-amber-900/95'
    } backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold text-yellow-400 hover:text-orange-400 transition-colors">
            🍴 Charred Fork
          </Link>
          <ul className="hidden md:flex space-x-8">
            <li><Link href="#home" className="text-white hover:text-yellow-400 transition-colors font-medium">Home</Link></li>
            <li><Link href="#about" className="text-white hover:text-yellow-400 transition-colors font-medium">About</Link></li>
            <li><Link href="#menu" className="text-white hover:text-yellow-400 transition-colors font-medium">Menu</Link></li>
            <li><Link href="#contact" className="text-white hover:text-yellow-400 transition-colors font-medium">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-800/90 via-orange-700/80 to-red-800/90"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-60 right-40 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wide drop-shadow-2xl animate-fade-in-up">
          Charred Fork
        </h1>
        <p className="text-2xl md:text-3xl text-yellow-400 mb-8 font-serif italic drop-shadow-lg animate-fade-in-up-delay-300">
          Authentic. Smoky. Unforgettable.
        </p>
        <Link 
          href="#menu" 
          className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white text-xl font-bold py-4 px-10 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 animate-fade-in-up-delay-600"
        >
          VIEW OUR MENU
        </Link>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-stone-100 to-amber-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl font-bold text-amber-800 mb-4 relative">
                Our Story
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-orange-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              For over 20 years, we have been slow-smoking our meats to perfection using traditional hickory wood and time-honored recipes passed down through generations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every bite tells the story of dedication, quality ingredients, and the art of authentic barbecue. From our signature dry rubs to our house-made sauces, we craft everything with love and attention to detail.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Come taste the difference that real barbecue makes.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-800 to-orange-700 rounded-3xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">🔥 Wood-Fired Perfection</h3>
              <p className="text-lg">14+ hours of slow smoking</p>
              <p className="text-lg">Premium cuts • House-made rubs</p>
              <p className="text-lg">Family recipes since 2004</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuSection {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

const Menu = () => {
  const menuSections: MenuSection[] = [
    {
      title: "Featured Items",
      items: [
        { name: "Brisket", price: "$20.99" },
        { name: "Brisket Rice Bowl", price: "$14.99" },
        { name: "Mango Tango", price: "$4.99" }
      ]
    },
    {
      title: "Lunch Special",
      subtitle: "11am-4pm",
      items: [
        { name: "BBQ glazed Leg & Thigh", price: "$12.99" },
        { name: "Breaded Chicken Sandwich", price: "$12.99" },
        { name: "Chicken Wings", price: "$11.99" },
        { name: "Smoked Brisket Sandwich", price: "$17.99" },
        { name: "Rotisserie Chicken Sandwich", price: "$12.99" },
        { name: "Two Slices of Pizza", price: "$9.99" },
        { name: "Chicken Rice Bowl", price: "$9.99" },
        { name: "Brisket Rice Bowl", price: "$14.99" },
        { name: "Salad", price: "$7.49", description: "Spring Mix Salad with onions, cucumbers, bell peppers and Hot Honey Ranch. Any protein gets BBQ sauce unless requested otherwise." },
        { name: "Vegi Sandwich", price: "$10.99" }
      ]
    },
    {
      title: "Brisket",
      items: [
        { name: "Smoked Brisket", price: "$20.99" }
      ]
    },
    {
      title: "Chicken",
      items: [
        { name: "Rotisserie Chicken", price: "$13.99", description: "Comes with rice, salad, fries, and three sauces of your choice." },
        { name: "BBQ glazed Leg & Thigh", price: "$12.99", description: "BBQ Glazed leg and thigh served with choice of side and sauce." }
      ]
    },
    {
      title: "Bowls",
      subtitle: "Rice bowl with flavored rice, spring mix, cucumber, onions, bell peppers, charred sauce and BBQ sauce with your choice of protein.",
      items: [
        { name: "Brisket Rice Bowl", price: "$14.99" },
        { name: "Chicken Rice Bowl", price: "$9.99" },
        { name: "Salad Bowl", price: "$7.49" }
      ]
    },
    {
      title: "Charred Sandwiches",
      items: [
        { name: "Brisket Sandwich", price: "$15.99", description: "Sharp Provolone, Grilled Onions, and Charred Sauce on a Sesame Bun" },
        { name: "Chicken Sandwich", price: "$10.99", description: "Sharp Provolone, Grilled Onions, and Charred Sauce on a Sesame Bun - Includes Fries and Drink" },
        { name: "Grilled Vegi Sandwich Combo", price: "$12.99" },
        { name: "Rotisserie Chicken Sandwich Combo", price: "$14.99" },
        { name: "Brisket Sandwich Combo", price: "$19.99" }
      ]
    },
    {
      title: "Pizza",
      subtitle: "16 inch Pie",
      items: [
        { name: "Cheese Pizza", price: "$16.99" },
        { name: "Pepperoni Pizza", price: "$21.99" },
        { name: "Veggie Pizza", price: "$21.99", description: "Bell peppers, black olives, mushrooms, and onions" },
        { name: "Chicken Pizza", price: "$21.99" },
        { name: "Brisket Pizza", price: "$26.99" },
        { name: "Half Cheese Half Pepperoni", price: "$20.99" },
        { name: "Half Cheese Half Chicken", price: "$20.99" },
        { name: "Half Cheese Half Brisket", price: "$24.99" },
        { name: "Half Chicken Half Pepperoni", price: "$22.99" },
        { name: "Half Pepperoni Half Brisket", price: "$25.99" },
        { name: "Half Chicken Half Brisket", price: "$26.99" },
        { name: "Half Cheese Half Veggie", price: "$20.99" },
        { name: "Half Veggie Half Brisket", price: "$25.99" },
        { name: "Half Veggie Half Chicken", price: "$22.99" },
        { name: "Half Veggie Half Pepperoni", price: "$22.99" }
      ]
    },
    {
      title: "Kids Menu",
      items: [
        { name: "3 Piece Tenders", price: "$9.99" },
        { name: "2 Slices Pizza", price: "$9.99" }
      ]
    },
    {
      title: "Sides",
      items: [
        { name: "Fries", price: "$4.50" },
        { name: "Tenders", price: "$8.99" },
        { name: "Rice", price: "$4.99" },
        { name: "Side Salad", price: "$3.99" },
        { name: "Side Sauce", price: "Ask server" },
        { name: "Jumbo Party Wings", price: "$11.99" }
      ]
    },
    {
      title: "Drinks",
      items: [
        { name: "Chai", price: "$2.50" },
        { name: "Mint Lemonade", price: "$4.99" },
        { name: "Mint To Be Spicy", price: "$4.99" },
        { name: "Mango Tango", price: "$4.99" },
        { name: "Strawberry Lemonade", price: "$4.99" },
        { name: "Dragon Blast", price: "$4.99" },
        { name: "Cola", price: "$1.99" },
        { name: "Diet Cola", price: "$1.99" },
        { name: "Lemon-Lime Soda", price: "$1.99" },
        { name: "Ginger Ale", price: "$1.99" },
        { name: "Orange Soda", price: "$1.99" },
        { name: "Root Beer", price: "$1.99" },
        { name: "Berry Lemonade", price: "$1.99" },
        { name: "Pineapple Juice", price: "$1.99" },
        { name: "Lemonade", price: "$1.99" },
        { name: "Milk", price: "$1.99" },
        { name: "Mango Passionfruit Tea", price: "$2.99" },
        { name: "Desert Pear Tea", price: "$2.99" },
        { name: "Coconut Pineapple Tea", price: "$2.99" },
        { name: "Spicy Mango Tea", price: "$2.99" },
        { name: "Vanilla Milkshake", price: "$6.99" },
        { name: "Strawberry Milkshake", price: "$6.99" },
        { name: "Chocolate Milkshake", price: "$6.99" },
        { name: "Bottled Water", price: "$1.39" },
        { name: "Wizards Potion", price: "$3.99" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Carrot Cake", price: "$7.99" },
        { name: "Chocolate Marquise Cake", price: "$5.99" },
        { name: "Eclair", price: "$5.99" },
        { name: "Lemon Cello", price: "$5.99" },
        { name: "Lemon Raspberry Drops", price: "$5.99" },
        { name: "Red Velvet Cake", price: "$5.99" },
        { name: "Tuxedo Dome", price: "$5.99" },
        { name: "Ice Cream", price: "Ask server" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-24 bg-gradient-to-br from-amber-900 to-stone-900">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          Our Complete Menu
        </h2>
        
        <div className="space-y-12">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white/5 backdrop-blur-lg border border-yellow-400/20 rounded-3xl p-8">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">{section.title}</h3>
                {section.subtitle && (
                  <p className="text-orange-300 text-lg italic">{section.subtitle}</p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl border bg-white/5 border-yellow-400/30 hover:border-yellow-400/60 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg text-white">
                        {item.name}
                      </h4>
                      <div className="text-right">
                        <span className="font-bold text-lg text-orange-400">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    {item.description && (
                      <p className="text-sm leading-relaxed text-gray-300">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white text-xl font-bold py-4 px-10 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            ORDER NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-yellow-400 to-amber-300">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-bold text-amber-900 mb-8">Visit Us Today</h2>
            
            <div className="bg-amber-900/90 text-white rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  📍 Address
                </h3>
                <p className="text-lg">
                  6740 IL-53<br />
                  Woodridge, IL 60517
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  📞 Phone
                </h3>
                <p className="text-lg">
                  (331) 233-6999
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  🌐 Online Ordering
                </h3>
                <p className="text-lg">
                  order.toasttab.com<br />
                  Order online for pickup!
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-amber-800 mb-6">
              🕒 Hours
            </h3>
            
            <div className="space-y-3 text-amber-900">
              <div className="flex justify-between">
                <p className="font-bold">Monday:</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-bold">Tuesday:</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-bold">Wednesday:</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-bold">Thursday:</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-bold">Friday:</p>
                <p>11:00 AM - 12:00 AM</p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-bold">Saturday:</p>
                <p>11:00 AM - 12:00 AM</p>
              </div>
              
              <div className="flex justify-between">
                <p className="font-bold">Sunday:</p>
                <p>12:00 PM - 11:00 PM</p>
              </div>
              
              <p className="italic text-amber-700 mt-6 text-center border-t pt-4">
                Fresh food made daily - come hungry!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <Link href="#" className="text-yellow-400 hover:text-orange-400 transition-colors text-lg">
            Facebook
          </Link>
          <Link href="#" className="text-yellow-400 hover:text-orange-400 transition-colors text-lg">
            Instagram
          </Link>
          <Link href="#" className="text-yellow-400 hover:text-orange-400 transition-colors text-lg">
            Yelp
          </Link>
        </div>
        <p>&copy; 2025 Charred Fork. All rights reserved.</p>
      </div>
    </footer>
  );
};

const smoothScrollTo = (targetId: string) => {
  const target = document.querySelector(targetId) as HTMLElement;
  if (target) {
    const targetPosition = target.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuart = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t * t + b;
      t -= 2;
      return -c / 2 * (t * t * t * t - 2) + b;
    };

    requestAnimationFrame(animation);
  }
};

export default function HomePage() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        smoothScrollTo(target.hash);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <main className="font-serif">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
}