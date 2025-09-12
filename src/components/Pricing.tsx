import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Clock, LineChart } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "700 - 1000",
      hours: "Hasta un proceso automatizado",
      description: "Ideal para pymes que quieran dar su primer paso en RPA",
      badge: "Más Popular",
      badgeColor: "bg-accent text-accent-foreground",
      paymentNote: "Pago único",
      leadTime: "Entrega estimada: 1–2 semanas",
      features: [
        "Análisis inicial del proceso y propuesta de automatización",
        "Desarrollo de bot RPA",
        "Testing y optimización inicial",
        "Documentación técnica",
        "Formación básica usuario",
        "1 mes soporte post-implementación",
        "Digitaliza tu primer proceso y empieza a ahorrar tiempo desde el primer mes"
      ],
      highlight: false
    },
    {
      name: "Professional",
      price: "2000 - 3000",
      hours: "Hasta 3 procesos automatizados",
      description: "Para empresas que quieren optimizar varios procesos a la vez",
      badge: "Recomendado",
      badgeColor: "bg-primary text-primary-foreground",
      paymentNote: "Pago único",
      leadTime: "Entrega estimada: 2–4 semanas",
      features: [
        "Automatización de 2-3 procesos",
        "Integración con sistemas actuales (ERP-CRM, etc)",
        "Dashboard de seguimiento y monitorización",
        "Formación avanzada para el equipo",
        "3 meses soporte extendido",
        "Optimización y mejoras post-implementación",
        "Multiplica la eficiencia de tu equipo con un ecosistema de bots trabajando en conjunto"
      ],
      highlight: true
    },
    {
      name: "Advanced",
      price: "3.000 - 4.000",
      hours: "Hasta 5 procesos automatizados",
      description: "Para empresas que quieren ir más allá y escalar la automatización a nivel departamental",
      badgeColor: "bg-indigo-600 text-white",
      paymentNote: "Pago único (presupuesto a medida)",
      leadTime: "Entrega estimada: 4–6 semanas",
      features: [
        "Automatización de 4-5 procesos clave",
        "Integración avanzada con ERP, CRM y APIs externas",
        "Dashboard centralizado para gestión y monitorización",
        "Formación completa para todo el equipo",
        "6 meses de soporte extendido con SLA",
        "Auditoría de procesos y roadmap de automatización a 12 meses",
        "Ecosistema escalable de bots coordinados entre departamentos"
      ],
      highlight: false
    },
    {
      name: "Enterprise",
      price: "Desde 6.000",
      hours: "Automatización de 5 o más procesos estratégicos",
      description: "Para empresas que buscan una transformación digital completa",
      badge: "Máximo Valor",
      badgeColor: "bg-success text-success-foreground",
      paymentNote: "Pago único (presupuesto a medida)",
      leadTime: "Entrega estimada: 4–8 semanas",
      features: [
        "Precio adaptado a la magnitud y complejidad de la automatización",
        "Diseño y arquitectura RPA completa",
        "Auditoria y roadmap de automatización a 12 meses",
        "Implementación de un Centro de excelencia RPA",
        "Formación para todo el equipo",
        "12 meses de soporte premium con SLA garantizado",
        "Consultoría estratégica continua",
        "Escalabilidad para nuevos procesos"
      ],
      highlight: false
    }
  ];

  const addons = [
    {
      name: "Evolutivo & Mejora Continua",
      monthly: "Desde 1.500 €/mes",
      badge: "Crecimiento",
      badgeColor: "bg-success text-success-foreground",
      icon: LineChart,
      description: "Para mantener y ampliar la automatización de forma progresiva con soporte continuo",
      features: [
        "Incluye soporte mensual y mejoras evolutivas en procesos ya automatizados",
        "Desarrollo de nuevos alcances en bots existentes o creación de pequeños procesos adicionales",
        "Integraciones con nuevas herramientas y APIs (ERP, CRM, SaaS externos)",
        "Monitorización y optimización continua de bots en producción",
        "Consultoría estratégica mensual y roadmap de evolución",
        "Prioridad en calendario y respuesta a incidencias"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Tarifas <span className="text-primary">Transparentes</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Paquetes diseñados para adaptarse a las necesidades de tu empresa.
          </p>
        </div>

        {/* PLANES PRINCIPALES */}
        <div className="grid gap-10 md:grid-cols-3 auto-rows-fr max-w-7xl mx-auto px-4">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative h-full flex flex-col 
                ${plan.highlight ? 'ring-2 ring-primary shadow-2xl md:-translate-y-2' : 'hover:shadow-elegant'} 
                transition-all duration-300
                ${plan.name === 'Enterprise' ? 'md:col-span-3 text-center items-center' : ''}
              `}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className={plan.badgeColor}>
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-3xl font-bold text-primary">{plan.price} €</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">{plan.paymentNote}</div>
                  <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-4">
                    <div className="flex items-center gap-1">
                      <Zap className="h-4 w-4 text-accent" />
                      <span>{plan.hours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{plan.leadTime}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    variant={plan.highlight ? "hero" : "outline"}
                    className="w-full mt-6"
                    onClick={scrollToContact}
                  >
                    Solicitar Información
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ADDONS: Mantenimiento / Evolutivos */}
        <div className="mt-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Paquetes de continuidad</h3>
            <p className="text-muted-foreground">
              Evolución para que tus automatizaciones sigan generando valor mes a mes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {addons.map((addon, i) => (
              <Card key={i} className="relative min-h-[420px] flex flex-col hover:shadow-elegant transition-all duration-300">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className={addon.badgeColor}>{addon.badge}</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-2 h-8 w-8 flex items-center justify-center rounded-full bg-muted">
                    <addon.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{addon.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {addon.description}
                  </CardDescription>
                  <div className="mt-3 text-2xl font-semibold text-primary">{addon.monthly}</div>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow">
                  <ul className="space-y-3">
                    {addon.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button variant="outline" className="w-full mt-5" onClick={scrollToContact}>
                      Añadir al plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 text-center bg-card border-accent/20">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas algo personalizado?</h3>
            <p className="text-muted-foreground mb-6">
              Cada empresa es única. Si ninguno de estos paquetes se adapta completamente a tus necesidades,
              podemos crear una propuesta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={scrollToContact}>
                Consulta Personalizada
              </Button>
              <Button variant="accent" onClick={scrollToContact}>
                Agendar Reunión Gratuita
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;