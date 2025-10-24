
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, TrendingUp, Users, Target } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Marcelo Duarte",
      role: "Co-fundador & Especialista em Tráfego",
      experience: "5+ anos no mercado",
      description: "Especialista em marketing com experiência em diversos nichos: E-commerces, negócios locais, imobiliárias, construtoras e muito mais.",
      image: "/images/e55cccc1-5c15-436f-8a9a-28d07bf12b37.png",
      stats: [
        { label: "Clientes Atendidos", value: "50+" },
        { label: "Investido em Anúncios", value: "R$ 3M+" },
        { label: "Anos de Experiência", value: "5+" }
      ]
    },
    {
      name: "Marcelo Augusto",
      role: "Co-fundador & Desenvolvedor full stack",
      experience: "2+ ano no mercado",
      description: "Desenvolvedor de aplicativos e sites dinâmicos e responsivos com design moderno.",
      image: "/images/imagemPerfilMarceloA.png",
      stats: [
        { label: "Sites criados", value: "15+" },
        { label: "Aplicativos desenvolvidos", value: "5+" },
        { label: "Anos de Experiência", value: "2+" }
      ]
    }
  ];

  const differentials = [
    {
      icon: Users,
      title: "Atendimento Exclusivo",
      description: "Trabalhamos com poucos clientes para garantir qualidade máxima e atenção personalizada",
      gradient: "from-ye7-blue to-ye7-cyan"
    },
    {
      icon: Target,
      title: "Abordagem Completa",
      description: "Não somos apenas uma agência de tráfego. Entendemos seu negócio do marketing ao comercial",
      gradient: "from-ye7-cyan to-ye7-blue"
    },
    {
      icon: TrendingUp,
      title: "Foco em Resultados",
      description: "Cada estratégia é desenvolvida com base em dados e focada no crescimento sustentável",
      gradient: "from-ye7-blue via-ye7-cyan to-ye7-blue"
    },
    {
      icon: Award,
      title: "Experiência Diversificada",
      description: "Já trabalhamos com todos os tipos de negócios e sabemos o que funciona em cada nicho",
      gradient: "from-ye7-cyan to-ye7-blue"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-ye7-cyan/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-ye7-blue to-ye7-cyan bg-clip-text text-transparent mb-4">
            Conheça quem está por trás da <span className="text-ye7-blue">ye7</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma dupla experiente que combina expertise em marketing e desenvolvimento web para entregar resultados excepcionais
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {founders.map((founder, index) => (
            <Card key={index} className="border-none shadow-2xl bg-gradient-to-br from-white to-ye7-cyan/5 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ye7-blue to-ye7-cyan"></div>
              <CardHeader className="pb-4">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-gradient-to-r from-ye7-blue to-ye7-cyan shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-ye7-blue to-ye7-cyan rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900 mb-1">{founder.name}</CardTitle>
                    <p className="text-ye7-blue font-medium mb-1">{founder.role}</p>
                    <p className="text-sm text-gray-500">{founder.experience}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {founder.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  {founder.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center p-4 bg-gradient-to-br from-ye7-blue/5 to-ye7-cyan/10 rounded-xl border border-ye7-cyan/20">
                      <div className="text-lg font-bold bg-gradient-to-r from-ye7-blue to-ye7-cyan bg-clip-text text-transparent">{stat.value}</div>
                      <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentials Section */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Por que escolher a <span className="bg-gradient-to-r from-ye7-cyan to-ye7-blue bg-clip-text text-transparent">ye7</span>?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="text-center space-y-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Niche Experience */}
        <div className="bg-ye7-blue rounded-3xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-ye7-blue"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Experiência em Todos os Nichos</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto opacity-95">
              E-commerces, negócios locais, imobiliárias, construtoras e muito mais. 
              Não importa o seu segmento, temos a experiência necessária para fazer seu negócio crescer.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {["E-commerce", "Negócios Locais", "Imobiliárias", "Construtoras", "Infoprodutos", "Serviços", "Varejo"].map((niche, index) => (
                <span key={index} className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors duration-300">
                  {niche}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
