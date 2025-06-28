
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Vamos conversar sobre o seu <span className="text-ye7-blue">projeto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos acelerar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale com a nossa equipe
              </h3>
              <p className="text-gray-600 mb-8">
                Estamos prontos para entender o seu negócio e apresentar uma proposta personalizada. 
                Lembre-se: trabalhamos com atendimento limitado para garantir a qualidade máxima.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ye7-blue/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-ye7-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">Resposta em até 2 horas</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ye7-blue/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-ye7-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">E-mail</h4>
                  <p className="text-gray-600">contato@ye7.com.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ye7-blue/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-ye7-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Telefone</h4>
                  <p className="text-gray-600">Ligação direta com os founders</p>
                </div>
              </div>
            </div>

            <div className="bg-ye7-blue/5 border border-ye7-blue/20 rounded-lg p-6">
              <h4 className="font-semibold text-ye7-blue mb-2">Atendimento Limitado</h4>
              <p className="text-gray-700 text-sm">
                Trabalhamos apenas com um número limitado de clientes por vez. 
                Isso garante que cada projeto receba a atenção e dedicação que merece.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Solicite uma conversa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">WhatsApp</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Conte sobre seu projeto</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 w-full px-3 py-2 border border-input rounded-md text-sm ring-offset-background placeholder-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Descreva brevemente seu negócio e objetivos..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-ye7-blue hover:bg-ye7-blue/90 text-white"
                  size="lg"
                >
                  Enviar solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
