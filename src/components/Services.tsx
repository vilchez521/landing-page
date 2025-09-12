import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cog, BarChart3, FileText, Database, Workflow } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "UiPath",
      description: "Creación de bots avanzados con UiPath Studio, aprovechando sus capacidades de AI y ML integradas.",
      features: ["UiPath Studio & StudioX", "Orchestrator management", "AI Computer Vision", "Document Understanding"]
    },
    {
      icon: Cog,
      title: "Power Automate",
      description: "Automatización de flujos de trabajo en el ecosistema Microsoft 365 y aplicaciones empresariales.",
      features: ["Power Automate Desktop", "Cloud flows", "Process Advisor", "Integración Office 365"]
    },
    {
      icon: BarChart3,
      title: "Automation Anywhere",
      description: "Desarrollo de bots inteligentes con la plataforma cloud-native líder en automatización.",
      features: ["Bot Store integrations", "IQ Bot para documentos", "Control Room", "AARI para humanos"]
    },
    {
      icon: Workflow,
      title: "BluePrism Enterprise",
      description: "Soluciones RPA empresariales robustas con la plataforma más segura del mercado.",
      features: ["Digital Exchange", "Blue Prism Cloud", "Intelligent Automation", "Enterprise security"]
    },
    {
      icon: FileText,
      title: "Migración entre Plataformas",
      description: "Migración segura de bots entre diferentes plataformas RPA según tus necesidades.",
      features: ["Análisis de compatibilidad", "Migración de procesos", "Optimización post-migración", "Training del equipo"]
    },
    {
      icon: Database,
      title: "Consultoría Especializada",
      description: "Asesoramiento para elegir la plataforma RPA óptima según tu infraestructura y objetivos.",
      features: ["Evaluación de plataformas", "ROI analysis", "Proof of Concept", "Roadmap estratégico"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Servicios <span className="text-primary">Especializados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Especialista en las 4 plataformas RPA líderes: UiPath, Blue Prism, Automation Anywhere y Power Automate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;