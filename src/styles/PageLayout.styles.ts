import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 70%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 10px;
    position: relative;
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        padding: 20px; // 모바일에서는 패딩 축소
    }
`;

export const ContentContainer = styled.div`
     text-align: left;
     width: 100%;
     max-width: 900px;
     color: black;
`;

export const Mascot = styled.img`
    position: fixed;
    left: 70%;
    bottom: 5%;
    width: clamp(300px, 25vw, 550px);
    z-index: 5;
    height: auto;
    // 화면 너비가 768px 이하일 때 (태블릿/모바일)
    @media (max-width: 768px) {
        display: none; // 마스코트를 숨겨서 콘텐츠를 가리지 않도록 함
    }
`;