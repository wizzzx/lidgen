"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { TitleBlock } from "@/components/shared/TitleBlock";
import { InstructionsBlock } from "@/components/shared/InstructionsBlock";
import { TermsBlock } from "@/components/shared/TermsBlock";
import { ReviewBlock } from "@/components/shared/ReviewBlock";
import { GuaranteeBlock } from "@/components/shared/GuaranteeBlock";
import { OtherOffersBlock } from "@/components/shared/OtherOffersBlock";
import { SelectedMfoInfo } from "@/components/shared/SelectedMfoInfo";

export default function CompanyPage() {
  return (
    <main>
      <Container>
        <TitleBlock />
        {/*   new blocks*/}
        <SelectedMfoInfo />
        <InstructionsBlock />
        <TermsBlock />
        <ReviewBlock />
        <GuaranteeBlock />
        <OtherOffersBlock />
      </Container>
    </main>
  );
}
