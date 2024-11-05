"use client";

import React from "react";
import { Container } from "@/components/shared/Container";
import { InstructionsBlock } from "@/components/shared/InstructionsBlock";
import { TermsBlock } from "@/components/shared/TermsBlock";
import { RecommendationBlock } from "@/components/shared/RecommendationBlock";
import { GuaranteeBlock } from "@/components/shared/GuaranteeBlock";
import { ArticlesBlock } from "@/components/shared/ArticlesBlock";
import { Footer } from "@/components/shared/Footer";
import { TitleBlock } from "@/components/shared/TitleBlock";

export default function Home() {
  return (
    <main>
      <Container>
        <TitleBlock />
        <InstructionsBlock />
        <TermsBlock />
        <RecommendationBlock />
        <GuaranteeBlock />
        <ArticlesBlock />
        <Footer />
      </Container>
    </main>
  );
}
