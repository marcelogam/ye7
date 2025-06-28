
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-ye7-blue to-ye7-cyan backdrop-blur-sm border-b border-white/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1ada7f21-a8e6-416b-9b15-092a7f271e28.png" 
              alt="Ye7 Logo" 
              className="h-8 w-auto filter brightness-0 invert"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-white/80 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-white/80 transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-white hover:text-white/80 transition-colors"
            >
              Resultados
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-white/80 transition-colors"
            >
              Contato
            </button>
            <Button className="bg-white text-ye7-blue hover:bg-white/90">
              Falar Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-white hover:text-white/80 transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-white hover:text-white/80 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-left text-white hover:text-white/80 transition-colors"
              >
                Resultados
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-white hover:text-white/80 transition-colors"
              >
                Contato
              </button>
              <Button className="bg-white text-ye7-blue hover:bg-white/90 w-fit">
                Falar Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
