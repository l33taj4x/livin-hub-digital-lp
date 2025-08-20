"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Edit3, TrendingUp, Lightbulb, Target, MessageCircle, ArrowRight, Star, Focus, Send, Smartphone, Monitor, ChartGantt, Briefcase, BriefcaseBusiness, Paperclip, ChartSpline } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"

import { LogoCarousel } from "@/app/components/logo-carousel"

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="hidden sm:block w-24 sm:w-16 md:w-20 lg:w-26 xl:w-32">
              <img src="/livin-logo-branca.png" alt="livin logo branca" className="w-full h-auto" />
            </div>
          <div className="hidden md:flex items-center space-x-8 text-white text-md">
            <ScrollLink
              to="services"
              smooth={true}
              duration={1200}
              offset={-80}
              className="hover:text-[#068C88] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Serviços
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={1200}
              offset={-80}
              className="hover:text-[#068C88] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Portfólio
            </ScrollLink>
            <ScrollLink
              to="garanta-sua-data"
              smooth={true}
              duration={1200}
              offset={-80}
              className="hover:text-[#068C88] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Contato
            </ScrollLink>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#015C54] via-[#068C88] to-[#015C54] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#FC7306]/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#FAA24E]/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-small">
              Somos o hub entre você e o <span className="text-[#FC7306] animate-pulse">digital.</span>
            </h1>
            <p className="text-1xl mb-8 text-white/80 max-w-md">
              Especialistas em Gestão de Redes Sociais e Cobertura de Eventos
            </p>
            <Button className="bg-[#FC7306] hover:bg-[#FAA24E] cursor-pointer text-white px-8 py-5 rounded-full text-base font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Quero fazer parte do hub
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          <div className="relative">
            <div className="relative w-120 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-64 sm:h-60 md:h-80 lg:h-[20rem] xl:h-[35rem] mx-auto">
              <img
                src="/image-hero.jpg"
                alt="Hero Image"
                className="w-full h-full object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center items-center">
            <img
              src="/pessoal-livin-hub.jpg"
              alt="Equipe Livin Hub Digital"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>
          {/* Texto à direita */}
          <div className="text-center md:text-left mb-16 md:mb-0">
            <h2 className="text-4xl font-bold text-[#015C54] mb-4">Prazer, somos a Livin Hub Digital!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto md:mx-0">
              Nascemos em 2019 como Agência Ilumi, e desde o início acreditamos que estar no digital é muito mais que postar nas redes sociais. É entender o negócio do cliente, falar a sua língua e se tornar parte da sua jornada.
              Em seis anos, atendemos mais de 300 marcas no Brasil e nos Estados Unidos. Crescemos, expandimos e descobrimos que o que fazemos vai muito além de ser “apenas” uma agência.
              <br /><br />
              Hoje, como <span className="font-bold text-[#015C54]">Livin Hub Digital</span>, assumimos nossa verdadeira essência: ser o ponto central que conecta estratégia, conteúdo, branding, design, tráfego e eventos em um só lugar — o seu hub digital.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#015C54] to-[#068C88] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#FC7306]/10 rounded-full animate-bounce"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-[#FC7306] mb-2 group-hover:text-[#FAA24E] transition-colors duration-300">
                +300
              </div>
              <p className="text-white/80 group-hover:text-white transition-colors duration-300">Empresas transformadas</p>
            </div>
            <div className="group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-[#FC7306] mb-2 group-hover:text-[#FAA24E] transition-colors duration-300">
                +6
              </div>
              <p className="text-white/80 group-hover:text-white transition-colors duration-300">Anos de mercado</p>
            </div>
            <div className="group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-[#FC7306] mb-2 group-hover:text-[#FAA24E] transition-colors duration-300">
                Presença
              </div>
              <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                Nacional e Internacional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-[#015C54] to-[#068C88] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-24 h-24 bg-[#FC7306]/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">O que nossos clientes dizem</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-white">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FC7306] fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "A Livin transformou completamente nossa presença digital. Em apenas 3 meses, triplicamos nosso
                  engajamento e vendas!"
                </p>
                <div className="font-semibold">Mariana Silva</div>
                <div className="text-white/70">CEO, Boutique Elegance</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-white">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FC7306] fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "Equipe super criativa e atenciosa. Finalmente encontramos uma agência que entende nosso tom de voz e
                  entrega resultados."
                </p>
                <div className="font-semibold">Rafael Mendes</div>
                <div className="text-white/70">Diretor de Marketing</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#015C54] mb-4">Por que escolher a Livin Hub Digital?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mais do que uma agência, somos o hub que conecta estratégia, criatividade e execução para que a sua marca tenha presença real e resultados consistentes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                  <Lightbulb className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#015C54] mb-4 group-hover:text-[#068C88] transition-colors duration-300">
                  Estratégia Integrada
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Somos um hub que conecta redes sociais, branding, design, vídeo, tráfego e eventos em um único ecossistema criativo.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#015C54] mb-4 group-hover:text-[#068C88] transition-colors duration-300">
                  Atendimento humano
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Entramos no seu negócio para entender de verdade suas necessidades e criar soluções personalizadas.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                  <Target className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#015C54] mb-4 group-hover:text-[#068C88] transition-colors duration-300">
                  Experiência e resultado
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  +300 marcas transformadas em 6 anos de atuação no Brasil e nos EUA, com entregas criativas e de alto nível.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 bg-gradient-to-r from-[#015C54] to-[#068C88] relative bg-cover bg-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Como a Livin pode te ajudar</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Conheça nosso ecossistema criativo e estratégico, onde marcas ganham voz, presença e movimento.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#015C54] group-hover:text-[#068C88] transition-colors duration-300 mb-6">
                Gestão de Redes Sociais
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Cuidamos de todo o processo das suas redes: planejamento estratégico, criação de conteúdo, design, legendas, agendamento e acompanhamento de resultados. Tudo para garantir que sua marca tenha uma presença consistente, profissional e alinhada aos seus objetivos.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                <Focus className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#015C54] group-hover:text-[#068C88] transition-colors duration-300 mb-6">
                Fotografia e Audiovisual
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Registramos fotos e vídeos profissionais para fortalecer a presença digital da sua marca. Trabalhamos com os melhores equipamentos, incluindo drone, para capturar ângulos únicos e transmitir a essência do seu negócio. Entregamos imagens e vídeos prontos para engajar, gerar conexão e contar histórias de forma estratégica.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                <Smartphone className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#015C54] group-hover:text-[#068C88] transition-colors duration-300 mb-6">
                Cobertura de Eventos & Storymaker
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6">
                Registramos seu evento com um olhar estratégico. Produzimos fotos e vídeos em tempo real (stories, reels, bastidores e highlights) que conectam e ampliam seu alcance. Com equipamentos profissionais, incluindo drone, e edição ágil, você publica no mesmo dia e mantém a audiência aquecida.
              </p>
              <a
                href="https://instagram.com/agenciailumi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-[#FC7306] hover:bg-[#FAA24E] transition-all duration-300 shadow-lg hover:scale-105"
                style={{ textDecoration: "none" }}
              >
                Veja nosso portfólio
              </a>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                <Monitor className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#015C54] group-hover:text-[#068C88] transition-colors duration-300">                
                Identidade Visual
              </h3>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                <ChartGantt className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#015C54] group-hover:text-[#068C88] transition-colors duration-300">                
                Diagnóstico de Perfil
              </h3>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                <BriefcaseBusiness className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#015C54] group-hover:text-[#068C88] transition-colors duration-300">                
                Google Meu Negócio
              </h3>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                <Paperclip className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#015C54] group-hover:text-[#068C88] transition-colors duration-300">                
                Papelaria Criativa
              </h3>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                <ChartSpline className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#015C54] group-hover:text-[#068C88] transition-colors duration-300">                
                Tráfego Pago
              </h3>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#FC7306]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FC7306]/20 group-hover:scale-110 transition-all duration-300">
                <Lightbulb className="w-8 h-8 text-[#FC7306] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#015C54] group-hover:text-[#068C88] transition-colors duration-300">                
                Criação de site e landing page
              </h3>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Grid de Logos à esquerda */}
          <LogoCarousel />
          {/* Texto à direita */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#015C54] mb-4">Marcas que fazem parte do nosso Hub</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Temos orgulho de conectar nossa <span className="font-bold text-[#015C54]">criatividade</span> e <span className="font-bold text-[#015C54]">estratégia</span> a empresas que entendem o poder de uma presença digital autêntica.
              </p>
              <p>
                Valorizamos marcas que usam as redes para criar <span className="font-bold text-[#FC7306]">conexões reais</span>, fortalecer autoridade e gerar impacto.
              </p>
              <p>
                Nossos clientes confiam em soluções pensadas sob medida, alinhadas às suas metas e à identidade única de cada negócio.
              </p>
              <p>
                Aqui, cada estratégia nasce para refletir quem eles são e para levar a mensagem certa às pessoas certas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="" className="py-20 bg-gradient-to-r from-[#015C54] to-[#068C88] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#FC7306]/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-16 right-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-10 right-1/3 w-16 h-16 bg-[#068C88]/10 rounded-full animate-ping"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
             Por que escolher a <span className="font-bold text-[#FC7306]">Livin Hub Digital</span> para cuidar da sua marca nas redes sociais?</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                A Livin não é só uma agência. Somos um hub criativo e estratégico que entra de verdade no seu negócio para entender, construir e transformar.
              </p>
              <p className="text-white/80 mt-4 max-w-2xl mx-auto">
                Enquanto você foca no que faz de melhor, nós cuidamos da presença digital da sua marca nas redes sociais ao branding, do conteúdo a estratégia com estratégia, consistência e criatividade.
              </p>
            <ul className="max-w-2xl mx-auto flex flex-col gap-6 mt-6">
              <li className="flex flex-col items-center justify-center bg-white/10 rounded-full px-6 py-4 text-white font-semibold text-lg shadow hover:bg-[#068C88]/20 transition-all duration-300">
                <div className="flex items-center">
                  <span className="text-[#FC7306] mr-3">•</span> Criamos conteúdo que conecta, engaja e gera autoridade.
                </div>
              </li>
              <li className="flex flex-col items-center justify-center bg-white/10 rounded-full px-6 py-4 text-white font-semibold text-lg shadow hover:bg-[#068C88]/20 transition-all duration-300">
                <div className="flex items-center">
                  <span className="text-[#FC7306] mr-3">•</span> Unimos design, vídeo, eventos e performance num só ecossistema.
                </div>
              </li>
              <li className="flex flex-col items-center justify-center bg-white/10 rounded-full px-6 py-4 text-white font-semibold text-lg shadow hover:bg-[#068C88]/20 transition-all duration-300">
                <div className="flex items-center">
                  <span className="text-[#FC7306] mr-3">•</span> Planejamos ações com objetivos claros e mensuráveis.
                </div>
              </li>
              <li className="flex flex-col items-center justify-center bg-white/10 rounded-full px-6 py-4 text-white font-semibold text-lg shadow hover:bg-[#068C88]/20 transition-all duration-300">
                <div className="flex items-center">
                  <span className="text-[#FC7306] text-left mr-3">•</span> E, acima de tudo, atendemos pessoas com escuta ativa e soluções personalizadas.
                </div>
              </li>
            </ul>
          </div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#FC7306] mb-4">
              Já são mais de 300 marcas impactadas em 6 anos de atuação no Brasil e nos EUA. E a próxima pode ser a sua.
            </h3>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-white">
      </section>

      <section className="py-20 bg-gradient-to-r from-[#015C54] to-[#068C88] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-[#FC7306]/10 rounded-full animate-bounce"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para dar o próximo passo no digital?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Vamos juntos criar uma presença que conecta, engaja e gera resultados reais para a sua marca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5548998604665?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Livin%20Hub%20Digital" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#015C54] px-8 py-3 rounded-full text-base font-medium bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                Chame no WhatsApp<Send />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-[#015C54] mb-6">Seu evento merece viver além do dia em que acontece.</h2>
          <p className="text-lg text-gray-600  mb-8 max-w-2xl mx-auto">
            Captamos cada momento com um olhar estratégico, transformando emoções em conteúdo que conecta e gera lembranças.
          </p>
          <div className="flex justify-center mt-8">
            <a href="https://wa.me/5548998604665?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20cobertura%20de%20evento%20e%20storymaker%20da%20Livin" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-[#FC7306] hover:bg-[#FAA24E] text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                Garanta a sua data <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <img
                src="/livin-logo-branca.png"
                alt="Livin Logo"
                className="mb-2 w-32 h-auto"
              />
              <p className="text-gray-400 text-sm mb-1">
                Somos o ponto de conexão entre marcas e o mundo digital.
              </p>
              <p className="text-gray-400 text-sm">© 2025 Livin. Todos os direitos reservados.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#068C88] transition-all duration-300 hover:translate-x-1">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#068C88] transition-all duration-300 hover:translate-x-1">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#068C88] transition-all duration-300 hover:translate-x-1">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#068C88] transition-all duration-300 hover:translate-x-1">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#068C88] transition-all duration-300 hover:translate-x-1">
                    Gestão de Redes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#068C88] transition-all duration-300 hover:translate-x-1">
                    Criação de Conteúdo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#068C88] transition-all duration-300 hover:translate-x-1">
                    Estratégias de Crescimento
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#068C88] transition-all duration-300 hover:translate-x-1">
                    Consultoria
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:livinhubdigital@gmail.com">livinhubdigital@gmail.com</a></li>
                <li>+55 (48) 99860-4665</li>
                <li className="pt-2">
                  <div className="flex space-x-3">
                    <a href="https://instagram.com/agenciailumi" className="hover:text-[#068C88] transition-all duration-300 hover:scale-110">
                      Instagram
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
