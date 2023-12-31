import Providers from '@/components/Provider/Provider'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Noticias Robotize',
  description: 'Generated by create next app',
}
// const inter = Roboto({ weight: '400',subsets: ['latin'] })
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6878767486653297"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6878767486653297"
         crossOrigin="anonymous"></script>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8XP02Q0MEQ"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-8XP02Q0MEQ');
              `,
            }}
          />
      </head>
      <body className={roboto_mono.className}><Providers>{children}</Providers></body>
    </html>
  )
}
