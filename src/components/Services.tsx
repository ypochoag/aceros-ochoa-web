import { 
  ChefHat, 
  Bath, 
  Factory, 
  Utensils, 
  Wind, 
  Fence,
  Grid3X3,
  Trash2,
  FlameKindling
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ChefHat,
    title: "Cocinas Industriales",
    description: "Mesones, lavaplatos, estanterías y equipamiento completo para cocinas comerciales y residenciales.",
    items: ["Mesones", "Lavaplatos", "Plateros", "Estanterías"]
  },
  {
    icon: Bath,
    title: "Baños y Lavamanos",
    description: "Lavamanos, lavatraperos, divisiones de baño y accesorios en acero inoxidable de alta calidad.",
    items: ["Lavamanos", "Lavatraperos", "Divisiones", "Accesorios"]
  },
  {
    icon: Factory,
    title: "Equipos Industriales",
    description: "Mesas de laboratorio, carros para comida, autoservicios y equipamiento para instituciones.",
    items: ["Mesas de laboratorio", "Carros", "Autoservicios", "Cárcamos"]
  },
  {
    icon: Wind,
    title: "Extracción y Ventilación",
    description: "Campanas extractoras industriales diseñadas para alta eficiencia y durabilidad.",
    items: ["Campanas extractoras", "Ductos", "Filtros", "Instalación"]
  },
  {
    icon: Fence,
    title: "Barandas y Pasamanos",
    description: "Barandas, pasamanos y estructuras arquitectónicas en acero inoxidable a medida.",
    items: ["Barandas", "Pasamanos", "Escaleras", "Estructuras"]
  },
  {
    icon: FlameKindling,
    title: "Estufas y Parrillas",
    description: "Estufas industriales, parrillas y equipos de cocción profesional de alto rendimiento.",
    items: ["Estufas", "Parrillas", "Planchas", "Freidoras"]
  },
  {
    icon: Grid3X3,
    title: "Almacenamiento",
    description: "Repisas, estanterías, escabiladeros y soluciones de organización para espacios comerciales.",
    items: ["Repisas", "Estanterías", "Platilleros", "Escabiladeros"]
  },
  {
    icon: Trash2,
    title: "Manejo de Residuos",
    description: "Canecas, shut de basura y trampas de grasa para una gestión eficiente de residuos.",
    items: ["Canecas", "Shut de basura", "Trampas de grasa"]
  },
];

const Services = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Soluciones Integrales en Acero
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Fabricamos e instalamos todo tipo de muebles y equipos en acero inoxidable, 
            adaptados a las necesidades específicas de cada cliente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-card p-6 rounded-2xl border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-xs bg-card border border-border px-2 py-1 rounded-full text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-card border border-border rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            ¿Tienes un proyecto especial en mente?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fabricamos 100% a la medida. Cuéntanos tu idea y te ayudamos a hacerla realidad 
            con materiales de la más alta calidad.
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection("#contacto")}
            className="primary-gradient text-primary-foreground font-bold btn-shadow hover:opacity-90 transition-opacity"
          >
            Solicitar cotización
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
