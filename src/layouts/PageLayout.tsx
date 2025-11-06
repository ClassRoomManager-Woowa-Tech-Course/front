import React from 'react';
import styled from 'styled-components';
import mascotImage from '@/assets/icons/mascot.png';

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

const PageWrapper = styled.div`
    width: 80%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 40px;
    position: relative;
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        padding: 20px; // 모바일에서는 패딩 축소
    }
`;

const ContentContainer = styled.div`
     text-align: left;
     width: 100%;
     max-width: 800px; // 최대 너비
     color: black;
`;

const Mascot = styled.img`
    position: fixed; // 뷰포트 기준 고정 (스크롤 따라옴)
    left: 75%;
    bottom: 20%;
    //width: 250px;
    width: 300px;
    z-index: 5;
    // 화면 너비가 768px 이하일 때 (태블릿/모바일)
    @media (max-width: 768px) {
        display: none; // 마스코트를 숨겨서 콘텐츠를 가리지 않도록 함
    }
`;