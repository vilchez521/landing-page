import { Separator } from "@/components/ui/separator";
import { Bot, Mail, Calendar, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Bot className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Manuel Vílchez Sabalete</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Consultor RPA especializado en automatización de procesos empresariales. 
              Más de 5 años transformando operaciones con tecnología.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("process")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Proceso
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("pricing")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tarifas
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Desarrollo RPA</li>
              <li>Consultoría de Automatización</li>
              <li>Optimización de Procesos</li>
              <li>Integración de Sistemas</li>
              <li>Soporte y Mantenimiento</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">vilchezfreelance@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <button 
                  onClick={() => window.open('https://calendly.com/vilchezfreelance/nueva-reunion', '_blank')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Agendar reunión
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span className="text-primary-foreground/80">LinkedIn Profile</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Manuel Vílchez Sabalete. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="hover:text-primary-foreground transition-colors">
              Política de Privacidad
            </button>
            <button className="hover:text-primary-foreground transition-colors">
              Términos de Servicio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;