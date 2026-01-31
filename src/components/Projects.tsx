import { useState } from "react";
import { X } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    image: project1,
    title: "Cocina Industrial Completa",
    category: "Restaurante",
    description: "Instalación completa de cocina industrial con mesones, estanterías y sistemas de almacenamiento."
  },
  {
    image: project2,
    title: "Baño Moderno Residencial",
    category: "Hogar",
    description: "Lavamanos y mobiliario de baño en acero inoxidable para residencia de alto nivel."
  },
  {
    image: project3,
    title: "Laboratorio Equipado",
    category: "Industria",
    description: "Mesas de trabajo y estanterías para laboratorio farmacéutico con especificaciones técnicas."
  },
  {
    image: project4,
    title: "Línea de Servicio",
    category: "Hotel",
    description: "Equipos de buffet y estaciones de servicio para hotel cinco estrellas."
  },
  {
    image: project5,
    title: "Barandas Arquitectónicas",
    category: "Comercial",
    description: "Diseño e instalación de barandas y pasamanos para edificio corporativo."
  },
  {
    image: project6,
    title: "Sistema de Extracción",
    category: "Restaurante",
    description: "Campana extractora industrial de alta capacidad para cocina profesional."
  },
];

const categories = ["Todos", "Restaurante", "Hogar", "Industria", "Hotel", "Comercial"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="proyectos" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestro Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Cada proyecto es único. Descubre cómo hemos transformado espacios en 
            hogares, restaurantes, hospitales y empresas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "primary-gradient text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer card-hover"
            >
              <div className="aspect-square">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-steel-dark via-steel-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 bg-steel-dark/90 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-background rounded-2xl overflow-hidden animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
