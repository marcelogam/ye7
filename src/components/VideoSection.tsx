
const VideoSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ye7-blue via-ye7-blue/95 to-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ye7-blue/80 via-transparent to-ye7-blue/80"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Transformamos <span className="text-ye7-cyan">Negócios</span>
          </h2>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Com estratégias únicas e atendimento personalizado, 
            levamos sua empresa ao próximo nível de crescimento
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-ye7-cyan">+3M</div>
              <div className="text-sm opacity-80">Investidos em Anúncios</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ye7-cyan">+50</div>
              <div className="text-sm opacity-80">Clientes Atendidos</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ye7-cyan">4+</div>
              <div className="text-sm opacity-80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
