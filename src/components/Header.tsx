import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SignUpDialog from './SignUpDialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AlgoTrade
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Learn</a>
            <SignUpDialog />
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Sign Up
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Learn</a>
            <div className="space-y-2">
              <SignUpDialog />
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                Sign In
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;