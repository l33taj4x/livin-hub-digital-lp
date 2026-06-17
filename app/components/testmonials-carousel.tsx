import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
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

  // Autoplay mais lento (tempo de leitura) e que pausa ao passar o mouse, retomando depois.
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true, watchDrag: false }}
      plugins={[autoplay.current]}
      className="w-full max-w-7xl mx-auto"
    >
      {/* py-2 dá respiro vertical e evita que o ring/borda seja recortado pelo viewport */}
      <CarouselContent className="-ml-4 py-2">
        {testimonials.map((t, i) => (
          <CarouselItem
            key={i}
            className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
          >
            <Card className="group h-full rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm transition-colors duration-300 hover:border-brand-active/40 hover:bg-white/[0.1]">
              <CardContent className="flex h-full flex-col p-7 text-white">
                {/* aspas decorativas */}
                <Quote
                  className="mb-4 h-8 w-8 shrink-0 text-brand-active/70"
                  fill="currentColor"
                  aria-hidden="true"
                />

                {/* avaliação */}
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-current text-brand-lime"
                    />
                  ))}
                </div>

                {/* depoimento — limitado para uniformizar a altura dos cards */}
                <p className="mb-8 line-clamp-[7] text-[15px] leading-relaxed text-white/85">
                  {t.text.replace(/^[\s"“]+|[\s"”]+$/g, "")}
                </p>

                {/* autor — fixo no rodapé, nunca some */}
                <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-5">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-brand-active/40"
                  />
                  <div className="min-w-0">
                    <div className="truncate font-semibold leading-tight">
                      {t.name}
                    </div>
                    <div className="truncate text-sm text-white/60">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:flex" />
      <CarouselNext className="hidden border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:flex" />
    </Carousel>
  );
}

export { TestimonialsCarousel };
