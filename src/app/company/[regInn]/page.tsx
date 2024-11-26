"use client";

import { notFound } from "next/navigation";
import { MfoData } from "@/types/mfo_data";
import { SelectedMfoInfo } from "@/components/shared/SelectedMfoInfo";
import { TitleBlock } from "@/components/shared/TitleBlock";
import { MapBlock } from "@/components/shared/MapBlock";
import { InstructionsBlock } from "@/components/shared/InstructionsBlock";
import { TermsBlock } from "@/components/shared/TermsBlock";
import { ReviewBlock } from "@/components/shared/ReviewBlock";
import { GuaranteeBlock } from "@/components/shared/GuaranteeBlock";
import { OtherOffersBlock } from "@/components/shared/OtherOffersBlock";
import * as React from "react";

interface Props {
  params: { regInn: string };
}

export default function MfoPage({ params }: Props) {
  const { regInn } = params;

  const selectedMfo = MfoData.find((mfo) => mfo.regInn === regInn);

  if (!selectedMfo) {
    notFound();
  }

  return (
    <div>
      <TitleBlock />
      <SelectedMfoInfo mfo={selectedMfo} />
      <MapBlock />
      <InstructionsBlock />
      <TermsBlock />
      <ReviewBlock />
      <GuaranteeBlock />
      <OtherOffersBlock />
    </div>
  );
}
