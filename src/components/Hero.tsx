
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-ye7-cyan/10 via-white to-ye7-blue/10 pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-ye7-blue/10 rounded-full text-ye7-blue text-sm font-medium">
                <Target className="w-4 h-4 mr-2" />
                Atendimento Limitado de Clientes
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Serviço <span className="text-ye7-blue">único</span>,
                <br />
                totalmente <span className="text-ye7-cyan">diferente</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Entendemos à fundo o seu negócio desde o marketing até o comercial. 
                Uma abordagem estratégica que vai além das agências tradicionais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-ye7-blue hover:bg-ye7-blue/90 text-white group"
              >
                Quero conhecer a Ye7
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-ye7-blue text-ye7-blue hover:bg-ye7-blue hover:text-white"
              >
                Ver resultados
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-ye7-blue">50+</div>
                <div className="text-sm text-gray-600">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ye7-blue">R$ 3M+</div>
                <div className="text-sm text-gray-600">Investidos em Anúncios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ye7-blue">4+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="absolute inset-0 bg-gradient-to-r from-ye7-blue to-ye7-cyan rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <img 
                src="/lovable-uploads/13c53dd1-f9bf-44be-93f9-4a35dc971566.png" 
                alt="Ye7 Brand" 
                className="w-full h-64 object-contain mb-6"
              />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-ye7-blue" />
                    <span className="font-medium">Atendimento Limitado</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-ye7-cyan" />
                    <span className="font-medium">Consultoria Completa</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
