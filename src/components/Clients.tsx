import { Building2, GraduationCap, Stethoscope, Utensils, Home, Rocket, Quote } from "lucide-react";

const clientTypes = [
  { icon: Home, name: "Hogares", description: "Familias que buscan calidad" },
  { icon: Utensils, name: "Restaurantes", description: "Cocinas profesionales" },
  { icon: Building2, name: "Empresas", description: "Espacios corporativos" },
  { icon: GraduationCap, name: "Colegios", description: "Instituciones educativas" },
  { icon: Stethoscope, name: "Hospitales", description: "Sector salud" },
  { icon: Rocket, name: "Emprendimientos", description: "Nuevos negocios" },
];

const testimonials = [
  {
    text: "Excelente calidad y cumplimiento. La linea de buffet de nuestro restaurante quedó perfecto. Totalmente recomendados.",
    author: "Alexandra Lopez",
    role: "Restaurante Empanarrita",
    rating: 5
  },
  {
    text: "Trabajamos con ellos para equipar el laboratorio del colegio. Profesionales, puntuales y con excelentes acabados.",
    author: "Olga",
    role: "Colegio Gimnasio Campestre",
    rating: 5
  },
  {
    text: "Las barandas de nuestra casa quedaron espectaculares. El equipo fue muy atento a cada detalle que pedimos.",
    author: "Eduardo Luna",
    role: "Cliente Residencial",
    rating: 5
  },
];

const Clients = () => {
  return (
    <section id="clientes" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Clientes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Confianza que se Construye
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Hemos tenido el privilegio de trabajar con diversos sectores, 
            desde hogares hasta grandes industrias.
          </p>
        </div>

        {/* Client Types */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {clientTypes.map((client, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border text-center card-hover"
            >
              <client.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-bold text-foreground mb-1">{client.name}</h4>
              <p className="text-xs text-muted-foreground">{client.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border relative card-hover"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-heading font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
