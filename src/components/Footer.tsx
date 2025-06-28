
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/51ec46dd-b307-4c55-bbb0-a3e3a71adaa4.png" 
              alt="Ye7 Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Agência de marketing digital com foco em resultados. 
              Atendimento limitado para garantir qualidade máxima.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tráfego Pago (Facebook & Google)</li>
              <li>Consultoria Comercial</li>
              <li>Automação WhatsApp</li>
              <li>Landing Pages</li>
              <li>Social Media</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contato@ye7.com.br</li>
              <li>WhatsApp: Disponível 24h</li>
              <li>Reuniões: Agendamento online</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ye7 - Agência de Marketing Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
