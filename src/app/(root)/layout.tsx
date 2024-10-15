import {Metadata} from "next";
import {SliderBlock} from "@/components/shared/SliderBlock";
import {SITE_NAME} from "@/constants/seo.constants";
import ContainerLayout from "../../components/shared/ContainerLayout";
import {InstructionsBlock} from "@/components/shared/InstructionsBlock";
import {TermsBlock} from "@/components/shared/TermsBlock";

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
    description: 'Lidgen'
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
      <>
        <ContainerLayout>
            <SliderBlock/>
            <InstructionsBlock/>
            <TermsBlock/>
        </ContainerLayout>
      </>
    );
}