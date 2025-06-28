
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, TrendingUp, Users, Target } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Marcelo Duarte",
      role: "Co-fundador & Especialista em Tráfego",
      experience: "4+ anos no mercado",
      description: "Especialista em tráfego pago com experiência em diversos nichos: E-commerces, negócios locais, imobiliárias, construtoras e muito mais.",
      stats: [
        { label: "Clientes Atendidos", value: "50+" },
        { label: "Investido em Anúncios", value: "R$ 3M+" },
        { label: "Anos de Experiência", value: "4+" }
      ]
    },
    {
      name: "Deyvide Antunes",
      role: "Co-fundador & Especialista em Vendas",
      experience: "1+ ano no mercado",
      description: "Especialista em vendas focado em otimização de processos comerciais e conversão de leads em clientes.",
      stats: [
        { label: "Processos Otimizados", value: "30+" },
        { label: "Taxa de Conversão", value: "85%" },
        { label: "Vendas Consultivas", value: "200+" }
      ]
    }
  ];

  const differentials = [
    {
      icon: Users,
      title: "Atendimento Limitado",
      description: "Trabalhamos com poucos clientes para garantir qualidade máxima e atenção personalizada"
    },
    {
      icon: Target,
      title: "Abordagem Completa",
      description: "Não somos apenas uma agência de tráfego. Entendemos seu negócio do marketing ao comercial"
    },
    {
      icon: TrendingUp,
      title: "Foco em Resultados",
      description: "Cada estratégia é desenvolvida com base em dados e focada no crescimento sustentável"
    },
    {
      icon: Award,
      title: "Experiência Diversificada",
      description: "Já trabalhamos com todos os tipos de negócios e sabemos o que funciona em cada nicho"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Conheça quem está por trás da <span className="text-ye7-blue">Ye7</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma dupla experiente que combina expertise em tráfego pago e vendas para entregar resultados excepcionais
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {founders.map((founder, index) => (
            <Card key={index} className="border-l-4 border-l-ye7-blue shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{founder.name}</CardTitle>
                <p className="text-ye7-blue font-medium">{founder.role}</p>
                <p className="text-sm text-gray-500">{founder.experience}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {founder.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  {founder.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-ye7-blue">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentials Section */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Por que escolher a <span className="text-ye7-cyan">Ye7</span>?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-ye7-blue/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-ye7-blue" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Niche Experience */}
        <div className="bg-gradient-to-r from-ye7-blue to-ye7-cyan rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Experiência em Todos os Nichos</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            E-commerces, negócios locais, imobiliárias, construtoras e muito mais. 
            Não importa o seu segmento, temos a experiência necessária para fazer seu negócio crescer.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["E-commerce", "Negócios Locais", "Imobiliárias", "Construtoras", "Infoprodutos", "Serviços", "Varejo"].map((niche, index) => (
              <span key={index} className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                {niche}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
