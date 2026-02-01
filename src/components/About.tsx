import { Target, Eye, Heart, CheckCircle } from "lucide-react";

const values = [
  { icon: CheckCircle, title: "Calidad", description: "Materiales de primera y acabados impecables" },
  { icon: CheckCircle, title: "Cumplimiento", description: "Respetamos tiempos de entrega acordados" },
  { icon: CheckCircle, title: "Responsabilidad", description: "Compromiso total con cada proyecto" },
  { icon: CheckCircle, title: "Honestidad", description: "Transparencia en precios y procesos" },
];

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            19 Años Construyendo Confianza
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Desde 2007, INDUSTRIAS ACERO OCHOA GUERRERO S.A.S. ha sido sinónimo de calidad y 
            excelencia en la fabricación de productos en acero inoxidable en Bogotá, Colombia.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              De Taller de Muebles a Líderes en Acero Inoxidable
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Lo que comenzó como un pequeño taller de muebles en acero, ha evolucionado 
              hasta convertirse en una empresa fabricante y experta armadora en acero 
              inoxidable y madera, ofreciendo soluciones integrales para cocinas, baños 
              y espacios industriales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestra atención personalizada y altos estándares de calidad nos han 
              permitido servir a hogares, empresas e industrias en toda Colombia, 
              construyendo relaciones duraderas basadas en la confianza y el compromiso.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background p-8 rounded-xl text-center card-hover border border-border">
              <span className="text-4xl md:text-5xl font-heading font-bold text-primary">19+</span>
              <p className="text-muted-foreground mt-2">Años de experiencia</p>
            </div>
            <div className="bg-background p-8 rounded-xl text-center card-hover border border-border">
              <span className="text-4xl md:text-5xl font-heading font-bold text-primary">100%</span>
              <p className="text-muted-foreground mt-2">A la medida</p>
            </div>
            <div className="bg-background p-8 rounded-xl text-center card-hover border border-border">
              <span className="text-4xl md:text-5xl font-heading font-bold text-primary">500+</span>
              <p className="text-muted-foreground mt-2">Proyectos realizados</p>
            </div>
            <div className="bg-background p-8 rounded-xl text-center card-hover border border-border">
              <span className="text-4xl md:text-5xl font-heading font-bold text-primary">3</span>
              <p className="text-muted-foreground mt-2">Sectores atendidos</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-background p-8 md:p-10 rounded-2xl border border-border card-hover">
            <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-heading font-bold text-foreground mb-4">Nuestra Misión</h4>
            <p className="text-muted-foreground leading-relaxed">
              Fabricar productos en acero inoxidable de la más alta calidad, brindando 
              soluciones a medida que superen las expectativas de nuestros clientes, 
              con un servicio personalizado y comprometido con la excelencia.
            </p>
          </div>
          <div className="bg-background p-8 md:p-10 rounded-2xl border border-border card-hover">
            <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-heading font-bold text-foreground mb-4">Nuestra Visión</h4>
            <p className="text-muted-foreground leading-relaxed">
              Ser la empresa líder en fabricación de productos en acero inoxidable en 
              Colombia, reconocida por nuestra innovación, calidad y el valor que 
              agregamos a cada proyecto que emprendemos.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Nuestros Valores
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Los principios que guían cada proyecto y cada relación con nuestros clientes.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-xl border border-border text-center card-hover"
            >
              <value.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h5 className="font-heading font-bold text-foreground mb-2">{value.title}</h5>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
