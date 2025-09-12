import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Users, Lightbulb } from "lucide-react";

const About = () => {
  const skills = [
    "UiPath", "Power Automate", "Automation Anywhere", "Blue Prism"
  ];

  const achievements = [
    {
      icon: Award,
      title: "5+ Años",
      description: "Experiencia en RPA"
    },
    {
      icon: TrendingUp,
      title: "100+ Procesos",
      description: "Automatizados con éxito"
    },
    {
      icon: Users,
      title: "50+ Clientes",
      description: "Satisfechos"
    },
    {
      icon: Lightbulb,
      title: "80% Reducción",
      description: "Promedio en tiempo de tareas"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Sobre <span className="text-primary">Manuel Vílchez Sabalete</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Desarrollador RPA especializado en transformar procesos manuales en soluciones automatizadas eficientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Mi Historia</h3>
            <p className="text-muted-foreground leading-relaxed">
              Con más de 5 años de experiencia en automatización de procesos robóticos (RPA), 
              he ayudado a decenas de empresas a optimizar sus operaciones y reducir costes operativos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mi enfoque se centra en entender profundamente los procesos de negocio antes de 
              implementar soluciones tecnológicas, garantizando resultados medibles y sostenibles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Especializado exclusivamente en las 4 plataformas RPA líderes del mercado: UiPath, 
              Blue Prism, Automation Anywhere y Power Automate, adapto la solución perfecta 
              para cada necesidad específica de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 animate-slide-up">
                <achievement.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="text-xl font-bold text-primary mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Plataformas RPA Especializadas</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;