
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Facebook, 
  Search, 
  BarChart3, 
  Calendar, 
  Users, 
  MessageSquare, 
  Globe, 
  Video, 
  Edit,
  Check
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Facebook,
      title: "Tráfego no Facebook",
      description: "Campanhas otimizadas para máximo ROI nas redes sociais"
    },
    {
      icon: Search,
      title: "Tráfego no Google Ads",
      description: "Estratégias de busca paga para capturar leads qualificados"
    },
    {
      icon: BarChart3,
      title: "Relatórios Semanais",
      description: "Vídeos detalhados e dashboard em tempo real"
    },
    {
      icon: Calendar,
      title: "Reunião Semanal",
      description: "Alinhamento estratégico toda semana"
    },
    {
      icon: Users,
      title: "Consultoria Comercial",
      description: "Otimização do seu processo de vendas"
    },
    {
      icon: MessageSquare,
      title: "Automação WhatsApp",
      description: "Botconversa para automatizar seu comercial"
    },
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Páginas de alta conversão personalizadas"
    },
    {
      icon: Video,
      title: "Scripts Validados",
      description: "Roteiros testados para seus vídeos"
    },
    {
      icon: Edit,
      title: "Edição de Vídeo",
      description: "Conteúdo profissional para suas campanhas"
    }
  ];

  const includedServices = [
    "Social Media",
    "Suporte 24h",
    "Plataforma completa de CRM"
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tudo que você precisa em <span className="text-ye7-blue">um só lugar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma solução completa que vai além do marketing digital tradicional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mainServices.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-ye7-blue"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-ye7-blue/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-ye7-blue" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ainda incluímos <span className="text-ye7-cyan">sem custo adicional</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {includedServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Check className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
