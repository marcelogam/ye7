import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-4 flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-[-1] w-full h-full object-cover"
        // Adicione um pôster para carregar enquanto o vídeo não inicia
        poster="/images/hero-backgroung.avif" 
      >
        {/* Vídeo para telas móveis (até 767px de largura) */}
        <source src="/video/mobile-hero-background.mp4" type="video/mp4" media="(max-width: 767px)" />
        
        {/* Vídeo para telas maiores (desktop) - será o fallback */}
        <source src="/video/hero-background.mp4" type="video/mp4" />
        
        Seu navegador não suporta a tag de vídeo.
      </video>
      
      <div className="absolute inset-0 bg-ye7-blue/50 z-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ... todo o seu conteúdo (coluna da esquerda) permanece aqui ... */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
                <Target className="w-4 h-4 mr-2" />
                Limitamos atendimentos para oferecer excelência.
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Serviço <span className="text-white">único</span>,
                <br />
                totalmente <span className="text-ye7-cyan">diferente</span>
              </h1>
              
              <p className="text-xl text-white leading-relaxed">
                Entendemos à fundo o seu negócio desde o marketing até o comercial. 
                Uma abordagem estratégica que vai além das agências tradicionais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row">
              <a
                href="https://wa.me/5531998127121"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <Button 
                  size="lg" 
                  className="w-fit bg-white hover:bg-white text-ye7-blue"
                >
                  Quero conhecer a Ye7
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-white">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">R$ 3M+</div>
                <div className="text-sm text-white">Investidos em Anúncios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-white">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* ... todo o seu conteúdo (coluna da direita) permanece aqui ... */}
          <div className="relative animate-slide-in">
            <div className="absolute inset-0 bg-gradient-to-r from-ye7-blue to-ye7-cyan rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-ye7-blue" />
                    <span className="font-medium">Atendimento Exclusivo</span>
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