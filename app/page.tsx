"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Users,
  Lightbulb,
  Target,
  MessageCircle,
  ArrowRight,
  Send,
  Focus,
  Smartphone,
  Monitor,
  ChartGantt,
  BriefcaseBusiness,
  Paperclip,
  ChartSpline,
  Rocket,
  Camera,
  CheckCircle2,
} from "lucide-react"
import { cn } from "@/lib/utils"

import { SiteHeader } from "@/app/components/site-header"
import { Reveal } from "@/app/components/reveal"
import { CountUp } from "@/app/components/count-up"
import { LogoCarousel } from "@/app/components/logo-carousel"
import { TestimonialsCarousel } from "@/app/components/testmonials-carousel"
import { PoweredByMindstorm } from "@/app/components/powered-by-mindstorm"

type IconType = React.ComponentType<{ className?: string }>

/* ── Helpers de UI compartilhados ─────────────────────────────────────────── */

function Eyebrow({
  children,
  tone = "blue",
}: {
  children: React.ReactNode
  tone?: "blue" | "light"
}) {
  return (
    <span
      className={cn(
        "mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold",
        tone === "light"
          ? "bg-white/10 text-brand-lime ring-1 ring-white/15"
          : "bg-brand-blue/10 text-brand-blue"
      )}
    >
      {children}
    </span>
  )
}

/** Blobs aurora suaves para o fundo das seções escuras. */
function AuroraDark() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-active/12 blur-3xl animate-aurora" />
      <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-brand-blue/12 blur-3xl animate-aurora [animation-delay:-7s]" />
    </div>
  )
}

/** Card claro (ícone + título + texto) — usado em "Por que a Livin". */
function FeatureCard({
  icon: Icon,
  title,
  children,
}: {
  icon: IconType
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
      <div
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-blue/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 ring-1 ring-brand-blue/15">
          <Icon className="h-7 w-7 text-brand-blue" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-brand-ink">{title}</h3>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  )
}

/** Card de serviço em destaque (escuro), com CTA opcional. */
function ServiceFeature({
  icon: Icon,
  title,
  desc,
  cta,
}: {
  icon: IconType
  title: string
  desc: string
  cta?: { href: string; label: string }
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1] hover:ring-white/20">
      <div
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-active/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
          <Icon className="h-6 w-6 text-white/90 transition-colors duration-300 group-hover:text-brand-lime" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-white/70">{desc}</p>
        {cta && (
          <a className="mt-auto" href={cta.href} target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition-all duration-300 hover:bg-brand-lime hover:text-brand-ink">
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        )}
      </div>
    </div>
  )
}

/** Tile compacto de serviço (escuro) — ícone + título. */
function ServiceTile({ icon: Icon, title }: { icon: IconType; title: string }) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl bg-white/[0.05] p-4 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1]">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
        <Icon className="h-5 w-5 text-white/90 transition-colors duration-300 group-hover:text-brand-lime" />
      </div>
      <span className="text-sm font-semibold text-white">{title}</span>
    </div>
  )
}

/* ── Dados ────────────────────────────────────────────────────────────────── */

const stats: (
  | { prefix: string; value: number; label: string }
  | { text: string; label: string }
)[] = [
  { prefix: "+", value: 300, label: "Empresas transformadas" },
  { prefix: "+", value: 6, label: "Anos de mercado" },
  { text: "Presença", label: "Nacional e Internacional" },
]

const featuredServices: {
  icon: IconType
  title: string
  desc: string
  cta?: { href: string; label: string }
}[] = [
  {
    icon: Users,
    title: "Gestão de Redes Sociais",
    desc: "Cuidamos de todo o processo das suas redes: planejamento estratégico, criação de conteúdo, design, legendas, agendamento e acompanhamento de resultados. Tudo para garantir que sua marca tenha uma presença consistente, profissional e alinhada aos seus objetivos.",
  },
  {
    icon: Focus,
    title: "Fotografia e Audiovisual",
    desc: "Registramos fotos e vídeos profissionais para fortalecer a presença digital da sua marca. Trabalhamos com os melhores equipamentos, incluindo drone, para capturar ângulos únicos e transmitir a essência do seu negócio. Entregamos imagens e vídeos prontos para engajar, gerar conexão e contar histórias de forma estratégica.",
  },
  {
    icon: Smartphone,
    title: "Cobertura de Eventos & Storymaker",
    desc: "Registramos seu evento com um olhar estratégico. Produzimos fotos e vídeos em tempo real (stories, reels, bastidores e highlights) que conectam e ampliam seu alcance. Com equipamentos profissionais, incluindo drone, e edição ágil, você publica no mesmo dia e mantém a audiência aquecida.",
    cta: { href: "https://instagram.com/livinhubdigital", label: "Veja nosso portfólio" },
  },
]

const otherServices: { icon: IconType; title: string }[] = [
  { icon: Monitor, title: "Identidade Visual" },
  { icon: ChartGantt, title: "Diagnóstico de Perfil" },
  { icon: BriefcaseBusiness, title: "Google Meu Negócio" },
  { icon: Paperclip, title: "Papelaria Criativa" },
  { icon: ChartSpline, title: "Tráfego Pago" },
  { icon: Lightbulb, title: "Criação de site e landing page" },
]

const whyChoose: { icon: IconType; title: string; desc: string }[] = [
  {
    icon: Lightbulb,
    title: "Estratégia Integrada",
    desc: "Somos um hub que conecta redes sociais, branding, design, vídeo, tráfego e eventos em um único ecossistema criativo.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento humano",
    desc: "Entramos no seu negócio para entender de verdade suas necessidades e criar soluções personalizadas.",
  },
  {
    icon: Target,
    title: "Experiência e resultado",
    desc: "+300 marcas transformadas em 6 anos de atuação no Brasil e nos EUA, com entregas criativas e de alto nível.",
  },
]

const whyLivinPoints = [
  "Criamos conteúdo que conecta, engaja e gera autoridade.",
  "Unimos design, vídeo, eventos e performance num só ecossistema.",
  "Planejamos ações com objetivos claros e mensuráveis.",
  "E, acima de tudo, atendemos pessoas com escuta ativa e soluções personalizadas.",
]

/* ── Página ───────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden bg-fixed bg-center bg-[length:100%_auto] pt-24 md:bg-cover"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-active/20 to-brand-ink" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-10 top-24 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl animate-aurora" />
          <div className="absolute bottom-24 right-10 h-72 w-72 rounded-full bg-brand-active/20 blur-3xl animate-aurora [animation-delay:-8s]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="animate-fade-in-up text-white">
            <Eyebrow tone="light">Agência de Marketing Digital</Eyebrow>
            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl">
              Somos o hub entre você e o{" "}
              <span className="playfair text-brand-lime">digital.</span>
            </h1>
            <p className="mb-8 max-w-md text-xl text-white/80">
              Especialistas em Gestão de Redes Sociais e Cobertura de Eventos
            </p>
            <a
              href="https://wa.me/5548998604665?text=Ol%C3%A1%2C%20quero%20fazer%20parte%20do%20hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group rounded-full bg-brand-blue px-8 py-6 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-brand-active hover:shadow-lg">
                QUERO FAZER PARTE DO HUB
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section id="what-we-do" className="scroll-mt-24 bg-gray-50 py-24">
        <Reveal className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-lg">
            <div
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-blue/20 via-brand-active/15 to-brand-lime/15 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <Image
                src="/equipe_livin.jpg"
                alt="Equipe Livin Hub Digital"
                width={1600}
                height={1066}
                sizes="(max-width: 768px) 100vw, 512px"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <Eyebrow>Quem somos</Eyebrow>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="playfair">Prazer,</span> somos a Livin Hub Digital!
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 md:mx-0">
              Nascemos em 2019 como Agência Ilumi, e desde o início acreditamos que estar no digital é muito mais que postar nas redes sociais. É entender o negócio do cliente, falar a sua língua e se tornar parte da sua jornada.
              Em seis anos, atendemos mais de 300 marcas no Brasil e nos Estados Unidos. Crescemos, expandimos e descobrimos que o que fazemos vai muito além de ser “apenas” uma agência.
              <br />
              <br />
              Hoje, como <span className="font-bold text-brand-blue">Livin Hub Digital</span>, assumimos nossa verdadeira essência: ser o ponto central que conecta estratégia, conteúdo, branding, design, tráfego e eventos em um só lugar — o seu hub digital.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Resultados + Depoimentos — fundo compartilhado e contínuo */}
      <section
        id="feedbacks"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-to-r from-brand-night to-brand-deep py-24"
      >
        {/* Aurora dinâmica cobrindo toda a área combinada */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-active/15 blur-3xl animate-aurora" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl animate-aurora [animation-delay:-6s]" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-brand-active/12 blur-3xl animate-aurora [animation-delay:-11s]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Resultados */}
          <Reveal>
            <div className="mb-12 text-center">
              <Eyebrow tone="light">Resultados</Eyebrow>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Números que falam por nós</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group rounded-3xl bg-white/5 p-8 text-center ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20"
                >
                  <div className="mb-2 text-5xl font-bold text-brand-lime">
                    {"text" in s ? (
                      s.text
                    ) : (
                      <>
                        {s.prefix}
                        <CountUp value={s.value} />
                      </>
                    )}
                  </div>
                  <p className="text-white/75">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* divisória sutil entre os dois blocos */}
          <div
            className="mx-auto my-16 h-px max-w-xs bg-gradient-to-r from-transparent via-white/15 to-transparent"
            aria-hidden="true"
          />

          {/* Depoimentos */}
          <Reveal className="mb-12 text-center">
            <Eyebrow tone="light">Depoimentos</Eyebrow>
            <h2 className="text-3xl font-bold text-white md:text-4xl">O que nossos clientes dizem</h2>
          </Reveal>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Por que escolher */}
      <section id="why-choose-us" className="scroll-mt-24 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center">
            <Eyebrow>Por que a Livin</Eyebrow>
            <h2 className="mb-4 text-3xl font-bold text-brand-ink md:text-4xl">
              Por que escolher a Livin Hub Digital?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Mais do que uma agência, somos o hub que conecta estratégia, criatividade e execução para que a sua marca tenha presença real e resultados consistentes.
            </p>
          </Reveal>
          <Reveal className="grid gap-6 md:grid-cols-3">
            {whyChoose.map((c) => (
              <FeatureCard key={c.title} icon={c.icon} title={c.title}>
                {c.desc}
              </FeatureCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Serviços — bento */}
      <section
        id="services"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-to-r from-brand-night to-brand-deep py-24"
      >
        <AuroraDark />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center">
            <Eyebrow tone="light">Serviços</Eyebrow>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Como a Livin pode te ajudar</h2>
            <p className="mx-auto max-w-2xl text-white/80">
              Conheça nosso ecossistema criativo e estratégico, onde marcas ganham voz, presença e movimento.
            </p>
          </Reveal>
          <Reveal className="grid gap-5 md:grid-cols-3">
            {featuredServices.map((s) => (
              <ServiceFeature key={s.title} icon={s.icon} title={s.title} desc={s.desc} cta={s.cta} />
            ))}
          </Reveal>
          <Reveal className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={100}>
            {otherServices.map((s) => (
              <ServiceTile key={s.title} icon={s.icon} title={s.title} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="scroll-mt-24 bg-white py-24">
        <Reveal className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="relative">
            <div
              className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-blue/10 via-brand-active/10 to-brand-lime/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="rounded-3xl bg-gray-50 p-6 ring-1 ring-black/5">
              <LogoCarousel />
            </div>
          </div>
          <div className="text-center md:text-left">
            <Eyebrow>Portfólio</Eyebrow>
            <h2 className="mb-4 text-3xl font-bold text-brand-ink md:text-4xl">
              Marcas que fazem parte do nosso Hub
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Temos orgulho de conectar nossa <span className="font-bold text-brand-blue">criatividade</span> e <span className="font-bold text-brand-blue">estratégia</span> a empresas que entendem o poder de uma presença digital autêntica.
              </p>
              <p>
                Valorizamos marcas que usam as redes para criar <span className="font-bold text-brand-blue">conexões reais</span>, fortalecer autoridade e gerar impacto.
              </p>
              <p>
                Nossos clientes confiam em soluções pensadas sob medida, alinhadas às suas metas e à identidade única de cada negócio.
              </p>
              <p>
                Aqui, cada estratégia nasce para refletir quem eles são e para levar a mensagem certa às pessoas certas.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Por que a Livin */}
      <section
        id="why-livin"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-to-r from-brand-night to-brand-deep py-24"
      >
        <AuroraDark />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center">
            <Eyebrow tone="light">Por que a Livin</Eyebrow>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white md:text-4xl">
              Por que escolher a <span className="text-brand-active">Livin Hub Digital</span> para cuidar da sua marca nas redes sociais?
            </h2>
          </Reveal>
          <div className="mb-14 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <Reveal className="space-y-4 text-center md:text-left">
              <p className="text-lg font-medium text-white/90">
                A Livin não é só uma agência. Somos um hub criativo e estratégico que entra de verdade no seu negócio para entender, construir e transformar.
              </p>
              <p className="text-lg font-medium text-white/90">
                Enquanto você foca no que faz de melhor, nós cuidamos da presença digital da sua marca nas redes sociais ao branding, do conteúdo a estratégia com estratégia, consistência e criatividade.
              </p>
            </Reveal>
            <Reveal className="flex flex-col gap-4" delay={120}>
              {whyLivinPoints.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.1]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />
                  <span className="font-medium text-white/90">{p}</span>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal className="text-center">
            <h3 className="mx-auto max-w-3xl text-2xl font-bold text-white md:text-3xl">
              Já são mais de 300 marcas impactadas em 6 anos de atuação no Brasil e nos EUA. E a próxima pode ser a sua.
            </h3>
          </Reveal>
        </div>
      </section>

      {/* CTA — Bruna */}
      <section id="contact-us" className="scroll-mt-24 bg-white py-24">
        <Reveal className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="text-center md:text-left">
            <Eyebrow>Estratégia Digital</Eyebrow>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-brand-ink md:text-4xl lg:text-5xl">
              Você já tem um bom conteúdo.{" "}
              <span className="text-brand-blue">Agora falta a estratégia que faz ele vender.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-md text-lg text-gray-600 md:mx-0">
              Seja uma empresa local, uma marca pessoal ou um negócio em crescimento: seu potencial digital merece um plano de verdade, feito sob medida pra você.
            </p>
            <a href="https://wa.me/5548998604665?text=Ol%C3%A1%2C%20quero%20estrat%C3%A9gia%20para%20o%20meu%20neg%C3%B3cio">
              <Button className="group rounded-full bg-brand-blue px-7 py-6 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-brand-active hover:shadow-xl">
                QUERO ESTRATÉGIA PARA O MEU NEGÓCIO
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Foto da fundadora */}
          <div className="relative mx-auto w-full max-w-sm md:justify-self-end">
            <div
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-blue/30 via-brand-active/20 to-brand-lime/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <Image
                src="/CTA-BRUNA.JPG"
                alt="Bruna de Bem — Founder e Estrategista Digital da Livin Hub Digital"
                fill
                sizes="(max-width: 768px) 90vw, 384px"
                className="object-cover object-top"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md ring-1 ring-white/20">
                <div className="text-white">
                  <p className="font-semibold leading-tight">Bruna de Bem</p>
                  <p className="text-sm text-white/75">Founder &amp; Estrategista Digital</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-lime">
                  Livin
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTAs finais — dois caminhos */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:gap-8">
          {/* Card escuro — próximo passo no digital */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-brand-night to-brand-deep p-8 shadow-xl ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1 lg:p-10">
            <div
              className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-active/25 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <Rocket className="h-6 w-6 text-brand-lime" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-tight text-white lg:text-3xl">
                Pronto para dar o próximo passo no digital?
              </h3>
              <p className="mb-8 max-w-md text-white/70">
                Vamos juntos criar uma presença que conecta, engaja e gera resultados reais para a sua marca.
              </p>
              <a
                className="mt-auto"
                href="https://wa.me/5548998604665?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Livin%20Hub%20Digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group/btn rounded-full bg-white px-7 py-6 text-base font-medium text-brand-blue transition-all duration-300 hover:scale-105 hover:bg-brand-lime hover:text-brand-ink">
                  Chame no WhatsApp
                  <Send className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>

          {/* Card claro — cobertura de evento */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 lg:p-10">
            <div
              className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-blue/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 ring-1 ring-brand-blue/15">
                <Camera className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-tight text-brand-ink lg:text-3xl">
                Seu evento merece viver além do dia em que acontece.
              </h3>
              <p className="mb-8 max-w-md text-gray-600">
                Captamos cada momento com um olhar estratégico, transformando emoções em conteúdo que conecta e gera lembranças.
              </p>
              <a
                className="mt-auto"
                href="https://wa.me/5548998604665?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20cobertura%20de%20evento%20e%20storymaker%20da%20Livin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group/btn rounded-full bg-brand-blue px-7 py-6 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-brand-active">
                  Garanta a sua data
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-black pb-8 pt-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-start">
              <Image
                src="/livin-logotipo-white.svg"
                alt="Livin Hub Digital"
                width={200}
                height={102}
                className="mb-3 h-auto w-32"
              />
              <p className="mb-1 text-sm text-gray-400">
                Somos o ponto de conexão entre marcas e o mundo digital.
              </p>
              <p className="text-sm text-gray-400">© 2026 Livin. Todos os direitos reservados.</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand-active">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#what-we-do" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand-active">
                    Quem somos
                  </a>
                </li>
                <li>
                  <a href="#services" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand-active">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand-active">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand-active">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#services" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand-active">
                    Gestão de Redes
                  </a>
                </li>
                <li>
                  <a href="#services" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand-active">
                    Criação de Conteúdo
                  </a>
                </li>
                <li>
                  <a href="#services" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand-active">
                    Cobertura de Eventos
                  </a>
                </li>
                <li>
                  <a href="#services" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand-active">
                    Tráfego Pago
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="mailto:livinhubdigital@gmail.com" className="transition-colors hover:text-brand-active">
                    livinhubdigital@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5548998604665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-active"
                  >
                    +55 (48) 99860-4665
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="https://instagram.com/livinhubdigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center transition-all duration-300 hover:translate-x-1 hover:text-brand-active"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex justify-center border-t border-white/10 pt-6">
            <PoweredByMindstorm tone="dark" />
          </div>
        </div>
      </footer>
    </div>
  )
}
