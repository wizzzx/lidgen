import { Providers } from "@/app/providers";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { Viewport } from "next";
import "../../public/assets/styles/globals.scss";
import React from "react";
import cn from "classnames";

const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-nunito",
  style: ["normal"],
});

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-montserrat",
  style: ["normal"],
});

const cera = localFont({
  variable: "--font-cera",
  src: [
    {
      path: "./fonts/Cera Pro/CeraPro-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Cera Pro/CeraPro-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Cera Pro/CeraPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Cera Pro/CeraPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Cera Pro/CeraPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Cera Pro/CeraPro-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

const sfpro = localFont({
  variable: "--font-sfpro",
  src: [
    {
      path: "/fonts/SF Pro Display/SFProDisplay-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Display/SFProDisplay-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Display/SFProDisplay-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Display/SFProDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Display/SFProDisplay-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Display/SFProDisplay-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro Display/SFProDisplay-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

export const viewport: Viewport = {
  width: "374px",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={cn(
        cera.variable,
        sfpro.variable,
        nunito.variable,
        montserrat.variable,
      )}
    >
      <head title={"Главная страница"}>
        <script
          src={
            "https://api-maps.yandex.ru/v3/?apikey=ee986e19-547e-4cf9-a880-08498db6fb46&lang=ru_RU"
          }
          defer={true}
          type="text/javascript"
        />
      </head>
      <body
        className={`${nunito.className} ${montserrat.className} ${cera.className} ${sfpro.className} app`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
