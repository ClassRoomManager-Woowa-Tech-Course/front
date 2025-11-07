import React from "react";
import mascotImage from "@/assets/icons/mascot_hello.png";
import styled from "styled-components";
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

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;          
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  width: 100%;
  max-width: 1000px;
  z-index: 10;
  color: black;
  padding: 32px 40px; 

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const Mascot = styled.img`
  position: fixed;
  right: 10%;
  bottom: 10%;
  width: 250px;
  z-index: 5;

  @media (max-width: 768px) {
    display: none;
  }
`;