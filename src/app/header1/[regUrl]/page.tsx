// "use client";
//
// import { SelectedMfoInfo } from "@/components/shared/SelectedMfoInfo";
// import { TitleBlock } from "@/components/shared/TitleBlock";
// import { MapBlock } from "@/components/shared/MapBlock";
// import { InstructionsBlock } from "@/components/shared/InstructionsBlock";
// import { TermsBlock } from "@/components/shared/TermsBlock";
// import { ReviewBlock } from "@/components/shared/ReviewBlock";
// import { GuaranteeBlock } from "@/components/shared/GuaranteeBlock";
// import { OtherOffersBlock } from "@/components/shared/OtherOffersBlock";
// import * as React from "react";
// import data from "../../../data/mfo_data.json";
// import { notFound } from "next/navigation";
//
// interface Props {
//   params: {
//     regUrl: string;
//   };
// }
//
// export default function MfoPage({ params }: Props) {
//   const selectedMfo = data.find((mfo) => mfo.regUrl === params.regUrl);
//
//   if (!selectedMfo) {
//     notFound();
//   }
//
//   return (
//     <div>
//       <TitleBlock />
//       <SelectedMfoInfo data={selectedMfo} />
//       <MapBlock />
//       <InstructionsBlock />
//       <TermsBlock />
//       <ReviewBlock />
//       <GuaranteeBlock />
//       <OtherOffersBlock />
//     </div>
//   );
// }
