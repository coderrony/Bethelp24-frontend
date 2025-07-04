"use client";
import { Globe, HelpCircle, Menu, Search, X } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-500 text-white w-full">
      {/* Top Bar */}
      <div className="bg-bet365-dark-green px-2 md:px-4 py-1 text-xs ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 md:space-x-4">
            <span className="flex items-center">
              <Globe className="w-3 h-3 mr-1" />
              English
            </span>
            <span className="hidden sm:inline">Responsible Gambling</span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <span className="hidden sm:inline">Help</span>
            <HelpCircle className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-2 md:px-4 py-2 md:py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-bet365-yellow text-bet365-dark px-2 md:px-3 py-1 rounded font-bold text-lg md:text-xl">
              Bethelp24
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/sports" className="nav-item">Sports</Link>
            <Link href="/live" className="nav-item">In-Play</Link>
            <div className="nav-item">Casino</div>
            <div className="nav-item">Live Casino</div>
            <div className="nav-item">Games</div>
       
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2 md:space-x-4">
      

            {/* User Actions */}
            <div className="flex items-center space-x-1 md:space-x-2">
              <button className="bg-bet365-yellow text-bet365-dark px-3 md:px-4 py-1 md:py-2 rounded font-semibold text-xs md:text-sm hover:bg-yellow-400 transition-colors">
                Join Now
              </button>
              <button className="border border-white px-3 md:px-4 py-1 md:py-2 rounded text-xs md:text-sm hover:bg-white hover:text-bet365-green transition-colors">
                Log In
              </button>
            </div>

            {/* Mobile Menu */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col md:hidden">
            <div className="bg-green-500 w-full p-4 flex justify-between items-center">
              <div className="bg-bet365-yellow text-bet365-dark px-3 py-1 rounded font-bold text-xl">
                Bethelp24
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-7 h-7 text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 px-6 py-6 text-lg">
              <Link href="/sports" className="nav-item" onClick={() => setIsMenuOpen(false)}>Sports</Link>
              <Link href="/live" className="nav-item" onClick={() => setIsMenuOpen(false)}>In-Play</Link>
              <div className="nav-item">Casino</div>
              <div className="nav-item">Live Casino</div>
              <div className="nav-item">Games</div>
              <div className="nav-item">Poker</div>
              <div className="nav-item">Bingo</div>
              <div className="flex items-center bg-white rounded px-3 py-2 mt-4">
                <Search className="w-4 h-4 text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="text-black text-sm outline-none w-full"
                />
              </div>
              <div className="flex space-x-2 mt-4">
                <button className="bg-bet365-yellow text-bet365-dark px-4 py-2 rounded font-semibold text-sm hover:bg-yellow-400 transition-colors w-full">
                  Join Now
                </button>
                <button className="border border-white px-4 py-2 rounded text-sm hover:bg-white hover:text-bet365-green transition-colors w-full">
                  Log In
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;