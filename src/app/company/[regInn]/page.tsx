"use client";

import { notFound } from "next/navigation";
import { MfoData } from "@/types/mfo_data";
import { SelectedMfoInfo } from "@/components/shared/SelectedMfoInfo";

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
      <SelectedMfoInfo mfo={selectedMfo} />
    </div>
  );
}
