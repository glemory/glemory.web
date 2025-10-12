import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  Wrench, 
  Stethoscope, 
  Cpu, 
  Shield, 
  Users, 
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Settings,
  Heart,
  CheckCircle
} from 'lucide-react'
import logoImage from './assets/minhafoto1.jpg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Equipamentos de Diagnóstico",
      description: "Manutenção e calibração de equipamentos de diagnóstico médico, incluindo monitores, eletrocardiógrafos e oxímetros.",
      features: ["Calibração precisa", "Testes de segurança", "Certificação técnica"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Instrumentos Cirúrgicos",
      description: "Reparo especializado em instrumentos cirúrgicos eletrônicos e equipamentos de suporte à vida.",
      features: ["Reparo especializado", "Peças originais", "Garantia estendida"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Sistemas Eletrônicos",
      description: "Diagnóstico e reparo de sistemas eletrônicos complexos, placas de circuito e componentes digitais.",
      features: ["Diagnóstico avançado", "Soldagem SMD", "Programação de firmware"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Certificação e Compliance",
      description: "Certificação técnica e adequação às normas de segurança médica nacionais e internacionais.",
      features: ["Normas ANVISA", "IEC 60601", "Documentação completa"]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container-minimal">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img 
                  src={logoImage} 
                  alt="Nexus Reparo Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-light text-white">NEXUS REPARO</h1>
                <p className="text-sm text-minimal-muted font-light">Assistência Técnica Médica</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-gray-300 transition-colors font-light">Serviços</a>
              <a href="#work" className="text-white hover:text-gray-300 transition-colors font-light">Nosso Trabalho</a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors font-light">Contato</a>
            </nav>
            <Button className="minimal-button-filled">
              <Phone className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-minimal pt-40 pb-20">
        <div className="container-minimal text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-extralight mb-8 text-white leading-tight">
              Soluções tecnológicas personalizadas para inovação e crescimento
            </h1>
            <p className="text-xl md:text-2xl text-minimal-muted mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Somos uma assistência técnica comprometida a oferecer manutenção de qualidade com transparência, ética, respeito, agilidade, eficiência e preço justo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="minimal-button-filled text-lg px-8 py-6">
                <Settings className="w-5 h-5 mr-2" />
                Nosso trabalho
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" className="minimal-button text-lg px-8 py-6">
                <Users className="w-5 h-5 mr-2" />
                Entre em contato
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-minimal">
        <div className="container-minimal">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light mb-6 text-white">Nossos Serviços</h2>
            <p className="text-xl text-minimal-muted max-w-2xl mx-auto font-light">
              Oferecemos soluções completas para seus instrumentos médicos!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="minimal-card hover-minimal">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-white/5 text-white">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-light card-title">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6 card-description">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-white" />
                        <span className="text-sm text-minimal-muted font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-minimal">
        <div className="container-minimal">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light mb-8 text-white">Alguns dos nossos melhores trabalhos</h2>
            <p className="text-xl text-minimal-muted mb-8 max-w-3xl mx-auto font-light">
              Somos uma empresa de assistência técnica que trabalha com clientes de diversos setores para fornecer reparos personalizados, desenvolvimento de soluções e manutenção para equipamentos médicos e instrumentos.
            </p>
            <p className="text-xl text-minimal-muted max-w-3xl mx-auto font-light">
              Não importa se você está procurando serviços de reparo, experiência do usuário (UX) em interfaces de equipamentos, configuração e instalação de equipamentos ou criação de soluções, nós somos os profissionais certos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="minimal-card hover-minimal">
              <CardHeader>
                <Wrench className="w-10 h-10 text-white mb-4" />
                <CardTitle className="text-lg font-light card-title">Reparo de Ventiladores Pulmonares</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base card-description">Especialistas no diagnóstico e reparo de ventiladores pulmonares, garantindo a segurança e funcionalidade para hospitais e clínicas.</CardDescription>
              </CardContent>
            </Card>
            <Card className="minimal-card hover-minimal">
              <CardHeader>
                <Cpu className="w-10 h-10 text-white mb-4" />
                <CardTitle className="text-lg font-light card-title">Manutenção de Monitores Cardíacos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base card-description">Serviços completos de manutenção preventiva e corretiva para monitores cardíacos, assegurando leituras precisas e confiáveis.</CardDescription>
              </CardContent>
            </Card>
            <Card className="minimal-card hover-minimal">
              <CardHeader>
                <Stethoscope className="w-10 h-10 text-white mb-4" />
                <CardTitle className="text-lg font-light card-title">Calibração de Equipamentos de Imagem</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base card-description">Calibração e ajuste de equipamentos de imagem médica, como ultrassons e raios-X, para otimizar a qualidade diagnóstica.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-minimal">
        <div className="container-minimal">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light mb-6 text-white">Entre em Contato</h2>
            <p className="text-xl text-minimal-muted max-w-2xl mx-auto font-light">
              Precisa de assistência técnica para seus equipamentos médicos? 
              Entre em contato conosco para uma avaliação especializada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="minimal-card hover-minimal text-center">
              <CardContent className="pt-8">
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-light mb-2 text-white">Telefone</h3>
                <p className="text-minimal-muted font-light">+55 (11) 9999-9999</p>
              </CardContent>
            </Card>
            
            <Card className="minimal-card hover-minimal text-center">
              <CardContent className="pt-8">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-light mb-2 text-white">E-mail</h3>
                <p className="text-minimal-muted font-light">contato@nexusreparo.com.br</p>
              </CardContent>
            </Card>
            
            <Card className="minimal-card hover-minimal text-center">
              <CardContent className="pt-8">
                <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-light mb-2 text-white">Localização</h3>
                <p className="text-minimal-muted font-light">São Paulo, SP</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="minimal-button-filled text-lg px-8 py-6">
              <Award className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container-minimal text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 h-8 rounded overflow-hidden">
              <img 
                src={logoImage} 
                alt="Nexus Reparo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-light text-white">NEXUS REPARO</span>
          </div>
          <p className="text-minimal-muted mb-4 font-light">
            Assistência técnica especializada em equipamentos médicos e instrumentos de precisão.
          </p>
          <p className="text-sm text-minimal-muted font-light">
            © 2025 Nexus Reparo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
