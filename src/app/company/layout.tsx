import * as React from "react";
import { SITE_NAME } from "@/constants/seo.constants";
import ContainerLayout from "@/components/shared/ContainerLayout";
import { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Lidgen/company",
};

export default function CompanyPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ContainerLayout>
        <Header />
        {children}
      </ContainerLayout>
      <Footer />
    </>
  );
}
