import React from "react";
import mascotImage from "@/assets/icons/mascot_hello.png";
import {ContentContainer, Mascot, PageWrapper} from "../styles/ListLayout.styles";
interface ListPageLayoutProps {
    children: React.ReactNode;
}

const ListPageLayout: React.FC<ListPageLayoutProps> = ({ children }) => {
    return (
        <PageWrapper>
            <ContentContainer>
                {children}
            </ContentContainer>
            <Mascot src={mascotImage} alt="Mascot" />
        </PageWrapper>
    );
};

export default ListPageLayout;
