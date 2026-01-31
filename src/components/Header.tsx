import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  name: "Inicio",
  href: "#inicio"
}, {
  name: "Nosotros",
  href: "#nosotros"
}, {
  name: "Servicios",
  href: "#servicios"
}, {
  name: "Proyectos",
  href: "#proyectos"
}, {
  name: "Clientes",
  href: "#clientes"
}, {
  name: "Contacto",
  href: "#contacto"
}];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" onClick={e => {
          e.preventDefault();
          scrollToSection("#inicio");
        }} className="flex items-center gap-3">
            <img alt="Logo Industrias Aceros Ochoa Guerrero" className="h-12 md:h-14 w-auto" src="/lovable-uploads/e10296c2-873a-4a84-8f2c-8e72018dcb5c.jpg" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg md:text-xl text-foreground leading-tight">
                INDUSTRIAS ACEROS
              </span>
              <span className="font-heading font-semibold text-sm text-primary leading-tight">
                OCHOA GUERRERO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
            e.preventDefault();
            scrollToSection(link.href);
          }} className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200">
                {link.name}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+573133446059" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">313 344 6059</span>
            </a>
            <Button variant="default" onClick={() => scrollToSection("#contacto")} className="primary-gradient text-primary-foreground font-semibold btn-shadow hover:opacity-90 transition-opacity">
              Cotiza con nosotros
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <nav className="container-custom py-4 flex flex-col gap-2">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
            e.preventDefault();
            scrollToSection(link.href);
          }} className="font-body py-3 px-4 text-foreground/80 hover:text-primary hover:bg-card rounded-lg transition-all duration-200">
                  {link.name}
                </a>)}
              <div className="pt-4 border-t border-border mt-2">
                <Button variant="default" onClick={() => scrollToSection("#contacto")} className="w-full primary-gradient text-primary-foreground font-semibold">
                  Cotiza con nosotros
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;