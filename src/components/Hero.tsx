import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-primary-glow/5 to-accent-glow/5 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <span className="text-primary font-medium">Consultor RPA Freelance</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Automatiza tu negocio con
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                RPA Profesional
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Soy Manuel Vílchez Sabalete, especialista RPA con más de 5 años de experiencia en UiPath, 
              Blue Prism, Automation Anywhere y Power Automate. Ayudo a empresas a elegir e 
              implementar la plataforma RPA perfecta para sus necesidades específicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToContact}
                className="group"
              >
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Servicios
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <span>+5 años experiencia</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-accent" />
                <span>100+ procesos automatizados</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Manuel Vílchez - Consultor RPA trabajando en automatización de procesos" 
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;