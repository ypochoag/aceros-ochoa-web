import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Carrera 96 #139-25, Bogotá, Colombia",
    link: "https://www.google.com/maps/search/?api=1&query=Carrera+96+%23139-25+Bogota+Colombia"
  },
  {
    icon: Phone,
    title: "Teléfonos",
    content: "313 344 6059 / 310 868 5453",
    link: "tel:+573133446059"
  },
  {
    icon: Mail,
    title: "Correo",
    content: "industriasacero8a@hotmail.com",
    link: "mailto:industriasacero8a@hotmail.com"
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lunes a Sábado: 8:00 am - 6:00 pm",
    link: null
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Construct WhatsApp message
    const message = `Hola, mi nombre es ${formData.name}. ${formData.message} Mi correo es ${formData.email} y mi teléfono es ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/573133446059?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");

    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto. También puedes continuar la conversación en WhatsApp.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Cotiza Tu Proyecto
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Cuéntanos sobre tu proyecto y recibe una cotización personalizada. 
            Estamos listos para ayudarte a hacer realidad tus ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background p-8 md:p-10 rounded-2xl border border-border">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-card"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Tu teléfono"
                    className="bg-card"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Correo electrónico *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-card"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  ¿Cómo podemos ayudarte? *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="bg-card min-h-[120px]"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full primary-gradient text-primary-foreground font-bold btn-shadow hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link || "#"}
                  target={info.link?.startsWith("http") ? "_blank" : undefined}
                  rel={info.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`bg-background p-5 rounded-xl border border-border flex items-start gap-4 ${info.link ? "hover:border-primary cursor-pointer" : ""} transition-colors`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      {info.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-background p-6 rounded-xl border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-4">
                Síguenos en redes sociales
              </h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100084849407213" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary group transition-colors"
                >
                  <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
                <a 
                  href="https://www.instagram.com/industrias_aceros_ochoa_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary group transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-background rounded-2xl border border-border overflow-hidden h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.044529539651!2d-74.09114952436782!3d4.739093535455768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84f066b6de7f%3A0xbeb4501d00d25e7e!2zQ3JhLiA5NiAjIDEzOS0yNSwgU3ViYSwgQm9nb3TDoSwgRC5DLiwgQm9nb3TDoSwgQm9nb3TDoSwgRC5DLg!5e0!3m2!1sen!2sco!4v1769894973495!5m2!1sen!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de INDUSTRIAS ACERO OCHOA GUERRERO"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
