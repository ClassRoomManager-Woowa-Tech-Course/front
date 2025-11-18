import mascotImage from '@/assets/icons/mascot.png';
import {ContentContainer, Mascot, PageWrapper} from "../styles/PageLayout.styles";
import type {PageLayoutProps} from "@/types/PageLayoutProps";

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <PageWrapper>
            <ContentContainer>
                {children}
            </ContentContainer>
            <Mascot src={mascotImage} alt="Mascot" />
        </PageWrapper>
    );
};

export default PageLayout;
