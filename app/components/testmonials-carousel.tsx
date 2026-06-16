import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useRef } from "react";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      text: `"Quero agradecer e parabenizar a equipe da Ilumi pelo trabalho que vem sendo feito com as redes sociais. Vocês demonstram muito comprometimento, estão sempre abertas a novas ideias e prezam pela qualidade em cada detalhe, especialmente na edição dos vídeos. Gosto muito da forma dinâmica como conduzem as gravações, sempre buscando tornar mais leve e fluida a rotina de criação de conteúdo. Isso faz toda a diferença no resultado final. Sigamos juntos evoluindo!"`,
      name: "Elton Tibes",
      role: "Sócio Ponto Pronto e Mentor",
      photo: "/depoimentos/elton.jpg",
    },
    {
      text: `"A equipe da Ilumi é extremamente solícita e organizada, com um sistema de trabalho único e muito eficiente. Conseguiram entender profundamente nossos produtos e encontrar a melhor forma de apresentá-los aos clientes, algo que não é nada simples. O resultado é impecável, desde o design e a copy até os vídeos. Estamos muito satisfeitos e confiantes com o trabalho realizado."`,
      name: "Karol Godoi",
      role: "Rm Policarbonatos e Alanza Persianas",
      photo: "/depoimentos/karol.jpg",
    },
    {
      text: `"Preciso abrir o coração: a Agência Ilumi é muito mais do que uma parceira, é parte da minha empresa e da minha história.
              Elas cuidam do meu Instagram como se fosse delas, criam conteúdos lindos, produzem criativos cheios de personalidade e sempre chegam com ideias que parecem ler minha mente (e a do meu público também ).
              O melhor é que estão sempre por perto, seja para marcar uma reunião, trocar ideias ou ajustar algo no meio do caminho, tudo com agilidade e aquele toque de carinho que faz toda a diferença.
              São mais de 6 anos de parceria, muitas histórias, risadas, cafés e brainstorms que viraram grandes resultados.
              Hoje, não consigo imaginar meu negócio sem esse time brilhando ao meu lado."`,
      name: "Keila de Bem",
      role: "Corretora de Imóveis",
      photo: "/depoimentos/keila.jpg",
    },
    {
      text: `"Quando conheci a Ilumi, eu já sabia o que queria transmitir no Instagram… mas não sabia como fazer isso acontecer. Elas chegaram com um olhar sensível, estratégico e humano, cuidando do meu perfil como se fosse delas.
              Elas mergulharam na minha história, entenderam meu público, e conseguiram me entregar um Instagram que me representa de verdade.

              Elas não apenas cuidam, elas sentem. E essa é a diferença que transforma trabalho em arte. Poder contar com essas fadas incríveis e talentosas é ter certeza de que cada detalhe do meu Instagram carrega verdade, autenticidade e propósito."`,
      name: "Anita Freire",
      role: "Empresária e Infroprodutora",
      photo: "/depoimentos/anita.jpg",
    },
    {
      text: `"A agência nos atende em todos os quesitos, o planejamento e criação de conteúdos é maravilhoso, era o maior problema que tinha com relação ao nosso MKT, desde que contratamos os serviços da Ilumi, nossa página cresceu e se desenvolveu e cresceu muito bem. Além de atenciosas, compreensivas e flexíveis. Sou muito grata pela parceria que temos firmado nesse quase um ano juntas."`,
      name: "Paloma Zaze's",
      role: "Zaze's Negócios Imobiliários",
      photo: "/depoimentos/zazes.jpg",
    },
    {
      text: `"Eu amo trabalhar com a Ilumi, gosto da parceria, da rapidez, do profissionalismo e da leveza da equipe Ilumi."`,
      name: "Fabiana Martins",
      role: "Zais Semijoias",
      photo: "/depoimentos/zais.jpg",
    },
  ];

  const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[autoplay.current]}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((t, i) => (
          <CarouselItem
            key={i}
            className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 
                             transition-all duration-300 hover:scale-105 h-full">
              <CardContent className="p-8 text-white flex flex-col h-full">
                {/* estrelas */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#d8f700] fill-current" />
                  ))}
                </div>

                {/* texto */}
                <p className="text-lg mb-6 italic">{t.text}</p>

                {/* foto + nome + cargo */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#227bed]/50"
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-white/70 text-sm">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}

export { TestimonialsCarousel };