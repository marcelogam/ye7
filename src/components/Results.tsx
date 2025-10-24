
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";

const Results = () => {
  const stats = [
    {
      icon: Users,
      title: "50+",
      subtitle: "Clientes Satisfeitos",
      description: "Empresas que confiaram na nossa metodologia"
    },
    {
      icon: DollarSign,
      title: "R$ 3M+",
      subtitle: "Investidos em Anúncios",
      description: "Capital gerenciado com expertise e responsabilidade"
    },
    {
      icon: TrendingUp,
      title: "5+",
      subtitle: "Anos de Mercado",
      description: "Experiência sólida em marketing digital"
    },
    {
      icon: Target,
      title: "95%+",
      subtitle: "Taxa de Satisfação",
      description: "Clientes que renovam nossos contratos"
    }
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Resultados que <span className="text-ye7-blue">comprovam</span> nossa expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Números reais de uma trajetória sólida no mercado digital
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-ye7-blue/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-ye7-blue" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold text-ye7-blue mb-2">
                    {stat.title}
                  </CardTitle>
                  <p className="text-lg font-semibold text-gray-900">{stat.subtitle}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-ye7-blue to-ye7-cyan rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para ser o próximo case de sucesso?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Junte-se aos mais de 50 clientes que já transformaram seus negócios com nossa metodologia única
            </p>
            <a
              href="https://wa.me/5531998127121"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-ye7-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Quero ser o próximo
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
