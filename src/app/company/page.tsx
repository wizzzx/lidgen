"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { TitleBlock } from "@/components/shared/TitleBlock";
import { InstructionsBlock } from "@/components/shared/InstructionsBlock";
import { TermsBlock } from "@/components/shared/TermsBlock";
import { ReviewBlock } from "@/components/shared/ReviewBlock";
import { GuaranteeBlock } from "@/components/shared/GuaranteeBlock";
import { OtherOffersBlock } from "@/components/shared/OtherOffersBlock";
import { MapBlock } from "@/components/shared/MapBlock";

export default function CompanyPage() {
  return (
    <>
      <main>
        <Container>
          <TitleBlock />
          <MapBlock />
          <InstructionsBlock />
          <TermsBlock />
          <ReviewBlock />
          <GuaranteeBlock />
          <OtherOffersBlock />
        </Container>
      </main>
    </>
  );
}
