import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Besley } from 'next/font/google'
import './globals.css'

// Besley — fonte serifada de apoio do brandbook (disponível no Google Fonts).
// Cobre os acentos editoriais/script enquanto a Hello Montana não é self-hosted.
const besley = Besley({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-besley',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Livin - Hub Digital',
  description:
    'O hub entre a sua marca e o digital. Especialistas em gestão de redes sociais, conteúdo, branding e cobertura de eventos.',
  keywords: [
    'marketing digital',
    'gestão de redes sociais',
    'social media',
    'branding',
    'cobertura de eventos',
    'agência de marketing',
    'Livin Hub Digital',
  ],
  authors: [{ name: 'Livin Hub Digital' }],
  metadataBase: new URL('https://livinhubdigital.com.br'),
  openGraph: {
    title: 'Livin - Hub Digital',
    description:
      'Somos o hub entre você e o digital. Estratégia, conteúdo e presença real para a sua marca.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Livin Hub Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Livin - Hub Digital',
    description: 'Somos o hub entre você e o digital.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable} ${besley.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
