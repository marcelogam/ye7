import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-ye7-blue backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Grid com 3 colunas */}
        <div className="grid grid-cols-3 items-center">
          {/* Esquerda (vazia só para balancear) */}
          <div></div>

          {/* Centro - Logo */}
          <div className="flex justify-center">
            <img
              src="/images/ye7 - Logo branca.jpg"
              alt="Ye7 Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Direita - Botão ou Menu */}
          <div className="flex justify-end items-center">
            {/* Desktop */}
            <nav className="hidden md:flex">
              <a
                href="https://wa.me/5531998127121"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="
                    bg-gradient-to-br from-white to-gray-200
                    hover:bg-gradient-to-tl 
                    text-ye7-blue
                    font-semibold
                    transition-all 
                    duration-500
                    hover:scale-105
                  "
                >
                  Falar Conosco
                </Button>
              </a>
            </nav>

            {/* Mobile */}
            <div className="flex md:hidden text-white">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-white hover:text-ye7-blue transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-white hover:text-ye7-blue transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-left text-white hover:text-ye7-blue transition-colors"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-white hover:text-ye7-blue transition-colors"
              >
                Contato
              </button>
              <a
                href="https://wa.me/5531998127121"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="
                    bg-gradient-to-br from-white to-gray-200
                    hover:bg-gradient-to-tl 
                    text-ye7-blue
                    font-semibold
                    transition-all 
                    duration-500
                    hover:scale-105
                  "
                >
                  Falar Conosco
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
