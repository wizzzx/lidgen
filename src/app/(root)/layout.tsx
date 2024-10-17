import {Metadata} from "next";
import {TitleBlock} from "../../components/shared/TitleBlock";
import {SITE_NAME} from "@/constants/seo.constants";
import ContainerLayout from "../../components/shared/ContainerLayout";
import {InstructionsBlock} from "@/components/shared/InstructionsBlock";
import {TermsBlock} from "@/components/shared/TermsBlock";
import {RecommendationBlock} from "@/components/shared/RecommendationBlock";
import {GuaranteeBlock} from "@/components/shared/GuaranteeBlock";
import {Footer} from "@/components/shared/Footer";

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
            <TitleBlock/>
            <InstructionsBlock/>
            <TermsBlock/>
            <RecommendationBlock/>
            <GuaranteeBlock/>
            <Footer/>
        </ContainerLayout>
      </>
    );
}