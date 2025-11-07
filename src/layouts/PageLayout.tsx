import React from 'react';
import mascotImage from '@/assets/icons/mascot.png';
import {ContentContainer, Mascot, PageWrapper} from "../styles/PageLayout.styles";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
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
