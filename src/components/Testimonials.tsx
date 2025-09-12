import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      position: "Director de Operaciones",
      company: "TechCorp Solutions",
      content: "Manuel nos ayudó a migrar de UiPath a Power Automate para integrarnos mejor con nuestro ecosistema Microsoft. Su conocimiento profundo de ambas plataformas hizo la transición perfecta.",
      rating: 5,
      result: "Migración exitosa sin interrupciones"
    },
    {
      name: "Ana López",
      position: "Gerente de IT",
      company: "Industrias Mediterráneas",
      content: "Necesitábamos una solución enterprise robusta y Manuel nos implementó Blue Prism. Su experiencia en la plataforma nos permitió aprovechar todas las funcionalidades desde el inicio.",
      rating: 5,
      result: "Implementación Blue Prism enterprise"
    },
    {
      name: "Miguel Torres",
      position: "CEO",
      company: "Logística Digital",
      content: "Manuel evaluó nuestras necesidades y nos recomendó Automation Anywhere. La implementación cloud-native fue impecable y ahora tenemos automatización que crece con el negocio.",
      rating: 5,
      result: "Solución cloud-native escalable"
    },
    {
      name: "Carmen Vega",
      position: "Directora Financiera",
      company: "Global Finance",
      content: "Como empresa que usa múltiples herramientas, necesitábamos un experto en varias plataformas RPA. Manuel domina UiPath, Blue Prism y Power Automate, creando soluciones híbridas perfectas.",
      rating: 5,
      result: "Arquitectura multi-plataforma optimizada"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Casos de <span className="text-primary">Éxito</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre cómo he ayudado a empresas como la tuya a transformar sus operaciones con RPA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>
                        {testimonial.position}<br />
                        <span className="text-primary font-medium">{testimonial.company}</span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="p-3 bg-success/10 rounded-lg border-l-4 border-success">
                  <p className="text-sm font-medium text-success">
                    Resultado: {testimonial.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">100+</div>
              <div className="text-sm text-muted-foreground">Procesos Automatizados</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-success">€2M+</div>
              <div className="text-sm text-muted-foreground">Ahorros Generados</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Tasa de Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;