import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-300 hover:text-primary ${
      isActive ? 'text-primary' : 'text-institutional'
    }`;

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    `block text-lg font-medium py-2 transition-colors duration-300 hover:text-primary ${
      isActive ? 'text-primary' : 'text-institutional'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-gray-100 shadow-sm py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary font-serif font-bold text-xl">
                A
            </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-lg leading-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Al-Hikmah
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted">
              Medan
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/buku" className={navClass}>Buku</NavLink>
          <NavLink to="/berita" className={navClass}>Berita</NavLink>
          <NavLink to="/visi-misi" className={navClass}>Visi & Misi</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden">
          <div className="flex flex-col px-6 py-6 gap-2">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>About</NavLink>
            <NavLink to="/buku" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>Buku</NavLink>
            <NavLink to="/berita" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>Berita</NavLink>
            <NavLink to="/visi-misi" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>Visi & Misi</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;