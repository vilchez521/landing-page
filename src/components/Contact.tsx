import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, Clock, CheckCircle, MessageSquare } from "lucide-react";

const Contact = () => {
  const benefits = [
    "Análisis gratuito de tus procesos",
    "Estimación de ROI personalizada", 
    "Propuesta técnica detallada",
    "Sin compromiso ni costes ocultos"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para <span className="text-primary">Automatizar</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Agenda una consulta gratuita de 30 minutos y descubre cómo RPA puede transformar tu negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5"></div>
            <CardHeader className="relative z-10 text-center">
              <div className="mb-4">
                <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-full w-fit mx-auto text-white">
                  <Calendar className="h-8 w-8" />
                </div>
              </div>
              <CardTitle className="text-2xl">Agenda tu Consulta Gratuita</CardTitle>
              <CardDescription className="text-muted-foreground">
                30 minutos para analizar tus procesos y identificar oportunidades de automatización
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-accent">¿Qué incluye la consulta?</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                  <li>• Evaluación de procesos candidatos</li>
                  <li>• Estimación de ahorros potenciales</li>
                  <li>• Roadmap de implementación</li>
                  <li>• Q&A personalizada</li>
                </ul>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full group-hover:scale-105 transition-transform"
                onClick={() => window.open('https://calendly.com/vilchezfreelance/nueva-reunion', '_blank')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Reunión Ahora
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Otras formas de contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Email directo</p>
                    <p className="text-sm text-muted-foreground">vilchezfreelance@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">+34 687 857 246</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Respuesta garantizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Me comprometo a responder todas las consultas en menos de 24 horas. 
                  Tu tiempo es valioso y respeto eso.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">&lt; 24h</div>
                    <div className="text-xs text-muted-foreground">Tiempo de respuesta</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">100%</div>
                    <div className="text-xs text-muted-foreground">Consultas respondidas</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-success/5 border-success/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                  <h3 className="font-semibold text-success mb-2">Satisfacción Garantizada</h3>
                  <p className="text-sm text-muted-foreground">
                    Si no estás completamente satisfecho con la consulta inicial, 
                    te devolvemos el 100% de tu inversión.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;