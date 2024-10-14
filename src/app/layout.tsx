import {Providers} from '@/app/providers'
import {Nunito} from "next/font/google";
// import localFont from "next/font/local";
import {Montserrat} from "next/font/google";
import {Viewport} from "next";
import '../../public/assets/styles/global.scss'
import React from "react";

const nunito = Nunito({
    subsets:["cyrillic", "latin"],
    weight: ['500', '700'],
    display: "swap",
    variable: '--font-nunito',
    style: ['normal']
})

const montserrat = Montserrat({
    subsets: ["cyrillic"],
    weight: ['600', '700'],
    display: "swap",
    variable: '--font-montserrat',
    style: ['normal']
})

export const viewport: Viewport = {
    initialScale: 1,
    maximumScale: 1,
    userScalable: true
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
      <html lang="ru">
        <body className={`${nunito.className} ${montserrat.className}  app`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    );
}

