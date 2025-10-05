import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
  Zap,
  Settings,
  Heart,
  CheckCircle,
  Menu,
  X
} from 'lucide-react'
import logoImage from './assets/minhafoto1.jpg'
import backgroundImage from './assets/background_blurred.png'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden glow-effect" aria-hidden>
                <img
                  src={logoImage}
                  alt="Nexus Reparo Logo"
                  className="w-full h-full object-cover"
                  width={48}
                  height={48}
                  loading="lazy"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white-glow">NEXUS REPARO</h1>
                <p className="text-sm text-white">Assistência Técnica Médica</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Main navigation">
              <a href="#services" className="text-white hover:text-white transition-colors">Serviços</a>
              <a href="#team" className="text-white hover:text-white transition-colors">Nosso Trabalho</a>
              <a href="#contact" className="text-white hover:text-white transition-colors">Contato</a>
            </nav>

            <div className="flex items-center space-x-3">
              <div className="hidden md:block">
                <Button className="btn-cyber py-3 px-4 min-h-[44px]">
                  <Phone className="w-4 h-4 mr-2" />
                  Contato
                </Button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuOpen}
                className="md:hidden p-2.5 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white text-white"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <div className="md:hidden mt-4" role="menu" aria-label="Mobile navigation">
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#services" onClick={closeMenu} className="block px-3 py-3 rounded text-white hover:bg-white/5">Serviços</a>
                </li>
                <li>
                  <a href="#team" onClick={closeMenu} className="block px-3 py-3 rounded text-white hover:bg-white/5">Nosso Trabalho</a>
                </li>
                <li>
                  <a href="#contact" onClick={closeMenu} className="block px-3 py-3 rounded text-white hover:bg-white/5">Contato</a>
                </li>
                <li>
                  <Button className="btn-cyber w-full mt-2 py-3" onClick={closeMenu}>
                    <Phone className="w-4 h-4 mr-2" />
                    Contato
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.85)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
              <Badge className="mb-6 bg-accent/20 text-white border-accent/30">
                <Zap className="w-3 h-3 mr-1" />
                Tecnologia Médica Avançada
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white-glow">
                Soluções tecnológicas personalizadas para inovação e crescimento
              </h1>

              <p className="text-base md:text-xl text-white mb-8 max-w-3xl mx-auto">
                Na Nexus Reparo, capacitamos você com desenvolvimento de assistência técnica de última geração e personalizada, feito sob medida para galvanizar e impulsionar seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-cyber text-lg px-6 py-3 min-h-[44px]">
                  <Settings className="w-5 h-5 mr-2" />
                  Nosso trabalho
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>

                <Button size="lg" variant="outline" className="hover-lift border-primary/30 text-lg px-6 py-3 min-h-[44px] text-white">
                  <Users className="w-5 h-5 mr-2" />
                  Entre em contato
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white-glow">Nossos Serviços</h2>
              <p className="text-base md:text-xl text-white max-w-2xl mx-auto">
                Oferecemos soluções completas em assistência técnica para equipamentos médicos,
                com foco na qualidade, segurança e conformidade regulatória.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={service.title || index} className="cyber-border hover-lift group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-white group-hover:animate-pulse-glow">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-medium card-title text-white">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 card-description text-white">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-white" />
                          <span className="text-sm text-white">{feature}</span>
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
        <section id="team" className="py-20 px-4 sm:px-6 circuit-pattern">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white-glow">Alguns dos nossos melhores trabalhos</h2>
              <p className="text-base md:text-xl text-white mb-8 max-w-2xl mx-auto">
                Somos uma empresa de assistência técnica que trabalha com clientes de diversos setores para fornecer reparos personalizados, desenvolvimento de soluções e manutenção para equipamentos médicos e instrumentos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="metal-surface hover-lift">
                <CardHeader>
                  <Wrench className="w-10 h-10 text-white mb-4" />
                  <CardTitle className="text-lg font-medium card-title text-white">Reparo de Ventiladores Pulmonares</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base card-description text-white">Especialistas no diagnóstico e reparo de ventiladores pulmonares, garantindo a segurança e funcionalidade para hospitais e clínicas.</CardDescription>
                </CardContent>
              </Card>

              <Card className="metal-surface hover-lift">
                <CardHeader>
                  <Cpu className="w-10 h-10 text-white mb-4" />
                  <CardTitle className="text-lg font-medium card-title text-white">Manutenção de Monitores Cardíacos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base card-description text-white">Serviços completos de manutenção preventiva e corretiva para monitores cardíacos, assegurando leituras precisas e confiáveis.</CardDescription>
                </CardContent>
              </Card>

              <Card className="metal-surface hover-lift">
                <CardHeader>
                  <Stethoscope className="w-10 h-10 text-white mb-4" />
                  <CardTitle className="text-lg font-medium card-title text-white">Calibração de Equipamentos de Imagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base card-description text-white">Calibração e ajuste de equipamentos de imagem médica, como ultrassons e raios-X, para otimizar a qualidade diagnóstica.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white-glow">Entre em Contato</h2>
              <p className="text-base md:text-xl text-white max-w-2xl mx-auto">
                Precisa de assistência técnica para seus equipamentos médicos?
                Entre em contato conosco para uma avaliação especializada.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="cyber-border hover-lift text-center">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Telefone</h3>
                  <p className="text-white">+55 (11) 9999-9999</p>
                </CardContent>
              </Card>

              <Card className="cyber-border hover-lift text-center">
                <CardContent className="pt-6">
                  <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-white">E-mail</h3>
                  <p className="text-white">contato@nexusreparo.com.br</p>
                </CardContent>
              </Card>

              <Card className="cyber-border hover-lift text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Localização</h3>
                  <p className="text-white">São Paulo, SP</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="btn-cyber text-lg px-6 py-3 min-h-[44px]">
                <Award className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 h-8 rounded overflow-hidden">
              <img
                src={logoImage}
                alt="Nexus Reparo"
                className="w-full h-full object-cover"
                width={32}
                height={32}
                loading="lazy"
              />
            </div>
            <span className="text-xl font-bold text-white-glow">NEXUS REPARO</span>
          </div>
          <p className="text-white mb-4">
            Assistência técnica especializada em equipamentos médicos e instrumentos de precisão.
          </p>
          <p className="text-sm text-white">
            © 2025 Nexus Reparo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
