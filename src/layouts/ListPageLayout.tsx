import mascotImage from "@/assets/icons/mascot_hello.png";
import {ContentContainer, Mascot, PageWrapper} from "../styles/ListLayout.styles";
import type {PageLayoutProps} from "@/types/PageLayoutProps";

const ListPageLayout = ({ children }: PageLayoutProps) => {
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
