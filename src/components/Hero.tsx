import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Shield, text: "Calidad garantizada" },
  { icon: Clock, text: "19 años de experiencia" },
  { icon: Award, text: "100% a medida" },
];

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center py-32 md:py-40">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-6 animate-fade-in">
            <span className="text-sm font-medium">Desde 2007 fabricando calidad</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-primary-foreground mb-6 leading-tight animate-fade-up">
            Expertos en{" "}
            <span className="text-primary">Acero Inoxidable</span>
            <br />
            a la Medida
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 font-body animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Fabricamos e instalamos muebles, cocinas y soluciones integrales en acero inoxidable 
            para hogares, empresas e industria en toda Colombia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection("#contacto")}
              className="primary-gradient text-primary-foreground font-bold text-lg px-8 py-6 btn-shadow hover:opacity-90 transition-all duration-300 group"
            >
              Cotiza con nosotros
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#proyectos")}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6"
            >
              Ver proyectos
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-primary-foreground/70"
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
