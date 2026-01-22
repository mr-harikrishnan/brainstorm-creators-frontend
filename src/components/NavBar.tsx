import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: ['Web Design', 'Development', 'Consulting', 'Marketing']
    },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? ' backdrop-blur-lg shadow-xl' 
        : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <img src={logo} alt="NexaStudio" className="cursor-target w-20 h-20 object-contain" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative cursor-target"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-1 ${
                    isScrolled 
                      ? 'text-white hover:text-black hover:bg-gray-100' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(' ', '-')}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white transition-colors duration-150"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4 cursor-target">
            <button className={`relative group px-6 py-2.5 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              isScrolled 
                ? ' bg-white text-black hover:bg-white hover:text-black' 
                : 'border-white bg-white text-black hover:bg-black hover:text-white'
            }`}>
              <span className="relative font-medium">Get Started</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden border-t shadow-lg ${
          isScrolled ? 'bg-white border-gray-200' : 'bg-black border-white/10'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-gray-800 hover:bg-gray-100 hover:text-black' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(' ', '-')}`}
                        className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                          isScrolled 
                            ? 'text-gray-600 hover:text-black' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className={`w-full mt-4 px-6 py-3 rounded-lg font-medium transition-all duration-200 border-2 ${
              isScrolled 
                ? 'border-black bg-black text-white hover:bg-white hover:text-black' 
                : 'border-white bg-white text-black hover:bg-black hover:text-white'
            }`}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}