import { Metadata } from "next";
import { SITE_NAME } from "@/constants/seo.constants";
import ContainerLayout from "@/components/shared/ContainerLayout";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Lidgen/landing_two",
};

export default function LandingTwo({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div>
        <div></div>
      </div>
    </>
  );
}
