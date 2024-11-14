import React from "react";
import { Metadata } from "next";
import { SITE_NAME } from "@/constants/seo.constants";
import ContainerLayout from "@/components/shared/ContainerLayout";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/ui/Header";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Lidgen/signup",
};

export default function SignUpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ContainerLayout>
        <Header />
      </ContainerLayout>
      <Footer />
    </>
  );
}
