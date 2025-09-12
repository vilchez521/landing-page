import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, Cog, Rocket, BarChart3, HeadphonesIcon } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Análisis Inicial",
      description: "Evaluamos tus procesos actuales y identificamos oportunidades de automatización con mayor ROI.",
      details: ["Reunión inicial gratuita", "Mapeo de procesos", "Análisis de viabilidad", "Propuesta personalizada"]
    },
    {
      icon: FileText,
      title: "2. Planificación",
      description: "Diseñamos la solución RPA más adecuada con cronograma detallado y especificaciones técnicas.",
      details: ["Arquitectura de solución", "Cronograma de proyecto", "Definición de KPIs", "Plan de testing"]
    },
    {
      icon: Cog,
      title: "3. Desarrollo",
      description: "Desarrollo e implementación de la solución RPA siguiendo las mejores prácticas del sector.",
      details: ["Desarrollo iterativo", "Testing continuo", "Documentación técnica", "Validaciones de usuario"]
    },
    {
      icon: Rocket,
      title: "4. Implementación",
      description: "Despliegue en producción con migración segura y formación del equipo usuario.",
      details: ["Deploy en producción", "Formación de usuarios", "Transferencia de conocimiento", "Go-live support"]
    },
    {
      icon: BarChart3,
      title: "5. Monitoreo",
      description: "Seguimiento de resultados y optimización continua para maximizar el retorno de inversión.",
      details: ["Monitoreo de performance", "Reporting de KPIs", "Análisis de mejoras", "Optimización continua"]
    },
    {
      icon: HeadphonesIcon,
      title: "6. Soporte",
      description: "Soporte técnico continuo y mantenimiento para garantizar el funcionamiento óptimo.",
      details: ["Soporte técnico 24/7", "Mantenimiento preventivo", "Resolución de incidencias", "Actualizaciones"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Cómo <span className="text-primary">Trabajamos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Metodología probada que garantiza el éxito de tu proyecto RPA desde el análisis hasta la implementación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="group relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <step.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              {/* Step number badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {index + 1}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-8 bg-card rounded-xl border shadow-elegant">
            <h3 className="text-2xl font-bold mb-4">¿Por qué mi metodología funciona?</h3>
            <p className="text-muted-foreground mb-6">
              Mi enfoque se basa en más de 5 años de experiencia implementando soluciones RPA exitosas. 
              Cada proyecto sigue un proceso estructurado que minimiza riesgos y garantiza resultados medibles.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Proyectos exitosos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-2">30 días</div>
                <div className="text-sm text-muted-foreground">Tiempo promedio</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Reducción de tiempo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;