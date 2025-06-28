
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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1ada7f21-a8e6-416b-9b15-092a7f271e28.png" 
              alt="Ye7 Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-ye7-blue transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-ye7-blue transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-gray-700 hover:text-ye7-blue transition-colors"
            >
              Resultados
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-ye7-blue transition-colors"
            >
              Contato
            </button>
            <Button className="bg-ye7-blue hover:bg-ye7-blue/90 text-white">
              Falar Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-ye7-blue transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-ye7-blue transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-left text-gray-700 hover:text-ye7-blue transition-colors"
              >
                Resultados
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-ye7-blue transition-colors"
              >
                Contato
              </button>
              <Button className="bg-ye7-blue hover:bg-ye7-blue/90 text-white w-fit">
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
