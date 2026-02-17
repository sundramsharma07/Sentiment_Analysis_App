import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useState } from "react";
import { Menu, X, Mic, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-pink-600 font-medium relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-pink-500 after:rounded-full"
      : "text-gray-700 hover:text-pink-600 transition-colors duration-200";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-pink-600 font-medium bg-pink-50 rounded-lg"
      : "text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded-lg transition-colors duration-200";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
                VoiceBloom AI
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Emotional Intelligence
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/features" className={navLinkClass}>Features</NavLink>
            <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>

            {/* Auth Links */}
            <SignedOut>
              <div className="flex items-center space-x-4">
                <NavLink to="/login" className="text-gray-700 hover:text-pink-600 transition-colors duration-200">
                  Login
                </NavLink>
                
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-4">
                <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
                <UserButton 
                  afterSignOutUrl="/login"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <SignedIn>
              <div className="mr-2">
                <UserButton 
                  afterSignOutUrl="/login"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            </SignedIn>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink 
                to="/" 
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="px-3 py-2">Home</div>
              </NavLink>
              <NavLink 
                to="/about" 
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="px-3 py-2">About</div>
              </NavLink>
              <NavLink 
                to="/features" 
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="px-3 py-2">Features</div>
              </NavLink>
              <NavLink 
                to="/pricing" 
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="px-3 py-2">Pricing</div>
              </NavLink>
              
              <SignedOut>
                <div className="pt-4 space-y-2">
                  <NavLink 
                    to="/login" 
                    className={mobileNavLinkClass}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="px-3 py-2">Login</div>
                  </NavLink>
                  
                </div>
              </SignedOut>

              <SignedIn>
                <NavLink 
                  to="/dashboard" 
                  className={mobileNavLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="px-3 py-2">Dashboard</div>
                </NavLink>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}